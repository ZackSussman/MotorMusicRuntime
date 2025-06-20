// Generated from ./MotorMusicParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { EmptyProgramContext } from "./MotorMusicParser.js";
import { NonEmptyProgramContext } from "./MotorMusicParser.js";
import { BracketedMusicListContext } from "./MotorMusicParser.js";
import { ResolveBracketedMusicListContext } from "./MotorMusicParser.js";
import { SingleContext } from "./MotorMusicParser.js";
import { MultiContext } from "./MotorMusicParser.js";
import { EmptyContext } from "./MotorMusicParser.js";
import { SyllableContext } from "./MotorMusicParser.js";
import { ResolveContext } from "./MotorMusicParser.js";
import { ConcatContext } from "./MotorMusicParser.js";


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
	 * Enter a parse tree produced by the `BracketedMusicList`
	 * labeled alternative in `MotorMusicParser.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	enterBracketedMusicList?: (ctx: BracketedMusicListContext) => void;
	/**
	 * Exit a parse tree produced by the `BracketedMusicList`
	 * labeled alternative in `MotorMusicParser.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	exitBracketedMusicList?: (ctx: BracketedMusicListContext) => void;
	/**
	 * Enter a parse tree produced by the `ResolveBracketedMusicList`
	 * labeled alternative in `MotorMusicParser.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	enterResolveBracketedMusicList?: (ctx: ResolveBracketedMusicListContext) => void;
	/**
	 * Exit a parse tree produced by the `ResolveBracketedMusicList`
	 * labeled alternative in `MotorMusicParser.bracketed_music_list`.
	 * @param ctx the parse tree
	 */
	exitResolveBracketedMusicList?: (ctx: ResolveBracketedMusicListContext) => void;
	/**
	 * Enter a parse tree produced by the `Single`
	 * labeled alternative in `MotorMusicParser.music_list`.
	 * @param ctx the parse tree
	 */
	enterSingle?: (ctx: SingleContext) => void;
	/**
	 * Exit a parse tree produced by the `Single`
	 * labeled alternative in `MotorMusicParser.music_list`.
	 * @param ctx the parse tree
	 */
	exitSingle?: (ctx: SingleContext) => void;
	/**
	 * Enter a parse tree produced by the `Multi`
	 * labeled alternative in `MotorMusicParser.music_list`.
	 * @param ctx the parse tree
	 */
	enterMulti?: (ctx: MultiContext) => void;
	/**
	 * Exit a parse tree produced by the `Multi`
	 * labeled alternative in `MotorMusicParser.music_list`.
	 * @param ctx the parse tree
	 */
	exitMulti?: (ctx: MultiContext) => void;
	/**
	 * Enter a parse tree produced by the `Empty`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	enterEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `Empty`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	exitEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `Syllable`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	enterSyllable?: (ctx: SyllableContext) => void;
	/**
	 * Exit a parse tree produced by the `Syllable`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	exitSyllable?: (ctx: SyllableContext) => void;
	/**
	 * Enter a parse tree produced by the `Resolve`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	enterResolve?: (ctx: ResolveContext) => void;
	/**
	 * Exit a parse tree produced by the `Resolve`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	exitResolve?: (ctx: ResolveContext) => void;
	/**
	 * Enter a parse tree produced by the `Concat`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	enterConcat?: (ctx: ConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `Concat`
	 * labeled alternative in `MotorMusicParser.music`.
	 * @param ctx the parse tree
	 */
	exitConcat?: (ctx: ConcatContext) => void;
}

