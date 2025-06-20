// Generated from /Users/zacksussman/Documents/code/PersonalSite/public/MotorMusic/src/antlr/MotorMusicParserPhase2.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MotorMusicParserPhase2 extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, VOICE=2, NUMBER=3, IDENT=4, SEMICOLON=5, DOT=6, LCURLY=7, RCURLY=8, 
		LPAREN=9, RPAREN=10, LANGLE=11, RANGLE=12, LSQBRACKET=13, RSQBRACKET=14, 
		EXCLAMATION=15, MID=16, UNDERSCORE=17, PLUS=18, As=19, A=20, B=21, Cs=22, 
		C=23, Ds=24, D=25, E=26, Fs=27, F=28, Gs=29, G=30, UNRECOGNIZED=31;
	public static final int
		RULE_compilationUnit = 0, RULE_number_list = 1, RULE_music_list = 2, RULE_bracketed_music_list = 3, 
		RULE_music = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "number_list", "music_list", "bracketed_music_list", 
			"music"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, "';'", "'.'", "'{'", "'}'", "'('", "')'", 
			"'<'", "'>'", "'['", "']'", "'!'", "'|'", "'_'", "'+'", null, "'A'", 
			null, null, null, null, "'D'", null, null, null, null, "'G'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "VOICE", "NUMBER", "IDENT", "SEMICOLON", "DOT", "LCURLY", 
			"RCURLY", "LPAREN", "RPAREN", "LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", 
			"EXCLAMATION", "MID", "UNDERSCORE", "PLUS", "As", "A", "B", "Cs", "C", 
			"Ds", "D", "E", "Fs", "F", "Gs", "G", "UNRECOGNIZED"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MotorMusicParserPhase2.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MotorMusicParserPhase2(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompilationUnitContext extends ParserRuleContext {
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	 
		public CompilationUnitContext() { }
		public void copyFrom(CompilationUnitContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleContext extends CompilationUnitContext {
		public MusicContext data;
		public TerminalNode LANGLE() { return getToken(MotorMusicParserPhase2.LANGLE, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParserPhase2.RANGLE, 0); }
		public MusicContext music() {
			return getRuleContext(MusicContext.class,0);
		}
		public SingleContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiContext extends CompilationUnitContext {
		public MusicContext data;
		public CompilationUnitContext rest;
		public TerminalNode LANGLE() { return getToken(MotorMusicParserPhase2.LANGLE, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParserPhase2.RANGLE, 0); }
		public MusicContext music() {
			return getRuleContext(MusicContext.class,0);
		}
		public CompilationUnitContext compilationUnit() {
			return getRuleContext(CompilationUnitContext.class,0);
		}
		public MultiContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		try {
			setState(19);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				_localctx = new SingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(10);
				match(LANGLE);
				setState(11);
				((SingleContext)_localctx).data = music();
				setState(12);
				match(RANGLE);
				}
				break;
			case 2:
				_localctx = new MultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(14);
				match(LANGLE);
				setState(15);
				((MultiContext)_localctx).data = music();
				setState(16);
				match(RANGLE);
				setState(17);
				((MultiContext)_localctx).rest = compilationUnit();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Number_listContext extends ParserRuleContext {
		public Number_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_list; }
	 
		public Number_listContext() { }
		public void copyFrom(Number_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleNumberContext extends Number_listContext {
		public Token top;
		public TerminalNode NUMBER() { return getToken(MotorMusicParserPhase2.NUMBER, 0); }
		public SingleNumberContext(Number_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiNumberContext extends Number_listContext {
		public Token top;
		public Number_listContext rest;
		public TerminalNode PLUS() { return getToken(MotorMusicParserPhase2.PLUS, 0); }
		public TerminalNode NUMBER() { return getToken(MotorMusicParserPhase2.NUMBER, 0); }
		public Number_listContext number_list() {
			return getRuleContext(Number_listContext.class,0);
		}
		public MultiNumberContext(Number_listContext ctx) { copyFrom(ctx); }
	}

	public final Number_listContext number_list() throws RecognitionException {
		Number_listContext _localctx = new Number_listContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_number_list);
		try {
			setState(25);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new SingleNumberContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(21);
				((SingleNumberContext)_localctx).top = match(NUMBER);
				}
				break;
			case 2:
				_localctx = new MultiNumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(22);
				((MultiNumberContext)_localctx).top = match(NUMBER);
				setState(23);
				match(PLUS);
				setState(24);
				((MultiNumberContext)_localctx).rest = number_list();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Music_listContext extends ParserRuleContext {
		public Music_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_music_list; }
	 
		public Music_listContext() { }
		public void copyFrom(Music_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleMusicContext extends Music_listContext {
		public MusicContext top;
		public MusicContext music() {
			return getRuleContext(MusicContext.class,0);
		}
		public SingleMusicContext(Music_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiMusicContext extends Music_listContext {
		public MusicContext top;
		public Music_listContext rest;
		public MusicContext music() {
			return getRuleContext(MusicContext.class,0);
		}
		public Music_listContext music_list() {
			return getRuleContext(Music_listContext.class,0);
		}
		public MultiMusicContext(Music_listContext ctx) { copyFrom(ctx); }
	}

	public final Music_listContext music_list() throws RecognitionException {
		Music_listContext _localctx = new Music_listContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_music_list);
		try {
			setState(31);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleMusicContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				((SingleMusicContext)_localctx).top = music();
				}
				break;
			case 2:
				_localctx = new MultiMusicContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
				((MultiMusicContext)_localctx).top = music();
				setState(29);
				((MultiMusicContext)_localctx).rest = music_list();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Bracketed_music_listContext extends ParserRuleContext {
		public Bracketed_music_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bracketed_music_list; }
	 
		public Bracketed_music_listContext() { }
		public void copyFrom(Bracketed_music_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BracketedMusicListContext extends Bracketed_music_listContext {
		public Music_listContext value;
		public TerminalNode LCURLY() { return getToken(MotorMusicParserPhase2.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParserPhase2.RCURLY, 0); }
		public Music_listContext music_list() {
			return getRuleContext(Music_listContext.class,0);
		}
		public BracketedMusicListContext(Bracketed_music_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ResolveBracketedMusicListContext extends Bracketed_music_listContext {
		public Music_listContext away_from;
		public Music_listContext towards;
		public TerminalNode LCURLY() { return getToken(MotorMusicParserPhase2.LCURLY, 0); }
		public TerminalNode MID() { return getToken(MotorMusicParserPhase2.MID, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParserPhase2.RCURLY, 0); }
		public List<Music_listContext> music_list() {
			return getRuleContexts(Music_listContext.class);
		}
		public Music_listContext music_list(int i) {
			return getRuleContext(Music_listContext.class,i);
		}
		public ResolveBracketedMusicListContext(Bracketed_music_listContext ctx) { copyFrom(ctx); }
	}

	public final Bracketed_music_listContext bracketed_music_list() throws RecognitionException {
		Bracketed_music_listContext _localctx = new Bracketed_music_listContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_bracketed_music_list);
		try {
			setState(43);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new BracketedMusicListContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				match(LCURLY);
				setState(34);
				((BracketedMusicListContext)_localctx).value = music_list();
				setState(35);
				match(RCURLY);
				}
				break;
			case 2:
				_localctx = new ResolveBracketedMusicListContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(37);
				match(LCURLY);
				setState(38);
				((ResolveBracketedMusicListContext)_localctx).away_from = music_list();
				setState(39);
				match(MID);
				setState(40);
				((ResolveBracketedMusicListContext)_localctx).towards = music_list();
				setState(41);
				match(RCURLY);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MusicContext extends ParserRuleContext {
		public MusicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_music; }
	 
		public MusicContext() { }
		public void copyFrom(MusicContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ConcatContext extends MusicContext {
		public Music_listContext concat;
		public TerminalNode LCURLY() { return getToken(MotorMusicParserPhase2.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParserPhase2.RCURLY, 0); }
		public Music_listContext music_list() {
			return getRuleContext(Music_listContext.class,0);
		}
		public ConcatContext(MusicContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WordContext extends MusicContext {
		public Token ident;
		public TerminalNode IDENT() { return getToken(MotorMusicParserPhase2.IDENT, 0); }
		public WordContext(MusicContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BeatContext extends MusicContext {
		public Number_listContext beat;
		public Number_listContext number_list() {
			return getRuleContext(Number_listContext.class,0);
		}
		public BeatContext(MusicContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TimedWordContext extends MusicContext {
		public Token time;
		public Token ident;
		public TerminalNode NUMBER() { return getToken(MotorMusicParserPhase2.NUMBER, 0); }
		public TerminalNode IDENT() { return getToken(MotorMusicParserPhase2.IDENT, 0); }
		public TimedWordContext(MusicContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SpecConcatContext extends MusicContext {
		public Music_listContext awayFrom;
		public Music_listContext towards;
		public TerminalNode LCURLY() { return getToken(MotorMusicParserPhase2.LCURLY, 0); }
		public TerminalNode MID() { return getToken(MotorMusicParserPhase2.MID, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParserPhase2.RCURLY, 0); }
		public List<Music_listContext> music_list() {
			return getRuleContexts(Music_listContext.class);
		}
		public Music_listContext music_list(int i) {
			return getRuleContext(Music_listContext.class,i);
		}
		public SpecConcatContext(MusicContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ResolveContext extends MusicContext {
		public Music_listContext towards;
		public Music_listContext awayFrom;
		public TerminalNode LPAREN() { return getToken(MotorMusicParserPhase2.LPAREN, 0); }
		public TerminalNode MID() { return getToken(MotorMusicParserPhase2.MID, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParserPhase2.RPAREN, 0); }
		public List<Music_listContext> music_list() {
			return getRuleContexts(Music_listContext.class);
		}
		public Music_listContext music_list(int i) {
			return getRuleContext(Music_listContext.class,i);
		}
		public ResolveContext(MusicContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ContainmentContext extends MusicContext {
		public MusicContext container;
		public Bracketed_music_listContext contained;
		public TerminalNode LSQBRACKET() { return getToken(MotorMusicParserPhase2.LSQBRACKET, 0); }
		public TerminalNode RSQBRACKET() { return getToken(MotorMusicParserPhase2.RSQBRACKET, 0); }
		public MusicContext music() {
			return getRuleContext(MusicContext.class,0);
		}
		public Bracketed_music_listContext bracketed_music_list() {
			return getRuleContext(Bracketed_music_listContext.class,0);
		}
		public ContainmentContext(MusicContext ctx) { copyFrom(ctx); }
	}

	public final MusicContext music() throws RecognitionException {
		MusicContext _localctx = new MusicContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_music);
		try {
			setState(70);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new WordContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(45);
				((WordContext)_localctx).ident = match(IDENT);
				}
				break;
			case 2:
				_localctx = new TimedWordContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(46);
				((TimedWordContext)_localctx).time = match(NUMBER);
				setState(47);
				((TimedWordContext)_localctx).ident = match(IDENT);
				}
				break;
			case 3:
				_localctx = new BeatContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				((BeatContext)_localctx).beat = number_list();
				}
				break;
			case 4:
				_localctx = new ResolveContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				match(LPAREN);
				setState(50);
				((ResolveContext)_localctx).towards = music_list();
				setState(51);
				match(MID);
				setState(52);
				((ResolveContext)_localctx).awayFrom = music_list();
				setState(53);
				match(RPAREN);
				}
				break;
			case 5:
				_localctx = new ConcatContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(55);
				match(LCURLY);
				setState(56);
				((ConcatContext)_localctx).concat = music_list();
				setState(57);
				match(RCURLY);
				}
				break;
			case 6:
				_localctx = new SpecConcatContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(59);
				match(LCURLY);
				setState(60);
				((SpecConcatContext)_localctx).awayFrom = music_list();
				setState(61);
				match(MID);
				setState(62);
				((SpecConcatContext)_localctx).towards = music_list();
				setState(63);
				match(RCURLY);
				}
				break;
			case 7:
				_localctx = new ContainmentContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(65);
				match(LSQBRACKET);
				setState(66);
				((ContainmentContext)_localctx).container = music();
				setState(67);
				match(RSQBRACKET);
				setState(68);
				((ContainmentContext)_localctx).contained = bracketed_music_list();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001fI\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u0014\b\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u001a\b\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002 \b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003,\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003"+
		"\u0004G\b\u0004\u0001\u0004\u0000\u0000\u0005\u0000\u0002\u0004\u0006"+
		"\b\u0000\u0000M\u0000\u0013\u0001\u0000\u0000\u0000\u0002\u0019\u0001"+
		"\u0000\u0000\u0000\u0004\u001f\u0001\u0000\u0000\u0000\u0006+\u0001\u0000"+
		"\u0000\u0000\bF\u0001\u0000\u0000\u0000\n\u000b\u0005\u000b\u0000\u0000"+
		"\u000b\f\u0003\b\u0004\u0000\f\r\u0005\f\u0000\u0000\r\u0014\u0001\u0000"+
		"\u0000\u0000\u000e\u000f\u0005\u000b\u0000\u0000\u000f\u0010\u0003\b\u0004"+
		"\u0000\u0010\u0011\u0005\f\u0000\u0000\u0011\u0012\u0003\u0000\u0000\u0000"+
		"\u0012\u0014\u0001\u0000\u0000\u0000\u0013\n\u0001\u0000\u0000\u0000\u0013"+
		"\u000e\u0001\u0000\u0000\u0000\u0014\u0001\u0001\u0000\u0000\u0000\u0015"+
		"\u001a\u0005\u0003\u0000\u0000\u0016\u0017\u0005\u0003\u0000\u0000\u0017"+
		"\u0018\u0005\u0012\u0000\u0000\u0018\u001a\u0003\u0002\u0001\u0000\u0019"+
		"\u0015\u0001\u0000\u0000\u0000\u0019\u0016\u0001\u0000\u0000\u0000\u001a"+
		"\u0003\u0001\u0000\u0000\u0000\u001b \u0003\b\u0004\u0000\u001c\u001d"+
		"\u0003\b\u0004\u0000\u001d\u001e\u0003\u0004\u0002\u0000\u001e \u0001"+
		"\u0000\u0000\u0000\u001f\u001b\u0001\u0000\u0000\u0000\u001f\u001c\u0001"+
		"\u0000\u0000\u0000 \u0005\u0001\u0000\u0000\u0000!\"\u0005\u0007\u0000"+
		"\u0000\"#\u0003\u0004\u0002\u0000#$\u0005\b\u0000\u0000$,\u0001\u0000"+
		"\u0000\u0000%&\u0005\u0007\u0000\u0000&\'\u0003\u0004\u0002\u0000\'(\u0005"+
		"\u0010\u0000\u0000()\u0003\u0004\u0002\u0000)*\u0005\b\u0000\u0000*,\u0001"+
		"\u0000\u0000\u0000+!\u0001\u0000\u0000\u0000+%\u0001\u0000\u0000\u0000"+
		",\u0007\u0001\u0000\u0000\u0000-G\u0005\u0004\u0000\u0000./\u0005\u0003"+
		"\u0000\u0000/G\u0005\u0004\u0000\u00000G\u0003\u0002\u0001\u000012\u0005"+
		"\t\u0000\u000023\u0003\u0004\u0002\u000034\u0005\u0010\u0000\u000045\u0003"+
		"\u0004\u0002\u000056\u0005\n\u0000\u00006G\u0001\u0000\u0000\u000078\u0005"+
		"\u0007\u0000\u000089\u0003\u0004\u0002\u00009:\u0005\b\u0000\u0000:G\u0001"+
		"\u0000\u0000\u0000;<\u0005\u0007\u0000\u0000<=\u0003\u0004\u0002\u0000"+
		"=>\u0005\u0010\u0000\u0000>?\u0003\u0004\u0002\u0000?@\u0005\b\u0000\u0000"+
		"@G\u0001\u0000\u0000\u0000AB\u0005\r\u0000\u0000BC\u0003\b\u0004\u0000"+
		"CD\u0005\u000e\u0000\u0000DE\u0003\u0006\u0003\u0000EG\u0001\u0000\u0000"+
		"\u0000F-\u0001\u0000\u0000\u0000F.\u0001\u0000\u0000\u0000F0\u0001\u0000"+
		"\u0000\u0000F1\u0001\u0000\u0000\u0000F7\u0001\u0000\u0000\u0000F;\u0001"+
		"\u0000\u0000\u0000FA\u0001\u0000\u0000\u0000G\t\u0001\u0000\u0000\u0000"+
		"\u0005\u0013\u0019\u001f+F";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}