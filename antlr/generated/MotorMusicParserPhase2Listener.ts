// Generated from ./MotorMusicParserPhase2.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { SingleContext } from "./MotorMusicParserPhase2.js";
import { MultiContext } from "./MotorMusicParserPhase2.js";
import { SingleNumberContext } from "./MotorMusicParserPhase2.js";
import { MultiNumberContext } from "./MotorMusicParserPhase2.js";
import { SingleMusicContext } from "./MotorMusicParserPhase2.js";
import { MultiMusicContext } from "./MotorMusicParserPhase2.js";
import { BracketedMusicListContext } from "./MotorMusicParserPhase2.js";
import { ResolveBracketedMusicListContext } from "./MotorMusicParserPhase2.js";
import { WordContext } from "./MotorMusicParserPhase2.js";
import { TimedWordContext } from "./MotorMusicParserPhase2.js";
import { BeatContext } from "./MotorMusicParserPhase2.js";
import { ResolveContext } from "./MotorMusicParserPhase2.js";
import { ConcatContext } from "./MotorMusicParserPhase2.js";
import { SpecConcatContext } from "./MotorMusicParserPhase2.js";
import { ContainmentContext } from "./MotorMusicParserPhase2.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MotorMusicParserPhase2`.
 */
export default class MotorMusicParserPhase2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Single`
	 * labeled alternative in `MotorMusicParserPhase2.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterSingle?: (ctx: SingleContext) => void;
	/**
	 * Exit a parse tree produced by the `Single`
	 * labeled alternative in `MotorMusicParserPhase2.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitSingle?: (ctx: SingleContext) => void;
	/**
	 * Enter a parse tree produced by the `Multi`
	 * labeled alternative in `MotorMusicParserPhase2.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterMulti?: (ctx: MultiContext) => void;
	/**
	 * Exit a parse tree produced by the `Multi`
	 * labeled alternative in `MotorMusicParserPhase2.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitMulti?: (ctx: MultiContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleNumber`
	 * labeled alternative in `MotorMusicParserPhase2.number_list`.
	 * @param ctx the parse tree
	 */
	enterSingleNumber?: (ctx: SingleNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleNumber`
	 * labeled alternative in `MotorMusicParserPhase2.number_list`.
	 * @param ctx the parse tree
	 */
	exitSingleNumber?: (ctx: SingleNumberContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiNumber`
	 * labeled alternative in `MotorMusicParserPhase2.number_list`.
	 * @param ctx the parse tree
	 */
	enterMultiNumber?: (ctx: MultiNumberContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiNumber`
	 * labeled alternative in `MotorMusicParserPhase2.number_list`.
	 * @param ctx the parse tree
	 */
	exitMultiNumber?: (ctx: MultiNumberContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleMusic`
	 * labeled alternative in `MotorMusicParserPhase2.music_list`.
	 * @param ctx the parse tree
	 */
	enterSingleMusic?: (ctx: SingleMusicContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleMusic`
	 * labeled alternative in `MotorMusicParserPhase2.music_list`.
	 * @param ctx the parse tree
	 */
	exitSingleMusic?: (ctx: SingleMusicContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiMusic`
	 * labeled alternative in `MotorMusicParserPhase2.music_list`.
	 * @param ctx the parse tree
	 */
	enterMultiMusic?: (ctx: MultiMusicContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiMusic`
	 * labeled alternative in `MotorMusicParserPhase2.music_list`.
	 * @param ctx the parse tree
	 */
	exitMultiMusic?: (ctx: MultiMusicContext) => void;
	/**
	 * Enter a parse tree produced by the `BracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase2.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	enterBracketedMusicList?: (ctx: BracketedMusicListContext) => void;
	/**
	 * Exit a parse tree produced by the `BracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase2.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	exitBracketedMusicList?: (ctx: BracketedMusicListContext) => void;
	/**
	 * Enter a parse tree produced by the `ResolveBracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase2.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	enterResolveBracketedMusicList?: (ctx: ResolveBracketedMusicListContext) => void;
	/**
	 * Exit a parse tree produced by the `ResolveBracketedMusicList`
	 * labeled alternative in `MotorMusicParserPhase2.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	exitResolveBracketedMusicList?: (ctx: ResolveBracketedMusicListContext) => void;
	/**
	 * Enter a parse tree produced by the `Word`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by the `Word`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;
	/**
	 * Enter a parse tree produced by the `TimedWord`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterTimedWord?: (ctx: TimedWordContext) => void;
	/**
	 * Exit a parse tree produced by the `TimedWord`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitTimedWord?: (ctx: TimedWordContext) => void;
	/**
	 * Enter a parse tree produced by the `Beat`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterBeat?: (ctx: BeatContext) => void;
	/**
	 * Exit a parse tree produced by the `Beat`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitBeat?: (ctx: BeatContext) => void;
	/**
	 * Enter a parse tree produced by the `Resolve`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterResolve?: (ctx: ResolveContext) => void;
	/**
	 * Exit a parse tree produced by the `Resolve`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitResolve?: (ctx: ResolveContext) => void;
	/**
	 * Enter a parse tree produced by the `Concat`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterConcat?: (ctx: ConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `Concat`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitConcat?: (ctx: ConcatContext) => void;
	/**
	 * Enter a parse tree produced by the `SpecConcat`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterSpecConcat?: (ctx: SpecConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `SpecConcat`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitSpecConcat?: (ctx: SpecConcatContext) => void;
	/**
	 * Enter a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	enterContainment?: (ctx: ContainmentContext) => void;
	/**
	 * Exit a parse tree produced by the `Containment`
	 * labeled alternative in `MotorMusicParserPhase2.music`.
	 * @param ctx the parse tree
	 */
	exitContainment?: (ctx: ContainmentContext) => void;
}

