// Generated from ./MotorMusicParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { EmptyProgramContext } from "./MotorMusicParser.js";
import { NonEmptyProgramWithDefaultPitchSpecificationContext } from "./MotorMusicParser.js";
import { NonEmptyProgramWithPitchSpecificationContext } from "./MotorMusicParser.js";
import { PitchSpecificationStatementContext } from "./MotorMusicParser.js";
import { RaisedSingleContext } from "./MotorMusicParser.js";
import { RaisedMultiContext } from "./MotorMusicParser.js";
import { SingleMotionSpecDownContext } from "./MotorMusicParser.js";
import { SingleMotionSpecUpContext } from "./MotorMusicParser.js";
import { TowardsPrefixMotionSpecContext } from "./MotorMusicParser.js";
import { AwayPrefixMotionSpecContext } from "./MotorMusicParser.js";
import { EndAwayFromMotionSpecContext } from "./MotorMusicParser.js";
import { EndTowardsMotionSpecContext } from "./MotorMusicParser.js";
import { SyllableGroupSingleContext } from "./MotorMusicParser.js";
import { SyllableGroupMultiContext } from "./MotorMusicParser.js";
import { EmptyContext } from "./MotorMusicParser.js";
import { TimeTaggedEmptyContext } from "./MotorMusicParser.js";
import { SyllableGroupContext } from "./MotorMusicParser.js";
import { TimeTaggedSyllableGroupContext } from "./MotorMusicParser.js";
import { DirectionSpecContext } from "./MotorMusicParser.js";


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
	 * Enter a parse tree produced by the `NonEmptyProgramWithDefaultPitchSpecification`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyProgramWithDefaultPitchSpecification?: (ctx: NonEmptyProgramWithDefaultPitchSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by the `NonEmptyProgramWithDefaultPitchSpecification`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyProgramWithDefaultPitchSpecification?: (ctx: NonEmptyProgramWithDefaultPitchSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by the `NonEmptyProgramWithPitchSpecification`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyProgramWithPitchSpecification?: (ctx: NonEmptyProgramWithPitchSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by the `NonEmptyProgramWithPitchSpecification`
	 * labeled alternative in `MotorMusicParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyProgramWithPitchSpecification?: (ctx: NonEmptyProgramWithPitchSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by the `PitchSpecificationStatement`
	 * labeled alternative in `MotorMusicParser.pitch_specification_statement`.
	 * @param ctx the parse tree
	 */
	enterPitchSpecificationStatement?: (ctx: PitchSpecificationStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `PitchSpecificationStatement`
	 * labeled alternative in `MotorMusicParser.pitch_specification_statement`.
	 * @param ctx the parse tree
	 */
	exitPitchSpecificationStatement?: (ctx: PitchSpecificationStatementContext) => void;
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
}

