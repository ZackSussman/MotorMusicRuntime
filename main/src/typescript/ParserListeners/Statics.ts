import {ParserError} from "../Compile";
import {ParserRuleContext, TerminalNode} from "antlr4";
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { AnomDeclContext, BuiltInContext, ContainmentContext, DeclContext, DirectionSpecContext, EvalContext, WrappedExpContext, ExpContext, FunctionTypeContext, NumberExpContext, Exp_or_gestureContext, ExpExpOrGestureContext, GestureExpOrGestureContext, IdentExpContext, EmptyContext, TimeTaggedEmptyContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedSyllableGroupContext, NonEmptyProgramContext, SyllableGroupContext } from "../../../../antlr/generated/MotorMusicParser";

import { resolve } from "path";


export class Type {
	private value : {number : void} | {syllable: void} | {raisedGesture : void} | {syllables: void} | {from: Type, to: Type } ;

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
				case "syllables":
					return Type.syllables();
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

	static syllables() {
		let res = new Type();
		res.value = {syllables: undefined};
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

	isSyllables() {
		return 'syllables' in this.value;
	}

	isSyllabic() {
		return this.isSyllable() || this.isSyllables();
	}

	isRaisedGesture() {
		return 'raisedGesture' in this.value;
	}


	isSpecificFunction(type1 : Type, type2 : Type) {
		return 'from' in this.value && 'to' in this.value && this.value.from.equals(type1) && this.value.to.equals(type2);
	}

	isFunction() {
		return 'from' in this.value && 'to' in this.value;
	}


	isGesture() {
		return this.isSyllabic() || this.isRaisedGesture();
	}

	getFrom() {
		if ("from" in this.value) {
			return this.value.from;
		}
		throw new Error("Called getFrom on a non function type: " + this.format());
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
		if (other.isSyllables() && this.isSyllables()) {
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
		return other.isSpecificFunction(from, to);
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
		if (this.isSyllables()) {
			return "syllables";
		}
		if ('from' in this.value && 'to' in this.value) {
			// Function types are right-associative, so only wrap left side if it's a function
			let fromStr = this.value.from.format();
			if (fromStr.includes('->')) {
				fromStr = "(" + fromStr + ")";
			}
			return fromStr + " -> " + this.value.to.format();
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
        this.discoveredTypableContextTypes = new Map();
        this.inScopeSubstitutableTypes = new Map();
        this.inScopeFunctionTypes = new Map();
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
	exitExpExpOrGesture = (ctx: ExpExpOrGestureContext) =>  {
		let innerType = this.discoveredTypableContextTypes.get(ctx._e);
		if (innerType != undefined) {
			this.discoveredTypableContextTypes.set(ctx, innerType);
		}
		else if (this.errors.length == 0) {
			throw new Error("exitExpExpOrGesture: fatal error in type checker :(");
		}
	}
	enterGestureExpOrGesture = (ctx: GestureExpOrGestureContext) => {
		this.handleExpOrGesturePendingActions(ctx);
	}
	exitGestureExpOrGesture = (ctx: GestureExpOrGestureContext) =>  {
		let innerType = this.discoveredTypableContextTypes.get(ctx._g);
		if (innerType != undefined) {
			this.discoveredTypableContextTypes.set(ctx, innerType);
		}
		else if (this.errors.length == 0) {
			throw new Error("exitGestureExpOrGesture: fatal error in type checker :(");
		}
	}

	exitWrappedExp = (ctx : WrappedExpContext) => {
		let innerType = this.discoveredTypableContextTypes.get(ctx._within);
		if (innerType != undefined) {
			this.discoveredTypableContextTypes.set(ctx, innerType);
		}
		else if (this.errors.length == 0) {
			throw new Error("exitWrappedExp: fatal error in type checker :(");
		}
	}


	exitNumberExp = (ctx: NumberExpContext) => {
		if (Number(ctx.NUMBER().getText()) == 0) {
			this.addError("number literal cannot be zero", ctx);
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.number());
	}

	exitIdentExp = (ctx: IdentExpContext) => {
		if (this.inScopeSubstitutableTypes.has(ctx._symbol_.text)) {
			this.discoveredTypableContextTypes.set(ctx, this.inScopeSubstitutableTypes.get(ctx._symbol_.text).at(-1));
		}
		else if (this.inScopeFunctionTypes.has(ctx._symbol_.text)) {
			this.discoveredTypableContextTypes.set(ctx, this.inScopeFunctionTypes.get(ctx._symbol_.text));
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
		if (!functionType.isFunction()) {
			this.addError("Tried to call a non-function type: " + functionType.format(), ctx._func);
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
			this.inScopeSubstitutableTypes.get(ctx._arg.text).push(Type.fromExpression(ctx._inTyp, this.addError.bind(this)));
		}
		else {
			this.inScopeSubstitutableTypes.set(ctx._arg.text, [Type.fromExpression(ctx._inTyp, this.addError.bind(this))]);
		}
	}

	exitAnomDecl = (ctx: AnomDeclContext) => {
		let declaredOutType = Type.fromExpression(ctx._outType, this.addError.bind(this));
		let actualOutTypye = this.discoveredTypableContextTypes.get(ctx._out);
		if (declaredOutType == undefined || actualOutTypye == undefined) {
			if (this.errors.length == 0) {
				throw new Error("exitAnomDecl: fatal error in type checker :(");
			}
			return;
		}
		if (!declaredOutType.equals(actualOutTypye)) {
			this.addError("expected the function output to be a " + declaredOutType.format() + " but we received a " + actualOutTypye.format(), ctx);
		}
		let inType = Type.fromExpression(ctx._inTyp, this.addError.bind(this));
		if (inType == undefined) {
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.function(inType, actualOutTypye));
		this.inScopeSubstitutableTypes.get(ctx._arg.text).pop();
	}

	enterDecl = (ctx : DeclContext) => {
		//1) add the argument for the function into our maps
		let argName = ctx._argName.text;
		let argType = Type.fromExpression(ctx._inTyp, this.addError.bind(this));
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
			let declaredOutType = Type.fromExpression(ctx._outType, this.addError.bind(this));
			if (declaredOutType == undefined || outType == undefined) {
				if (this.errors.length == 0) {
					throw new Error("enterDecl: fatal error in type checker :(");
				}
				return;
			}
			if (!declaredOutType.equals(outType)) {
				this.addError("expected the function output to be a " + declaredOutType.format() + " but we received a " + outType.format(), ctx);
				return;
			}
			let inType = Type.fromExpression(ctx._inTyp, this.addError.bind(this));
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
		let resultType = this.discoveredTypableContextTypes.get(ctx._in_);
		if (resultType != undefined) {
			this.discoveredTypableContextTypes.set(ctx, resultType);
		}
		this.inScopeFunctionTypes.delete(ctx._decl_name.text);
	}
	
	//------------------------


	//gestures------------------
	exitEmpty = (ctx: EmptyContext) => {
		this.discoveredTypableContextTypes.set(ctx, Type.syllable());
	}

	exitTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
		let timeTagType = this.discoveredTypableContextTypes.get(ctx._number_);
		if (timeTagType == undefined) {
			return;
		}
		if (!timeTagType.isNumber()) {
			this.addError("time tag must be a number, we received a " + timeTagType.format(), ctx._number_);
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.syllable());
	}

	exitSyllableGroupSingle = (ctx: SyllableGroupSingleContext) => {
		let syllableType = this.discoveredTypableContextTypes.get(ctx._syllable);
		if (syllableType == undefined) {
			return;
		}
		if (!syllableType.isSyllable()) {
			this.addError("expected a syllable within syllable group, found a " + syllableType.format(), ctx._syllable);
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.syllable());
	}

	exitSyllableGroupMulti = (ctx: SyllableGroupMultiContext) => {
		let topSyllableType = this.discoveredTypableContextTypes.get(ctx._top);
		if (topSyllableType == undefined) {
			return;
		}
		if (!topSyllableType.isSyllable()) {
			this.addError("expected a syllable within syllable group, found a " + topSyllableType.format(), ctx._top);
			return;
		}
		
		let restOfSyllablesType = this.discoveredTypableContextTypes.get(ctx._rest);
		if (restOfSyllablesType == undefined) {
			return;
		}
		if (!restOfSyllablesType.isSyllabic()) {
			this.addError("expected a syllabic type within rest of syllable group, found a " + restOfSyllablesType.format() + " (a syllablic type is either syllable or syllables)", ctx._rest);
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.syllables());
	}

	exitSyllableGroup = (ctx: SyllableGroupContext) => {
		let foundType = this.discoveredTypableContextTypes.get(ctx._syllables);
		if (foundType == undefined && this.errors.length == 0) {
			throw new Error("exitSyllableGroup: FATAL ERROR in type checker");
		}
		this.discoveredTypableContextTypes.set(ctx, foundType);

	}

	exitTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
		let timeTagType = this.discoveredTypableContextTypes.get(ctx._number_);
		if (timeTagType == undefined) {
			return;
		}
		if (!timeTagType.isNumber()) {
			this.addError("time tag must be a number, we received a " + timeTagType.format(), ctx._number_);
			return;
		}
		let syllableGroupType = this.discoveredTypableContextTypes.get(ctx._syllables);
		if (syllableGroupType == undefined) {
			return;
		}
		if (!syllableGroupType.isSyllabic()) {
			this.addError("expected a syllabic type within syllable group, found a " + syllableGroupType.format() + " (a syllablic type is either syllable or syllables)", ctx._syllables);
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.syllables());
	}

	exitDirectionSpec = (ctx: DirectionSpecContext) => {
		if (this.errors.length > 0) {
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.raisedGesture());
	}

	exitContainment = (ctx: ContainmentContext) => {
		let syllableType = this.discoveredTypableContextTypes.get(ctx._syllables);
		if (syllableType == undefined) {
			return;
		}
		if (!syllableType.isSyllabic()) {
			this.addError("expected a syllabic type for container, found a " + syllableType.format() + " (a syllablic type is either syllable or syllables)", ctx._syllables);
			return;
		}
		if (this.errors.length > 0) {
			return;
		}
		this.discoveredTypableContextTypes.set(ctx, Type.raisedGesture());
	}

	//-------------


	exitNonEmptyProgram =  (ctx: NonEmptyProgramContext) => {
		let programType = this.discoveredTypableContextTypes.get(ctx._p);
		if (programType == undefined) {
			if (this.errors.length == 0) {
				throw new Error("exitNonEmptyProgram: fatal error in type checker :(");
			}
			return;
		}
		if (!programType.isGesture()) {
			this.addError("program must be a gesture, found a " + programType.format(), ctx._p);
		}
	}

}