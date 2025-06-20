// Generated from /Users/zacksussman/Documents/code/PersonalSite/public/MotorMusic/src/antlr/MotorMusicParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MotorMusicParser}.
 */
public interface MotorMusicParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the {@code EmptyProgram}
	 * labeled alternative in {@link MotorMusicParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterEmptyProgram(MotorMusicParser.EmptyProgramContext ctx);
	/**
	 * Exit a parse tree produced by the {@code EmptyProgram}
	 * labeled alternative in {@link MotorMusicParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitEmptyProgram(MotorMusicParser.EmptyProgramContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NonEmptyProgram}
	 * labeled alternative in {@link MotorMusicParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterNonEmptyProgram(MotorMusicParser.NonEmptyProgramContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NonEmptyProgram}
	 * labeled alternative in {@link MotorMusicParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitNonEmptyProgram(MotorMusicParser.NonEmptyProgramContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BracketedMusicList}
	 * labeled alternative in {@link MotorMusicParser#bracketed_music_list}.
	 * @param ctx the parse tree
	 */
	void enterBracketedMusicList(MotorMusicParser.BracketedMusicListContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BracketedMusicList}
	 * labeled alternative in {@link MotorMusicParser#bracketed_music_list}.
	 * @param ctx the parse tree
	 */
	void exitBracketedMusicList(MotorMusicParser.BracketedMusicListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ResolveBracketedMusicList}
	 * labeled alternative in {@link MotorMusicParser#bracketed_music_list}.
	 * @param ctx the parse tree
	 */
	void enterResolveBracketedMusicList(MotorMusicParser.ResolveBracketedMusicListContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ResolveBracketedMusicList}
	 * labeled alternative in {@link MotorMusicParser#bracketed_music_list}.
	 * @param ctx the parse tree
	 */
	void exitResolveBracketedMusicList(MotorMusicParser.ResolveBracketedMusicListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Single}
	 * labeled alternative in {@link MotorMusicParser#music_list}.
	 * @param ctx the parse tree
	 */
	void enterSingle(MotorMusicParser.SingleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Single}
	 * labeled alternative in {@link MotorMusicParser#music_list}.
	 * @param ctx the parse tree
	 */
	void exitSingle(MotorMusicParser.SingleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Multi}
	 * labeled alternative in {@link MotorMusicParser#music_list}.
	 * @param ctx the parse tree
	 */
	void enterMulti(MotorMusicParser.MultiContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Multi}
	 * labeled alternative in {@link MotorMusicParser#music_list}.
	 * @param ctx the parse tree
	 */
	void exitMulti(MotorMusicParser.MultiContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Empty}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterEmpty(MotorMusicParser.EmptyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Empty}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitEmpty(MotorMusicParser.EmptyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TimeTaggedEmpty}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterTimeTaggedEmpty(MotorMusicParser.TimeTaggedEmptyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TimeTaggedEmpty}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitTimeTaggedEmpty(MotorMusicParser.TimeTaggedEmptyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Syllable}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterSyllable(MotorMusicParser.SyllableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Syllable}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitSyllable(MotorMusicParser.SyllableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TimeTaggedSyllable}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterTimeTaggedSyllable(MotorMusicParser.TimeTaggedSyllableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TimeTaggedSyllable}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitTimeTaggedSyllable(MotorMusicParser.TimeTaggedSyllableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Resolve}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterResolve(MotorMusicParser.ResolveContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Resolve}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitResolve(MotorMusicParser.ResolveContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Concat}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterConcat(MotorMusicParser.ConcatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Concat}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitConcat(MotorMusicParser.ConcatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NeutralConcat}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void enterNeutralConcat(MotorMusicParser.NeutralConcatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NeutralConcat}
	 * labeled alternative in {@link MotorMusicParser#music}.
	 * @param ctx the parse tree
	 */
	void exitNeutralConcat(MotorMusicParser.NeutralConcatContext ctx);
}