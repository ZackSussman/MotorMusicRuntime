import {ParserError} from "../Compile";
import {ParserRuleContext, TerminalNode} from "antlr4";
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { AnomDeclContext, BuiltInContext, ContainmentContext, DeclContext, DirectionSpecContext, EvalContext, WrappedExpContext, ExpContext, FunctionTypeContext, NumberExpContext, Exp_or_gestureContext, ExpExpOrGestureContext, GestureExpOrGestureContext, IdentExpContext } from "../../../../antlr/generated/MotorMusicParser";

import { resolvePitchSpecificationString, PitchSpecification, } from "../SoundSpecification/PitchSpecifications";
import { resolve } from "path";


class Type {
	private value : {number : void} | {syllable: void} | {raisedGesture : void} | {from: Type, to: Type };

	private constructor() {}


	//makes a type from an expression and otherwises raises an error
	static fromExpression(ctx : ExpContext, addError) {
		if (ctx instanceof BuiltInContext) {
			let name = ctx._builtin.text;
			switch (name) {
				case "number":
					return Type.number();
				case "raisedGesture":
					return Type.raisedGesture();
				case "syllable":
					return Type.syllable();
				default:
					addError("Unknown built-in type: " + name, ctx);
			}
		}
		else if (ctx instanceof FunctionTypeContext) {
			let inType = Type.fromExpression(ctx._inType, addError);
			let outType = Type.fromExpression(ctx._outType, addError);
			 if (inType == undefined || outType == undefined) {
				 return undefined;
			 }
			 return Type.function(inType, outType);
		}
		return undefined;
	}

	static number() {
		let res = new Type();
		res.value = {number: undefined};
		return res;
	}

	static syllable() {
		let res = new Type();
		res.value = {syllable: undefined};
		return res;
	}

	static raisedGesture() {
		let res = new Type();
		res.value = {raisedGesture: undefined};
		return res;
	}

	static function(from: Type, to: Type) {
		let res = new Type();
		res.value = {from: from, to: to};
		return res;
	}


	isNumber() {
		return 'number' in this.value;
	}

	isSyllable() {
		return 'syllable' in this.value;
	}

	isRaisedGesture() {
		return 'raisedGesture' in this.value;
	}

	isFunction(type1 : Type, type2 : Type) {
		return 'from' in this.value && 'to' in this.value && this.value.from.equals(type1) && this.value.to.equals(type2);
	}

	getFrom() {
		if ("from" in this.value) {
			return this.value.from;
		}
		throw new Error("Called getFrom on a non function type");
	}

	getTo() {
		if ("to" in this.value) {
			return this.value.to;
		}
		throw new Error("Called getTo on a non function type");
	}

	equals(other : Type) {
		if (other == undefined) {
			return false;
		}
		if (other.isNumber() && this.isNumber()) {
			return true;
		}
		if (other.isSyllable() && this.isSyllable()) {
			return true;
		}
		if (other.isRaisedGesture() && this.isRaisedGesture()) {
			return true;
		}
		let from, to;
		try {
			from = this.getFrom();
			to = this.getTo();
		} catch (e) {
			return false;
		}
		return other.isFunction(from, to);
	}

	format() {
		if (this.isNumber()) {
			return "number";
		}
		if (this.isSyllable()) {
			return "syllable";
		}
		if (this.isRaisedGesture()) {
			return "raisedGesture";
		}
		if ("from" in this.value && "to" in this.value) {
			return "(" + this.value.from.format() + " -> " + this.value.to.format() + ")";
		}
		throw new Error("called format on invalid type: " + this.value);
	}

}

//contexts which we need to associate with types 
type typableContext = Exp_or_gestureContext;

//we have to check that the parse tree actually encompasses the entire code
export class MotorMusicParserStaticAnalysisListener extends MotorMusicParserListener {

    errors : ParserError[] = [];



	//as we discover the type of expressions, put the types here
	discoveredTypableContextTypes : Map<typableContext, Type>
	
	//Substitutables are the names on inputs to functions, we must check that they don't collide with functino names
	//note a nested function definition can use the same variable name, so we map to a 'stack' of types for the stack of scopes for this replacable
	inScopeSubstitutableTypes : Map<string, Type[]>

	//don't allow a function inside a function if they name clash (hence no stack here)
	inScopeFunctionTypes : Map<string, Type>

	//sometimes we have to defer setup to a specific time, so this is useful for capturing that 
	pendingActionsOnEnter: Map<typableContext, (() => void)[]> = new Map();


    constructor() {
        super();
        this.errors = [];
    }

	private addError(message : string, ctx : ParserRuleContext) {
		let error = new ParserError(ctx.start.line, ctx.stop.line, ctx.start.column + 1, ctx.stop.column + 1, message);
		if (!(this.errors.includes(error))) {
			this.errors.push(error);
		}
	}

	private addErrorForTerminalNode(message : string, terminalNode : TerminalNode) {
		let error = new ParserError(terminalNode.symbol.line, terminalNode.symbol.line, terminalNode.symbol.column + 1, terminalNode.symbol.column + 1 + terminalNode.symbol.text.length, message);
		if (!(this.errors.includes(error))) {
			this.errors.push(error);
		}
	}

	//expressions
	//------------------------
	private handleExpOrGesturePendingActions(ctx : ExpExpOrGestureContext | GestureExpOrGestureContext) {
		if (this.pendingActionsOnEnter.has(ctx)) {
			for (let action of this.pendingActionsOnEnter.get(ctx)) {
				action();
			}
		}
	}
	enterExpExpOrGesture = (ctx: ExpExpOrGestureContext) => {
		this.handleExpOrGesturePendingActions(ctx);
	}
	enterGestureExpOrGesture = (ctx: GestureExpOrGestureContext) => {
		this.handleExpOrGesturePendingActions(ctx);
	}


	exitWrapped = (ctx : WrappedExpContext) => {
		let innerType = this.discoveredTypableContextTypes.get(ctx._within);
		if (innerType != undefined) {
			this.discoveredTypableContextTypes.set(ctx, innerType);
		}
	}


	exitNumberExp = (ctx: NumberExpContext) => {
		this.discoveredTypableContextTypes.set(ctx, Type.number());
	}

	exitIdentExp = (ctx: IdentExpContext) => {
		//an ident refers to the type it was said to if it's a function input, otherwise it's a syllable
		if (this.inScopeSubstitutableTypes.has(ctx._symbol_.text)) {
			this.discoveredTypableContextTypes.set(ctx, this.inScopeSubstitutableTypes.get(ctx._symbol_.text).at(-1));
		}
		else {
			this.discoveredTypableContextTypes.set(ctx, Type.syllable());
		}
	}

	exitEval = (ctx: EvalContext) => {
		let functionType = this.discoveredTypableContextTypes.get(ctx._func)
		let inputType = this.discoveredTypableContextTypes.get(ctx._arg);
		if (functionType == undefined || inputType == undefined) { 
			if (this.errors.length == 0) {
				this.addError("Called a function which did not typecheck", ctx);
			}
			return;
		}
		if (!functionType.getFrom().equals(inputType)) {
			this.addError("function argument type does not match the type required by the function. The function expects a " + 
				functionType.getFrom().format() + " but it received a " + inputType.format(), ctx);
		}
		this.discoveredTypableContextTypes.set(ctx, functionType.getTo());
	}

	enterAnomDecl = (ctx: AnomDeclContext) => {
		if (ctx._arg.text in this.inScopeSubstitutableTypes) {
			this.inScopeSubstitutableTypes.get(ctx._arg.text).push(Type.fromExpression(ctx._inTyp, this.addError));
		}
		else {
			this.inScopeSubstitutableTypes.set(ctx._arg.text, [Type.fromExpression(ctx._inTyp, this.addError)]);
		}
	}

	exitAnomDecl = (ctx: AnomDeclContext) => {
		let declaredOutType = Type.fromExpression(ctx._outType, this.addError);
		let actualOutTypye = this.discoveredTypableContextTypes.get(ctx._out);
		if (declaredOutType == undefined || actualOutTypye == undefined) {
			if (this.errors.length == 0) {
				throw new Error("fatal error in type checker :(");
			}
			return;
		}
		if (!declaredOutType.equals(actualOutTypye)) {
			this.addError("expected the function output to be a " + declaredOutType.format() + " but we received a " + actualOutTypye.format(), ctx);
		}
		let inType = Type.fromExpression(ctx._inTyp, this.addError);
		if (inType == undefined) {
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.function(inType, actualOutTypye));
		this.inScopeSubstitutableTypes.get(ctx._arg.text).pop();
	}

	enterDecl = (ctx : DeclContext) => {
		//1) add the argument for the function into our maps
		let argName = ctx._argName.text;
		let argType = Type.fromExpression(ctx._inTyp, this.addError);
		if (argType == undefined) {
			return;
		}
		if (this.inScopeFunctionTypes.has(argName)) {
			this.addError("function argument name cannot interfere with previous function definition: " + argName, ctx);
			return;
		}
		if (this.inScopeSubstitutableTypes.has(argName)) {
			this.inScopeSubstitutableTypes.get(argName).push(argType);
		}
		else {
			this.inScopeSubstitutableTypes.set(argName, [argType]);
		}

		//2) intercept the  ctx._in so that we can add 
		let addFunctionToScope = () => {
			let functionName = ctx._decl_name.text;
			let outType = this.discoveredTypableContextTypes.get(ctx._out);
			let declaredOutType = Type.fromExpression(ctx._outType, this.addError);
			if (declaredOutType == undefined || outType == undefined) {
				if (this.errors.length == 0) {
					throw new Error("fatal error in type checker :(");
				}
				return;
			}
			if (!declaredOutType.equals(outType)) {
				this.addError("expected the function output to be a " + declaredOutType.format() + " but we received a " + outType.format(), ctx);
				return;
			}
			let inType = Type.fromExpression(ctx._inTyp, this.addError);
			if (inType == undefined) {
				return;
			}
			if (this.inScopeFunctionTypes.has(functionName)) {
				this.addError("function name already in scope: " + functionName, ctx);
				return;
			}
			this.inScopeFunctionTypes.set(functionName, Type.function(inType, outType));
			this.inScopeSubstitutableTypes.get(argName).pop();
		}

		if (!this.pendingActionsOnEnter.has(ctx._in_)) {
			this.pendingActionsOnEnter.set(ctx._in_, [addFunctionToScope]);
		}
		else {
			this.pendingActionsOnEnter.get(ctx._in_).push(addFunctionToScope);
		}
	
	}

	exitDecl = (ctx: DeclContext) => {
		this.inScopeFunctionTypes.delete(ctx._decl_name.text);
	}
	
	//------------------------


	//gestures------------------





	//-------------

}