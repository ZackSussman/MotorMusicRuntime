// Generated from MotorMusicParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
import { FunctionTypeContext } from "./MotorMusicParser";
import { BuiltInContext } from "./MotorMusicParser";
import { AnomDeclContext } from "./MotorMusicParser";
import { DeclContext } from "./MotorMusicParser";
import { NumberExpContext } from "./MotorMusicParser";
import { EvalContext } from "./MotorMusicParser";
import { IdentExpContext } from "./MotorMusicParser";
import { WrappedExpContext } from "./MotorMusicParser";
import { ExpExpOrGestureContext } from "./MotorMusicParser";
import { GestureExpOrGestureContext } from "./MotorMusicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MotorMusicParser`.
 */
export default class MotorMusicParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterEmptyProgram?: (ctx: EmptyProgramContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitEmptyProgram?: (ctx: EmptyProgramContext) => void;
	/**
	 * Enter a parse tree produced by the `NonEmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyProgram?: (ctx: NonEmptyProgramContext) => void;
	/**
	 * Exit a parse tree produced by the `NonEmptyProgram`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyProgram?: (ctx: NonEmptyProgramContext) => void;
	/**
	 * Enter a parse tree produced by the `RaisedSingle`
	 * labeled alternative in `MotorMusicParser.raised_gesture_list`.
	 * @param ctx the parse tree
	 */
	enterRaisedSingle?: (ctx: RaisedSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `RaisedSingle`
	 * labeled alternative in `MotorMusicParser.raised_gesture_list`.
	 * @param ctx the parse tree
	 */
	exitRaisedSingle?: (ctx: RaisedSingleContext) => void;
	/**
	 * Enter a parse tree produced by the `RaisedMulti`
	 * labeled alternative in `MotorMusicParser.raised_gesture_list`.
	 * @param ctx the parse tree
	 */
	enterRaisedMulti?: (ctx: RaisedMultiContext) => void;
	/**
	 * Exit a parse tree produced by the `RaisedMulti`
	 * labeled alternative in `MotorMusicParser.raised_gesture_list`.
	 * @param ctx the parse tree
	 */
	exitRaisedMulti?: (ctx: RaisedMultiContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleMotionSpecDown`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	enterSingleMotionSpecDown?: (ctx: SingleMotionSpecDownContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleMotionSpecDown`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	exitSingleMotionSpecDown?: (ctx: SingleMotionSpecDownContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleMotionSpecUp`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	enterSingleMotionSpecUp?: (ctx: SingleMotionSpecUpContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleMotionSpecUp`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	exitSingleMotionSpecUp?: (ctx: SingleMotionSpecUpContext) => void;
	/**
	 * Enter a parse tree produced by the `TowardsPrefixMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	enterTowardsPrefixMotionSpec?: (ctx: TowardsPrefixMotionSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `TowardsPrefixMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	exitTowardsPrefixMotionSpec?: (ctx: TowardsPrefixMotionSpecContext) => void;
	/**
	 * Enter a parse tree produced by the `AwayPrefixMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	enterAwayPrefixMotionSpec?: (ctx: AwayPrefixMotionSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `AwayPrefixMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	exitAwayPrefixMotionSpec?: (ctx: AwayPrefixMotionSpecContext) => void;
	/**
	 * Enter a parse tree produced by the `EndAwayFromMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	enterEndAwayFromMotionSpec?: (ctx: EndAwayFromMotionSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `EndAwayFromMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	exitEndAwayFromMotionSpec?: (ctx: EndAwayFromMotionSpecContext) => void;
	/**
	 * Enter a parse tree produced by the `EndTowardsMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	enterEndTowardsMotionSpec?: (ctx: EndTowardsMotionSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `EndTowardsMotionSpec`
	 * labeled alternative in `MotorMusicParser.motion_spec_list`.
	 * @param ctx the parse tree
	 */
	exitEndTowardsMotionSpec?: (ctx: EndTowardsMotionSpecContext) => void;
	/**
	 * Enter a parse tree produced by the `SyllableGroupSingle`
	 * labeled alternative in `MotorMusicParser.syllable_group`.
	 * @param ctx the parse tree
	 */
	enterSyllableGroupSingle?: (ctx: SyllableGroupSingleContext) => void;
	/**
	 * Exit a parse tree produced by the `SyllableGroupSingle`
	 * labeled alternative in `MotorMusicParser.syllable_group`.
	 * @param ctx the parse tree
	 */
	exitSyllableGroupSingle?: (ctx: SyllableGroupSingleContext) => void;
	/**
	 * Enter a parse tree produced by the `SyllableGroupMulti`
	 * labeled alternative in `MotorMusicParser.syllable_group`.
	 * @param ctx the parse tree
	 */
	enterSyllableGroupMulti?: (ctx: SyllableGroupMultiContext) => void;
	/**
	 * Exit a parse tree produced by the `SyllableGroupMulti`
	 * labeled alternative in `MotorMusicParser.syllable_group`.
	 * @param ctx the parse tree
	 */
	exitSyllableGroupMulti?: (ctx: SyllableGroupMultiContext) => void;
	/**
	 * Enter a parse tree produced by the `Empty`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	enterEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `Empty`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	exitEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `TimeTaggedEmpty`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	enterTimeTaggedEmpty?: (ctx: TimeTaggedEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `TimeTaggedEmpty`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	exitTimeTaggedEmpty?: (ctx: TimeTaggedEmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `SyllableGroup`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	enterSyllableGroup?: (ctx: SyllableGroupContext) => void;
	/**
	 * Exit a parse tree produced by the `SyllableGroup`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	exitSyllableGroup?: (ctx: SyllableGroupContext) => void;
	/**
	 * Enter a parse tree produced by the `TimeTaggedSyllableGroup`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	enterTimeTaggedSyllableGroup?: (ctx: TimeTaggedSyllableGroupContext) => void;
	/**
	 * Exit a parse tree produced by the `TimeTaggedSyllableGroup`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	exitTimeTaggedSyllableGroup?: (ctx: TimeTaggedSyllableGroupContext) => void;
	/**
	 * Enter a parse tree produced by the `DirectionSpec`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	enterDirectionSpec?: (ctx: DirectionSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `DirectionSpec`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	exitDirectionSpec?: (ctx: DirectionSpecContext) => void;
	/**
	 * Enter a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	enterContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParser.gesture`.
	 * @param ctx the parse tree
	 */
	exitContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionType`
	 * labeled alternative in `MotorMusicParser.type`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionType`
	 * labeled alternative in `MotorMusicParser.type`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `BuiltIn`
	 * labeled alternative in `MotorMusicParser.type`.
	 * @param ctx the parse tree
	 */
	enterBuiltIn?: (ctx: BuiltInContext) => void;
	/**
	 * Exit a parse tree produced by the `BuiltIn`
	 * labeled alternative in `MotorMusicParser.type`.
	 * @param ctx the parse tree
	 */
	exitBuiltIn?: (ctx: BuiltInContext) => void;
	/**
	 * Enter a parse tree produced by the `AnomDecl`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	enterAnomDecl?: (ctx: AnomDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `AnomDecl`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	exitAnomDecl?: (ctx: AnomDeclContext) => void;
	/**
	 * Enter a parse tree produced by the `Decl`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by the `Decl`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;
	/**
	 * Enter a parse tree produced by the `NumberExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	enterNumberExp?: (ctx: NumberExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	exitNumberExp?: (ctx: NumberExpContext) => void;
	/**
	 * Enter a parse tree produced by the `Eval`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	enterEval?: (ctx: EvalContext) => void;
	/**
	 * Exit a parse tree produced by the `Eval`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	exitEval?: (ctx: EvalContext) => void;
	/**
	 * Enter a parse tree produced by the `IdentExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	enterIdentExp?: (ctx: IdentExpContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	exitIdentExp?: (ctx: IdentExpContext) => void;
	/**
	 * Enter a parse tree produced by the `WrappedExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	enterWrappedExp?: (ctx: WrappedExpContext) => void;
	/**
	 * Exit a parse tree produced by the `WrappedExp`
	 * labeled alternative in `MotorMusicParser.exp`.
	 * @param ctx the parse tree
	 */
	exitWrappedExp?: (ctx: WrappedExpContext) => void;
	/**
	 * Enter a parse tree produced by the `ExpExpOrGesture`
	 * labeled alternative in `MotorMusicParser.exp_or_gesture`.
	 * @param ctx the parse tree
	 */
	enterExpExpOrGesture?: (ctx: ExpExpOrGestureContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpExpOrGesture`
	 * labeled alternative in `MotorMusicParser.exp_or_gesture`.
	 * @param ctx the parse tree
	 */
	exitExpExpOrGesture?: (ctx: ExpExpOrGestureContext) => void;
	/**
	 * Enter a parse tree produced by the `GestureExpOrGesture`
	 * labeled alternative in `MotorMusicParser.exp_or_gesture`.
	 * @param ctx the parse tree
	 */
	enterGestureExpOrGesture?: (ctx: GestureExpOrGestureContext) => void;
	/**
	 * Exit a parse tree produced by the `GestureExpOrGesture`
	 * labeled alternative in `MotorMusicParser.exp_or_gesture`.
	 * @param ctx the parse tree
	 */
	exitGestureExpOrGesture?: (ctx: GestureExpOrGestureContext) => void;
}

