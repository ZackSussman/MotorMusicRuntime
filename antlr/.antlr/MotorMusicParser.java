// Generated from /Users/zacksussman/Documents/code/motormusic/motormusic-runtime/antlr/MotorMusicParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MotorMusicParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, SYLLABLE=2, NUMBER=3, LCURLY=4, RCURLY=5, LPAREN=6, RPAREN=7, LANGLE=8, 
		RANGLE=9, LSQBRACKET=10, RSQBRACKET=11, UNDERSCORE=12, DOT=13, CARROT=14, 
		AMPERSAND=15, UNRECOGNIZED=16;
	public static final int
		RULE_compilationUnit = 0, RULE_raised_gesture_list = 1, RULE_motion_spec_list = 2, 
		RULE_syllable_group = 3, RULE_gesture = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "raised_gesture_list", "motion_spec_list", "syllable_group", 
			"gesture"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", 
			"']'", "'_'", "'.'", "'^'", "'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "AMPERSAND", "UNRECOGNIZED"
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
	public String getGrammarFileName() { return "MotorMusicParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MotorMusicParser(TokenStream input) {
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
	public static class NonEmptyProgramWithDefaultPitchSpecificationContext extends CompilationUnitContext {
		public GestureContext e;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public GestureContext gesture() {
			return getRuleContext(GestureContext.class,0);
		}
		public NonEmptyProgramWithDefaultPitchSpecificationContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EmptyProgramContext extends CompilationUnitContext {
		public Token e;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public EmptyProgramContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		try {
			setState(14);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(10);
				((EmptyProgramContext)_localctx).e = match(EOF);
				}
				break;
			case SYLLABLE:
			case NUMBER:
			case LPAREN:
			case UNDERSCORE:
				_localctx = new NonEmptyProgramWithDefaultPitchSpecificationContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(11);
				((NonEmptyProgramWithDefaultPitchSpecificationContext)_localctx).e = gesture();
				setState(12);
				match(EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Raised_gesture_listContext extends ParserRuleContext {
		public Raised_gesture_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_raised_gesture_list; }
	 
		public Raised_gesture_listContext() { }
		public void copyFrom(Raised_gesture_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RaisedMultiContext extends Raised_gesture_listContext {
		public GestureContext top;
		public Raised_gesture_listContext rest;
		public GestureContext gesture() {
			return getRuleContext(GestureContext.class,0);
		}
		public Raised_gesture_listContext raised_gesture_list() {
			return getRuleContext(Raised_gesture_listContext.class,0);
		}
		public RaisedMultiContext(Raised_gesture_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class RaisedSingleContext extends Raised_gesture_listContext {
		public GestureContext top;
		public GestureContext gesture() {
			return getRuleContext(GestureContext.class,0);
		}
		public RaisedSingleContext(Raised_gesture_listContext ctx) { copyFrom(ctx); }
	}

	public final Raised_gesture_listContext raised_gesture_list() throws RecognitionException {
		Raised_gesture_listContext _localctx = new Raised_gesture_listContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_raised_gesture_list);
		try {
			setState(20);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new RaisedSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(16);
				((RaisedSingleContext)_localctx).top = gesture();
				}
				break;
			case 2:
				_localctx = new RaisedMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(17);
				((RaisedMultiContext)_localctx).top = gesture();
				setState(18);
				((RaisedMultiContext)_localctx).rest = raised_gesture_list();
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
	public static class Motion_spec_listContext extends ParserRuleContext {
		public Motion_spec_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_motion_spec_list; }
	 
		public Motion_spec_listContext() { }
		public void copyFrom(Motion_spec_listContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AwayPrefixMotionSpecContext extends Motion_spec_listContext {
		public Raised_gesture_listContext top;
		public Motion_spec_listContext rest;
		public TerminalNode CARROT() { return getToken(MotorMusicParser.CARROT, 0); }
		public Raised_gesture_listContext raised_gesture_list() {
			return getRuleContext(Raised_gesture_listContext.class,0);
		}
		public Motion_spec_listContext motion_spec_list() {
			return getRuleContext(Motion_spec_listContext.class,0);
		}
		public AwayPrefixMotionSpecContext(Motion_spec_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EndTowardsMotionSpecContext extends Motion_spec_listContext {
		public Raised_gesture_listContext top;
		public Raised_gesture_listContext rest;
		public TerminalNode CARROT() { return getToken(MotorMusicParser.CARROT, 0); }
		public List<Raised_gesture_listContext> raised_gesture_list() {
			return getRuleContexts(Raised_gesture_listContext.class);
		}
		public Raised_gesture_listContext raised_gesture_list(int i) {
			return getRuleContext(Raised_gesture_listContext.class,i);
		}
		public EndTowardsMotionSpecContext(Motion_spec_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleMotionSpecUpContext extends Motion_spec_listContext {
		public Raised_gesture_listContext top;
		public TerminalNode CARROT() { return getToken(MotorMusicParser.CARROT, 0); }
		public Raised_gesture_listContext raised_gesture_list() {
			return getRuleContext(Raised_gesture_listContext.class,0);
		}
		public SingleMotionSpecUpContext(Motion_spec_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SingleMotionSpecDownContext extends Motion_spec_listContext {
		public Raised_gesture_listContext top;
		public TerminalNode DOT() { return getToken(MotorMusicParser.DOT, 0); }
		public Raised_gesture_listContext raised_gesture_list() {
			return getRuleContext(Raised_gesture_listContext.class,0);
		}
		public SingleMotionSpecDownContext(Motion_spec_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TowardsPrefixMotionSpecContext extends Motion_spec_listContext {
		public Raised_gesture_listContext top;
		public Motion_spec_listContext rest;
		public TerminalNode DOT() { return getToken(MotorMusicParser.DOT, 0); }
		public Raised_gesture_listContext raised_gesture_list() {
			return getRuleContext(Raised_gesture_listContext.class,0);
		}
		public Motion_spec_listContext motion_spec_list() {
			return getRuleContext(Motion_spec_listContext.class,0);
		}
		public TowardsPrefixMotionSpecContext(Motion_spec_listContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EndAwayFromMotionSpecContext extends Motion_spec_listContext {
		public Raised_gesture_listContext top;
		public Raised_gesture_listContext rest;
		public TerminalNode DOT() { return getToken(MotorMusicParser.DOT, 0); }
		public List<Raised_gesture_listContext> raised_gesture_list() {
			return getRuleContexts(Raised_gesture_listContext.class);
		}
		public Raised_gesture_listContext raised_gesture_list(int i) {
			return getRuleContext(Raised_gesture_listContext.class,i);
		}
		public EndAwayFromMotionSpecContext(Motion_spec_listContext ctx) { copyFrom(ctx); }
	}

	public final Motion_spec_listContext motion_spec_list() throws RecognitionException {
		Motion_spec_listContext _localctx = new Motion_spec_listContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_motion_spec_list);
		try {
			setState(44);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleMotionSpecDownContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(22);
				((SingleMotionSpecDownContext)_localctx).top = raised_gesture_list();
				setState(23);
				match(DOT);
				}
				break;
			case 2:
				_localctx = new SingleMotionSpecUpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(25);
				((SingleMotionSpecUpContext)_localctx).top = raised_gesture_list();
				setState(26);
				match(CARROT);
				}
				break;
			case 3:
				_localctx = new TowardsPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(28);
				((TowardsPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(29);
				match(DOT);
				setState(30);
				((TowardsPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 4:
				_localctx = new AwayPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(32);
				((AwayPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(33);
				match(CARROT);
				setState(34);
				((AwayPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 5:
				_localctx = new EndAwayFromMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(36);
				((EndAwayFromMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(37);
				match(DOT);
				setState(38);
				((EndAwayFromMotionSpecContext)_localctx).rest = raised_gesture_list();
				}
				break;
			case 6:
				_localctx = new EndTowardsMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(40);
				((EndTowardsMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(41);
				match(CARROT);
				setState(42);
				((EndTowardsMotionSpecContext)_localctx).rest = raised_gesture_list();
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
	public static class Syllable_groupContext extends ParserRuleContext {
		public Syllable_groupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syllable_group; }
	 
		public Syllable_groupContext() { }
		public void copyFrom(Syllable_groupContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SyllableGroupSingleContext extends Syllable_groupContext {
		public Token syllable;
		public TerminalNode SYLLABLE() { return getToken(MotorMusicParser.SYLLABLE, 0); }
		public SyllableGroupSingleContext(Syllable_groupContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SyllableGroupMultiContext extends Syllable_groupContext {
		public Token top;
		public Syllable_groupContext rest;
		public TerminalNode AMPERSAND() { return getToken(MotorMusicParser.AMPERSAND, 0); }
		public TerminalNode SYLLABLE() { return getToken(MotorMusicParser.SYLLABLE, 0); }
		public Syllable_groupContext syllable_group() {
			return getRuleContext(Syllable_groupContext.class,0);
		}
		public SyllableGroupMultiContext(Syllable_groupContext ctx) { copyFrom(ctx); }
	}

	public final Syllable_groupContext syllable_group() throws RecognitionException {
		Syllable_groupContext _localctx = new Syllable_groupContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_syllable_group);
		try {
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new SyllableGroupSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				((SyllableGroupSingleContext)_localctx).syllable = match(SYLLABLE);
				}
				break;
			case 2:
				_localctx = new SyllableGroupMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				((SyllableGroupMultiContext)_localctx).top = match(SYLLABLE);
				setState(48);
				match(AMPERSAND);
				setState(49);
				((SyllableGroupMultiContext)_localctx).rest = syllable_group();
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
	public static class GestureContext extends ParserRuleContext {
		public GestureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gesture; }
	 
		public GestureContext() { }
		public void copyFrom(GestureContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EmptyContext extends GestureContext {
		public TerminalNode UNDERSCORE() { return getToken(MotorMusicParser.UNDERSCORE, 0); }
		public EmptyContext(GestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DirectionSpecContext extends GestureContext {
		public Motion_spec_listContext motion_spec;
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public Motion_spec_listContext motion_spec_list() {
			return getRuleContext(Motion_spec_listContext.class,0);
		}
		public DirectionSpecContext(GestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TimeTaggedEmptyContext extends GestureContext {
		public Token number;
		public TerminalNode UNDERSCORE() { return getToken(MotorMusicParser.UNDERSCORE, 0); }
		public TerminalNode NUMBER() { return getToken(MotorMusicParser.NUMBER, 0); }
		public TimeTaggedEmptyContext(GestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SyllableGroupContext extends GestureContext {
		public Syllable_groupContext syllables;
		public Syllable_groupContext syllable_group() {
			return getRuleContext(Syllable_groupContext.class,0);
		}
		public SyllableGroupContext(GestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TimeTaggedSyllableGroupContext extends GestureContext {
		public Token number;
		public Syllable_groupContext syllables;
		public TerminalNode NUMBER() { return getToken(MotorMusicParser.NUMBER, 0); }
		public Syllable_groupContext syllable_group() {
			return getRuleContext(Syllable_groupContext.class,0);
		}
		public TimeTaggedSyllableGroupContext(GestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ContainmentContext extends GestureContext {
		public Syllable_groupContext syllables;
		public Motion_spec_listContext motion_spec;
		public TerminalNode LCURLY() { return getToken(MotorMusicParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(MotorMusicParser.RCURLY, 0); }
		public Syllable_groupContext syllable_group() {
			return getRuleContext(Syllable_groupContext.class,0);
		}
		public Motion_spec_listContext motion_spec_list() {
			return getRuleContext(Motion_spec_listContext.class,0);
		}
		public ContainmentContext(GestureContext ctx) { copyFrom(ctx); }
	}

	public final GestureContext gesture() throws RecognitionException {
		GestureContext _localctx = new GestureContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_gesture);
		try {
			setState(67);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new EmptyContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(52);
				match(UNDERSCORE);
				}
				break;
			case 2:
				_localctx = new TimeTaggedEmptyContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(53);
				((TimeTaggedEmptyContext)_localctx).number = match(NUMBER);
				setState(54);
				match(UNDERSCORE);
				}
				break;
			case 3:
				_localctx = new SyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				((SyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 4:
				_localctx = new TimeTaggedSyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(56);
				((TimeTaggedSyllableGroupContext)_localctx).number = match(NUMBER);
				setState(57);
				((TimeTaggedSyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 5:
				_localctx = new DirectionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				match(LPAREN);
				setState(59);
				((DirectionSpecContext)_localctx).motion_spec = motion_spec_list();
				setState(60);
				match(RPAREN);
				}
				break;
			case 6:
				_localctx = new ContainmentContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(62);
				((ContainmentContext)_localctx).syllables = syllable_group();
				setState(63);
				match(LCURLY);
				setState(64);
				((ContainmentContext)_localctx).motion_spec = motion_spec_list();
				setState(65);
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

	public static final String _serializedATN =
		"\u0004\u0001\u0010F\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u000f\b\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u0015\b\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002-\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00033\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004D\b\u0004\u0001\u0004\u0000"+
		"\u0000\u0005\u0000\u0002\u0004\u0006\b\u0000\u0000M\u0000\u000e\u0001"+
		"\u0000\u0000\u0000\u0002\u0014\u0001\u0000\u0000\u0000\u0004,\u0001\u0000"+
		"\u0000\u0000\u00062\u0001\u0000\u0000\u0000\bC\u0001\u0000\u0000\u0000"+
		"\n\u000f\u0005\u0000\u0000\u0001\u000b\f\u0003\b\u0004\u0000\f\r\u0005"+
		"\u0000\u0000\u0001\r\u000f\u0001\u0000\u0000\u0000\u000e\n\u0001\u0000"+
		"\u0000\u0000\u000e\u000b\u0001\u0000\u0000\u0000\u000f\u0001\u0001\u0000"+
		"\u0000\u0000\u0010\u0015\u0003\b\u0004\u0000\u0011\u0012\u0003\b\u0004"+
		"\u0000\u0012\u0013\u0003\u0002\u0001\u0000\u0013\u0015\u0001\u0000\u0000"+
		"\u0000\u0014\u0010\u0001\u0000\u0000\u0000\u0014\u0011\u0001\u0000\u0000"+
		"\u0000\u0015\u0003\u0001\u0000\u0000\u0000\u0016\u0017\u0003\u0002\u0001"+
		"\u0000\u0017\u0018\u0005\r\u0000\u0000\u0018-\u0001\u0000\u0000\u0000"+
		"\u0019\u001a\u0003\u0002\u0001\u0000\u001a\u001b\u0005\u000e\u0000\u0000"+
		"\u001b-\u0001\u0000\u0000\u0000\u001c\u001d\u0003\u0002\u0001\u0000\u001d"+
		"\u001e\u0005\r\u0000\u0000\u001e\u001f\u0003\u0004\u0002\u0000\u001f-"+
		"\u0001\u0000\u0000\u0000 !\u0003\u0002\u0001\u0000!\"\u0005\u000e\u0000"+
		"\u0000\"#\u0003\u0004\u0002\u0000#-\u0001\u0000\u0000\u0000$%\u0003\u0002"+
		"\u0001\u0000%&\u0005\r\u0000\u0000&\'\u0003\u0002\u0001\u0000\'-\u0001"+
		"\u0000\u0000\u0000()\u0003\u0002\u0001\u0000)*\u0005\u000e\u0000\u0000"+
		"*+\u0003\u0002\u0001\u0000+-\u0001\u0000\u0000\u0000,\u0016\u0001\u0000"+
		"\u0000\u0000,\u0019\u0001\u0000\u0000\u0000,\u001c\u0001\u0000\u0000\u0000"+
		", \u0001\u0000\u0000\u0000,$\u0001\u0000\u0000\u0000,(\u0001\u0000\u0000"+
		"\u0000-\u0005\u0001\u0000\u0000\u0000.3\u0005\u0002\u0000\u0000/0\u0005"+
		"\u0002\u0000\u000001\u0005\u000f\u0000\u000013\u0003\u0006\u0003\u0000"+
		"2.\u0001\u0000\u0000\u00002/\u0001\u0000\u0000\u00003\u0007\u0001\u0000"+
		"\u0000\u00004D\u0005\f\u0000\u000056\u0005\u0003\u0000\u00006D\u0005\f"+
		"\u0000\u00007D\u0003\u0006\u0003\u000089\u0005\u0003\u0000\u00009D\u0003"+
		"\u0006\u0003\u0000:;\u0005\u0006\u0000\u0000;<\u0003\u0004\u0002\u0000"+
		"<=\u0005\u0007\u0000\u0000=D\u0001\u0000\u0000\u0000>?\u0003\u0006\u0003"+
		"\u0000?@\u0005\u0004\u0000\u0000@A\u0003\u0004\u0002\u0000AB\u0005\u0005"+
		"\u0000\u0000BD\u0001\u0000\u0000\u0000C4\u0001\u0000\u0000\u0000C5\u0001"+
		"\u0000\u0000\u0000C7\u0001\u0000\u0000\u0000C8\u0001\u0000\u0000\u0000"+
		"C:\u0001\u0000\u0000\u0000C>\u0001\u0000\u0000\u0000D\t\u0001\u0000\u0000"+
		"\u0000\u0005\u000e\u0014,2C";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}