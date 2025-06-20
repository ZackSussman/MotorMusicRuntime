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
		UNRECOGNIZED=15;
	public static final int
		RULE_compilationUnit = 0, RULE_raised_gesture_list = 1, RULE_motion_spec_list = 2, 
		RULE_gesture = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "raised_gesture_list", "motion_spec_list", "gesture"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", 
			"']'", "'_'", "'.'", "'^'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "UNRECOGNIZED"
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
	public static class NonEmptyProgramContext extends CompilationUnitContext {
		public GestureContext e;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public GestureContext gesture() {
			return getRuleContext(GestureContext.class,0);
		}
		public NonEmptyProgramContext(CompilationUnitContext ctx) { copyFrom(ctx); }
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
			setState(12);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(8);
				((EmptyProgramContext)_localctx).e = match(EOF);
				}
				break;
			case SYLLABLE:
			case NUMBER:
			case LPAREN:
			case UNDERSCORE:
				_localctx = new NonEmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(9);
				((NonEmptyProgramContext)_localctx).e = gesture();
				setState(10);
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
			setState(18);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new RaisedSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(14);
				((RaisedSingleContext)_localctx).top = gesture();
				}
				break;
			case 2:
				_localctx = new RaisedMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(15);
				((RaisedMultiContext)_localctx).top = gesture();
				setState(16);
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
			setState(42);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleMotionSpecDownContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				((SingleMotionSpecDownContext)_localctx).top = raised_gesture_list();
				setState(21);
				match(DOT);
				}
				break;
			case 2:
				_localctx = new SingleMotionSpecUpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				((SingleMotionSpecUpContext)_localctx).top = raised_gesture_list();
				setState(24);
				match(CARROT);
				}
				break;
			case 3:
				_localctx = new TowardsPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(26);
				((TowardsPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(27);
				match(DOT);
				setState(28);
				((TowardsPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 4:
				_localctx = new AwayPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(30);
				((AwayPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(31);
				match(CARROT);
				setState(32);
				((AwayPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 5:
				_localctx = new EndAwayFromMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(34);
				((EndAwayFromMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(35);
				match(DOT);
				setState(36);
				((EndAwayFromMotionSpecContext)_localctx).rest = raised_gesture_list();
				}
				break;
			case 6:
				_localctx = new EndTowardsMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(38);
				((EndTowardsMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(39);
				match(CARROT);
				setState(40);
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
	public static class TimeTaggedSyllableContext extends GestureContext {
		public Token number;
		public Token syllable;
		public TerminalNode NUMBER() { return getToken(MotorMusicParser.NUMBER, 0); }
		public TerminalNode SYLLABLE() { return getToken(MotorMusicParser.SYLLABLE, 0); }
		public TimeTaggedSyllableContext(GestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SyllableContext extends GestureContext {
		public Token syllable;
		public TerminalNode SYLLABLE() { return getToken(MotorMusicParser.SYLLABLE, 0); }
		public SyllableContext(GestureContext ctx) { copyFrom(ctx); }
	}

	public final GestureContext gesture() throws RecognitionException {
		GestureContext _localctx = new GestureContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_gesture);
		try {
			setState(54);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new EmptyContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				match(UNDERSCORE);
				}
				break;
			case 2:
				_localctx = new TimeTaggedEmptyContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				((TimeTaggedEmptyContext)_localctx).number = match(NUMBER);
				setState(46);
				match(UNDERSCORE);
				}
				break;
			case 3:
				_localctx = new SyllableContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(47);
				((SyllableContext)_localctx).syllable = match(SYLLABLE);
				}
				break;
			case 4:
				_localctx = new TimeTaggedSyllableContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(48);
				((TimeTaggedSyllableContext)_localctx).number = match(NUMBER);
				setState(49);
				((TimeTaggedSyllableContext)_localctx).syllable = match(SYLLABLE);
				}
				break;
			case 5:
				_localctx = new DirectionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(50);
				match(LPAREN);
				setState(51);
				((DirectionSpecContext)_localctx).motion_spec = motion_spec_list();
				setState(52);
				match(RPAREN);
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
		"\u0004\u0001\u000f9\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000\r\b\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001\u0013\b\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0003\u0002+\b\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u00037\b\u0003\u0001\u0003\u0000\u0000\u0004"+
		"\u0000\u0002\u0004\u0006\u0000\u0000?\u0000\f\u0001\u0000\u0000\u0000"+
		"\u0002\u0012\u0001\u0000\u0000\u0000\u0004*\u0001\u0000\u0000\u0000\u0006"+
		"6\u0001\u0000\u0000\u0000\b\r\u0005\u0000\u0000\u0001\t\n\u0003\u0006"+
		"\u0003\u0000\n\u000b\u0005\u0000\u0000\u0001\u000b\r\u0001\u0000\u0000"+
		"\u0000\f\b\u0001\u0000\u0000\u0000\f\t\u0001\u0000\u0000\u0000\r\u0001"+
		"\u0001\u0000\u0000\u0000\u000e\u0013\u0003\u0006\u0003\u0000\u000f\u0010"+
		"\u0003\u0006\u0003\u0000\u0010\u0011\u0003\u0002\u0001\u0000\u0011\u0013"+
		"\u0001\u0000\u0000\u0000\u0012\u000e\u0001\u0000\u0000\u0000\u0012\u000f"+
		"\u0001\u0000\u0000\u0000\u0013\u0003\u0001\u0000\u0000\u0000\u0014\u0015"+
		"\u0003\u0002\u0001\u0000\u0015\u0016\u0005\r\u0000\u0000\u0016+\u0001"+
		"\u0000\u0000\u0000\u0017\u0018\u0003\u0002\u0001\u0000\u0018\u0019\u0005"+
		"\u000e\u0000\u0000\u0019+\u0001\u0000\u0000\u0000\u001a\u001b\u0003\u0002"+
		"\u0001\u0000\u001b\u001c\u0005\r\u0000\u0000\u001c\u001d\u0003\u0004\u0002"+
		"\u0000\u001d+\u0001\u0000\u0000\u0000\u001e\u001f\u0003\u0002\u0001\u0000"+
		"\u001f \u0005\u000e\u0000\u0000 !\u0003\u0004\u0002\u0000!+\u0001\u0000"+
		"\u0000\u0000\"#\u0003\u0002\u0001\u0000#$\u0005\r\u0000\u0000$%\u0003"+
		"\u0002\u0001\u0000%+\u0001\u0000\u0000\u0000&\'\u0003\u0002\u0001\u0000"+
		"\'(\u0005\u000e\u0000\u0000()\u0003\u0002\u0001\u0000)+\u0001\u0000\u0000"+
		"\u0000*\u0014\u0001\u0000\u0000\u0000*\u0017\u0001\u0000\u0000\u0000*"+
		"\u001a\u0001\u0000\u0000\u0000*\u001e\u0001\u0000\u0000\u0000*\"\u0001"+
		"\u0000\u0000\u0000*&\u0001\u0000\u0000\u0000+\u0005\u0001\u0000\u0000"+
		"\u0000,7\u0005\f\u0000\u0000-.\u0005\u0003\u0000\u0000.7\u0005\f\u0000"+
		"\u0000/7\u0005\u0002\u0000\u000001\u0005\u0003\u0000\u000017\u0005\u0002"+
		"\u0000\u000023\u0005\u0006\u0000\u000034\u0003\u0004\u0002\u000045\u0005"+
		"\u0007\u0000\u000057\u0001\u0000\u0000\u00006,\u0001\u0000\u0000\u0000"+
		"6-\u0001\u0000\u0000\u00006/\u0001\u0000\u0000\u000060\u0001\u0000\u0000"+
		"\u000062\u0001\u0000\u0000\u00007\u0007\u0001\u0000\u0000\u0000\u0004"+
		"\f\u0012*6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}