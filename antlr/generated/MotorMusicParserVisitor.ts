// Generated from MotorMusicParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { EmptyProgramContext } from "./MotorMusicParser";
import { NonEmptyProgramContext } from "./MotorMusicParser";
import { RaisedSingleContext } from "./MotorMusicParser";
import { RaisedMultiContext } from "./MotorMusicParser";
import { SingleMotionSpecDownContext } from "./MotorMusicParser";
import { SingleMotionSpecUpContext } from "./MotorMusicParser";
import { TowardsPrefixMotionSpecContext } from "./MotorMusicParser";
import { AwayPrefixMotionSpecContext } from "./MotorMusicParser";
import { EndAwayFromMotionSpecContext } from "./MotorMusicParser";
import { EndTowardsMotionSpecContext } from "./MotorMusicParser";
import { SyllableGroupSingleContext } from "./MotorMusicParser";
import { SyllableGroupMultiContext } from "./MotorMusicParser";
import { EmptyContext } from "./MotorMusicParser";
import { TimeTaggedEmptyContext } from "./MotorMusicParser";
import { SyllableGroupContext } from "./MotorMusicParser";
import { TimeTaggedSyllableGroupContext } from "./MotorMusicParser";
import { DirectionSpecContext } from "./MotorMusicParser";
import { ContainmentContext } from "./MotorMusicParser";
import { BuiltInInputTypeContext } from "./MotorMusicParser";
import { WrappedInputTypeContext } from "./MotorMusicParser";
import { BuiltInContext } from "./MotorMusicParser";
import { FunctionTypeContext } from "./MotorMusicParser";
import { AnomDeclContext } from "./MotorMusicParser";
import { DeclContext } from "./MotorMusicParser";
import { NumberExpContext } from "./MotorMusicParser";
import { EvalContext } from "./MotorMusicParser";
import { IdentExpContext } from "./MotorMusicParser";
import { WrappedExpContext } from "./MotorMusicParser";
import { ExpExpOrGestureContext } from "./MotorMusicParser";
import { GestureExpOrGestureContext } from "./MotorMusicParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MotorMusicParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MotorMusicParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyProgram?: (ctx: EmptyProgramContext) => Result;
	/**
	 * Visit a parse tree produced by the `NonEmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonEmptyProgram?: (ctx: NonEmptyProgramContext) => Result;
	/**
	 * Visit a parse tree produced by the `RaisedSingle`
	 * labeled alternative in `MotorMusicParser.raised_gesture_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaisedSingle?: (ctx: RaisedSingleContext) => Result;
	/**
	 * Visit a parse tree produced by the `RaisedMulti`
	 * labeled alternative in `MotorMusicParser.raised_gesture_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaisedMulti?: (ctx: RaisedMultiContext) => Result;
	/**
	 * Visit a parse tree produced by the `SingleMotionSpecDown`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleMotionSpecDown?: (ctx: SingleMotionSpecDownContext) => Result;
	/**
	 * Visit a parse tree produced by the `SingleMotionSpecUp`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleMotionSpecUp?: (ctx: SingleMotionSpecUpContext) => Result;
	/**
	 * Visit a parse tree produced by the `TowardsPrefixMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTowardsPrefixMotionSpec?: (ctx: TowardsPrefixMotionSpecContext) => Result;
	/**
	 * Visit a parse tree produced by the `AwayPrefixMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAwayPrefixMotionSpec?: (ctx: AwayPrefixMotionSpecContext) => Result;
	/**
	 * Visit a parse tree produced by the `EndAwayFromMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndAwayFromMotionSpec?: (ctx: EndAwayFromMotionSpecContext) => Result;
	/**
	 * Visit a parse tree produced by the `EndTowardsMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndTowardsMotionSpec?: (ctx: EndTowardsMotionSpecContext) => Result;
	/**
	 * Visit a parse tree produced by the `SyllableGroupSingle`
	 * labeled alternative in `MotorMusicParser.syllable_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyllableGroupSingle?: (ctx: SyllableGroupSingleContext) => Result;
	/**
	 * Visit a parse tree produced by the `SyllableGroupMulti`
	 * labeled alternative in `MotorMusicParser.syllable_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyllableGroupMulti?: (ctx: SyllableGroupMultiContext) => Result;
	/**
	 * Visit a parse tree produced by the `Empty`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty?: (ctx: EmptyContext) => Result;
	/**
	 * Visit a parse tree produced by the `TimeTaggedEmpty`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeTaggedEmpty?: (ctx: TimeTaggedEmptyContext) => Result;
	/**
	 * Visit a parse tree produced by the `SyllableGroup`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyllableGroup?: (ctx: SyllableGroupContext) => Result;
	/**
	 * Visit a parse tree produced by the `TimeTaggedSyllableGroup`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeTaggedSyllableGroup?: (ctx: TimeTaggedSyllableGroupContext) => Result;
	/**
	 * Visit a parse tree produced by the `DirectionSpec`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectionSpec?: (ctx: DirectionSpecContext) => Result;
	/**
	 * Visit a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContainment?: (ctx: ContainmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `BuiltInInputType`
	 * labeled alternative in `MotorMusicParser.input_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInInputType?: (ctx: BuiltInInputTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `WrappedInputType`
	 * labeled alternative in `MotorMusicParser.input_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWrappedInputType?: (ctx: WrappedInputTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `BuiltIn`
	 * labeled alternative in `MotorMusicParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltIn?: (ctx: BuiltInContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionType`
	 * labeled alternative in `MotorMusicParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `AnomDecl`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnomDecl?: (ctx: AnomDeclContext) => Result;
	/**
	 * Visit a parse tree produced by the `Decl`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;
	/**
	 * Visit a parse tree produced by the `NumberExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExp?: (ctx: NumberExpContext) => Result;
	/**
	 * Visit a parse tree produced by the `Eval`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEval?: (ctx: EvalContext) => Result;
	/**
	 * Visit a parse tree produced by the `IdentExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentExp?: (ctx: IdentExpContext) => Result;
	/**
	 * Visit a parse tree produced by the `WrappedExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWrappedExp?: (ctx: WrappedExpContext) => Result;
	/**
	 * Visit a parse tree produced by the `ExpExpOrGesture`
	 * labeled alternative in `MotorMusicParser.exp_or_gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpExpOrGesture?: (ctx: ExpExpOrGestureContext) => Result;
	/**
	 * Visit a parse tree produced by the `GestureExpOrGesture`
	 * labeled alternative in `MotorMusicParser.exp_or_gesture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGestureExpOrGesture?: (ctx: GestureExpOrGestureContext) => Result;
}

