// Generated from ./MotorMusicParserPhase1.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { EmptyProgramContext } from "./MotorMusicParserPhase1.js";
import { ProgramConsContext } from "./MotorMusicParserPhase1.js";
import { SingleNumberContext } from "./MotorMusicParserPhase1.js";
import { MultiNumberContext } from "./MotorMusicParserPhase1.js";
import { SingleMusicContext } from "./MotorMusicParserPhase1.js";
import { MultiMusicContext } from "./MotorMusicParserPhase1.js";
import { BracketedMusicListContext } from "./MotorMusicParserPhase1.js";
import { ResolveBracketedMusicListContext } from "./MotorMusicParserPhase1.js";
import { WordContext } from "./MotorMusicParserPhase1.js";
import { TimedWordContext } from "./MotorMusicParserPhase1.js";
import { VoiceContext } from "./MotorMusicParserPhase1.js";
import { TimedVoiceContext } from "./MotorMusicParserPhase1.js";
import { BeatContext } from "./MotorMusicParserPhase1.js";
import { ResolveContext } from "./MotorMusicParserPhase1.js";
import { ConcatContext } from "./MotorMusicParserPhase1.js";
import { SpecConcatContext } from "./MotorMusicParserPhase1.js";
import { ContainmentContext } from "./MotorMusicParserPhase1.js";
import { VoiceTagContext } from "./MotorMusicParserPhase1.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MotorMusicParserPhase1`.
 */
export default class MotorMusicParserPhase1Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParserPhase1.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterEmptyProgram?: (ctx: EmptyProgramContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyProgram`
	 * labeled alternative in `MotorMusicParserPhase1.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitEmptyProgram?: (ctx: EmptyProgramContext) => void;
	/**
	 * Enter a parse tree produced by the `ProgramCons`
	 * labeled alternative in `MotorMusicParserPhase1.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterProgramCons?: (ctx: ProgramConsContext) => void;
	/**
	 * Exit a parse tree produced by the `ProgramCons`
	 * labeled alternative in `MotorMusicParserPhase1.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitProgramCons?: (ctx: ProgramConsContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleNumber`
	 * labeled alternative in `MotorMusicParserPhase1.number_list`.
	 * @param ctx the parse tree
	 */
	enterSingleNumber?: (ctx: SingleNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleNumber`
	 * labeled alternative in `MotorMusicParserPhase1.number_list`.
	 * @param ctx the parse tree
	 */
	exitSingleNumber?: (ctx: SingleNumberContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiNumber`
	 * labeled alternative in `MotorMusicParserPhase1.number_list`.
	 * @param ctx the parse tree
	 */
	enterMultiNumber?: (ctx: MultiNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiNumber`
	 * labeled alternative in `MotorMusicParserPhase1.number_list`.
	 * @param ctx the parse tree
	 */
	exitMultiNumber?: (ctx: MultiNumberContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleMusic`
	 * labeled alternative in `MotorMusicParserPhase1.music_list`.
	 * @param ctx the parse tree
	 */
	enterSingleMusic?: (ctx: SingleMusicContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleMusic`
	 * labeled alternative in `MotorMusicParserPhase1.music_list`.
	 * @param ctx the parse tree
	 */
	exitSingleMusic?: (ctx: SingleMusicContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiMusic`
	 * labeled alternative in `MotorMusicParserPhase1.music_list`.
	 * @param ctx the parse tree
	 */
	enterMultiMusic?: (ctx: MultiMusicContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiMusic`
	 * labeled alternative in `MotorMusicParserPhase1.music_list`.
	 * @param ctx the parse tree
	 */
	exitMultiMusic?: (ctx: MultiMusicContext) => void;
	/**
	 * Enter a parse tree produced by the `BracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase1.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	enterBracketedMusicList?: (ctx: BracketedMusicListContext) => void;
	/**
	 * Exit a parse tree produced by the `BracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase1.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	exitBracketedMusicList?: (ctx: BracketedMusicListContext) => void;
	/**
	 * Enter a parse tree produced by the `ResolveBracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase1.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	enterResolveBracketedMusicList?: (ctx: ResolveBracketedMusicListContext) => void;
	/**
	 * Exit a parse tree produced by the `ResolveBracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase1.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	exitResolveBracketedMusicList?: (ctx: ResolveBracketedMusicListContext) => void;
	/**
	 * Enter a parse tree produced by the `Word`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by the `Word`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;
	/**
	 * Enter a parse tree produced by the `TimedWord`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterTimedWord?: (ctx: TimedWordContext) => void;
	/**
	 * Exit a parse tree produced by the `TimedWord`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitTimedWord?: (ctx: TimedWordContext) => void;
	/**
	 * Enter a parse tree produced by the `Voice`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterVoice?: (ctx: VoiceContext) => void;
	/**
	 * Exit a parse tree produced by the `Voice`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitVoice?: (ctx: VoiceContext) => void;
	/**
	 * Enter a parse tree produced by the `TimedVoice`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterTimedVoice?: (ctx: TimedVoiceContext) => void;
	/**
	 * Exit a parse tree produced by the `TimedVoice`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitTimedVoice?: (ctx: TimedVoiceContext) => void;
	/**
	 * Enter a parse tree produced by the `Beat`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterBeat?: (ctx: BeatContext) => void;
	/**
	 * Exit a parse tree produced by the `Beat`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitBeat?: (ctx: BeatContext) => void;
	/**
	 * Enter a parse tree produced by the `Resolve`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterResolve?: (ctx: ResolveContext) => void;
	/**
	 * Exit a parse tree produced by the `Resolve`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitResolve?: (ctx: ResolveContext) => void;
	/**
	 * Enter a parse tree produced by the `Concat`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterConcat?: (ctx: ConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `Concat`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitConcat?: (ctx: ConcatContext) => void;
	/**
	 * Enter a parse tree produced by the `SpecConcat`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterSpecConcat?: (ctx: SpecConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `SpecConcat`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitSpecConcat?: (ctx: SpecConcatContext) => void;
	/**
	 * Enter a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Enter a parse tree produced by the `VoiceTag`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	enterVoiceTag?: (ctx: VoiceTagContext) => void;
	/**
	 * Exit a parse tree produced by the `VoiceTag`
	 * labeled alternative in `MotorMusicParserPhase1.music`.
	 * @param ctx the parse tree
	 */
	exitVoiceTag?: (ctx: VoiceTagContext) => void;
}

