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
		WS=1, FN=2, IDENT=3, NUMBER=4, LCURLY=5, RCURLY=6, LPAREN=7, RPAREN=8, 
		LANGLE=9, RANGLE=10, LSQBRACKET=11, RSQBRACKET=12, UNDERSCORE=13, DOT=14, 
		CARROT=15, AMPERSAND=16, MID=17, EQUALS=18, COLON=19, DASH=20, COMMA=21, 
		SEMICOLON=22, EXCLAMATION=23, UNRECOGNIZED=24;
	public static final int
		RULE_compilationUnit = 0, RULE_raised_gesture_list = 1, RULE_motion_spec_list = 2, 
		RULE_syllable_group = 3, RULE_gesture = 4, RULE_input_type = 5, RULE_type = 6, 
		RULE_exp = 7, RULE_exp_or_gesture = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "raised_gesture_list", "motion_spec_list", "syllable_group", 
			"gesture", "input_type", "type", "exp", "exp_or_gesture"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'fn'", null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", 
			"'['", "']'", "'_'", "'.'", "'^'", "'&'", "'|'", "'='", "':'", "'-'", 
			"','", "';'", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "FN", "IDENT", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "AMPERSAND", "MID", "EQUALS", "COLON", "DASH", "COMMA", "SEMICOLON", 
			"EXCLAMATION", "UNRECOGNIZED"
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
		public Exp_or_gestureContext p;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public Exp_or_gestureContext exp_or_gesture() {
			return getRuleContext(Exp_or_gestureContext.class,0);
		}
		public NonEmptyProgramContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EmptyProgramContext extends CompilationUnitContext {
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public EmptyProgramContext(CompilationUnitContext ctx) { copyFrom(ctx); }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		try {
			setState(22);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(18);
				match(EOF);
				}
				break;
			case FN:
			case IDENT:
			case NUMBER:
			case LPAREN:
			case UNDERSCORE:
				_localctx = new NonEmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(19);
				((NonEmptyProgramContext)_localctx).p = exp_or_gesture();
				setState(20);
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
			setState(28);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new RaisedSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(24);
				((RaisedSingleContext)_localctx).top = gesture();
				}
				break;
			case 2:
				_localctx = new RaisedMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(25);
				((RaisedMultiContext)_localctx).top = gesture();
				setState(26);
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
			setState(52);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleMotionSpecDownContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				((SingleMotionSpecDownContext)_localctx).top = raised_gesture_list();
				setState(31);
				match(DOT);
				}
				break;
			case 2:
				_localctx = new SingleMotionSpecUpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(33);
				((SingleMotionSpecUpContext)_localctx).top = raised_gesture_list();
				setState(34);
				match(CARROT);
				}
				break;
			case 3:
				_localctx = new TowardsPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(36);
				((TowardsPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(37);
				match(DOT);
				setState(38);
				((TowardsPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 4:
				_localctx = new AwayPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(40);
				((AwayPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(41);
				match(CARROT);
				setState(42);
				((AwayPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 5:
				_localctx = new EndAwayFromMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(44);
				((EndAwayFromMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(45);
				match(DOT);
				setState(46);
				((EndAwayFromMotionSpecContext)_localctx).rest = raised_gesture_list();
				}
				break;
			case 6:
				_localctx = new EndTowardsMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(48);
				((EndTowardsMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(49);
				match(CARROT);
				setState(50);
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
		public ExpContext syllable;
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public SyllableGroupSingleContext(Syllable_groupContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SyllableGroupMultiContext extends Syllable_groupContext {
		public ExpContext top;
		public Syllable_groupContext rest;
		public TerminalNode AMPERSAND() { return getToken(MotorMusicParser.AMPERSAND, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public Syllable_groupContext syllable_group() {
			return getRuleContext(Syllable_groupContext.class,0);
		}
		public SyllableGroupMultiContext(Syllable_groupContext ctx) { copyFrom(ctx); }
	}

	public final Syllable_groupContext syllable_group() throws RecognitionException {
		Syllable_groupContext _localctx = new Syllable_groupContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_syllable_group);
		try {
			setState(59);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new SyllableGroupSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				((SyllableGroupSingleContext)_localctx).syllable = exp(0);
				}
				break;
			case 2:
				_localctx = new SyllableGroupMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				((SyllableGroupMultiContext)_localctx).top = exp(0);
				setState(56);
				match(AMPERSAND);
				setState(57);
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
		public ExpContext number;
		public TerminalNode UNDERSCORE() { return getToken(MotorMusicParser.UNDERSCORE, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
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
		public ExpContext number;
		public Syllable_groupContext syllables;
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
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
			setState(78);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new EmptyContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(61);
				match(UNDERSCORE);
				}
				break;
			case 2:
				_localctx = new TimeTaggedEmptyContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				((TimeTaggedEmptyContext)_localctx).number = exp(0);
				setState(63);
				match(UNDERSCORE);
				}
				break;
			case 3:
				_localctx = new SyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(65);
				((SyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 4:
				_localctx = new TimeTaggedSyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(66);
				((TimeTaggedSyllableGroupContext)_localctx).number = exp(0);
				setState(67);
				((TimeTaggedSyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 5:
				_localctx = new DirectionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(69);
				match(LPAREN);
				setState(70);
				((DirectionSpecContext)_localctx).motion_spec = motion_spec_list();
				setState(71);
				match(RPAREN);
				}
				break;
			case 6:
				_localctx = new ContainmentContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(73);
				((ContainmentContext)_localctx).syllables = syllable_group();
				setState(74);
				match(LCURLY);
				setState(75);
				((ContainmentContext)_localctx).motion_spec = motion_spec_list();
				setState(76);
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
	public static class Input_typeContext extends ParserRuleContext {
		public Input_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_input_type; }
	 
		public Input_typeContext() { }
		public void copyFrom(Input_typeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BuiltInInputTypeContext extends Input_typeContext {
		public Token builtin;
		public TerminalNode IDENT() { return getToken(MotorMusicParser.IDENT, 0); }
		public BuiltInInputTypeContext(Input_typeContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WrappedInputTypeContext extends Input_typeContext {
		public TypeContext literal;
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public WrappedInputTypeContext(Input_typeContext ctx) { copyFrom(ctx); }
	}

	public final Input_typeContext input_type() throws RecognitionException {
		Input_typeContext _localctx = new Input_typeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_input_type);
		try {
			setState(85);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENT:
				_localctx = new BuiltInInputTypeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				((BuiltInInputTypeContext)_localctx).builtin = match(IDENT);
				}
				break;
			case LPAREN:
				_localctx = new WrappedInputTypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(81);
				match(LPAREN);
				setState(82);
				((WrappedInputTypeContext)_localctx).literal = type();
				setState(83);
				match(RPAREN);
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
	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	 
		public TypeContext() { }
		public void copyFrom(TypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FunctionTypeContext extends TypeContext {
		public Input_typeContext inType;
		public TypeContext outType;
		public TerminalNode DASH() { return getToken(MotorMusicParser.DASH, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParser.RANGLE, 0); }
		public Input_typeContext input_type() {
			return getRuleContext(Input_typeContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public FunctionTypeContext(TypeContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BuiltInContext extends TypeContext {
		public Token builtin;
		public TerminalNode IDENT() { return getToken(MotorMusicParser.IDENT, 0); }
		public BuiltInContext(TypeContext ctx) { copyFrom(ctx); }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_type);
		try {
			setState(93);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				_localctx = new BuiltInContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				((BuiltInContext)_localctx).builtin = match(IDENT);
				}
				break;
			case 2:
				_localctx = new FunctionTypeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(88);
				((FunctionTypeContext)_localctx).inType = input_type();
				setState(89);
				match(DASH);
				setState(90);
				match(RANGLE);
				setState(91);
				((FunctionTypeContext)_localctx).outType = type();
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
	public static class ExpContext extends ParserRuleContext {
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	 
		public ExpContext() { }
		public void copyFrom(ExpContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AnomDeclContext extends ExpContext {
		public Token arg;
		public TypeContext inTyp;
		public TypeContext outType;
		public Exp_or_gestureContext out;
		public TerminalNode FN() { return getToken(MotorMusicParser.FN, 0); }
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public List<TerminalNode> COLON() { return getTokens(MotorMusicParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(MotorMusicParser.COLON, i);
		}
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public TerminalNode EQUALS() { return getToken(MotorMusicParser.EQUALS, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParser.RANGLE, 0); }
		public TerminalNode IDENT() { return getToken(MotorMusicParser.IDENT, 0); }
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public Exp_or_gestureContext exp_or_gesture() {
			return getRuleContext(Exp_or_gestureContext.class,0);
		}
		public AnomDeclContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclContext extends ExpContext {
		public Token decl_name;
		public Token argName;
		public TypeContext inTyp;
		public TypeContext outType;
		public Exp_or_gestureContext out;
		public Exp_or_gestureContext in;
		public TerminalNode FN() { return getToken(MotorMusicParser.FN, 0); }
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public List<TerminalNode> COLON() { return getTokens(MotorMusicParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(MotorMusicParser.COLON, i);
		}
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public TerminalNode EQUALS() { return getToken(MotorMusicParser.EQUALS, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParser.RANGLE, 0); }
		public TerminalNode SEMICOLON() { return getToken(MotorMusicParser.SEMICOLON, 0); }
		public List<TerminalNode> IDENT() { return getTokens(MotorMusicParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(MotorMusicParser.IDENT, i);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<Exp_or_gestureContext> exp_or_gesture() {
			return getRuleContexts(Exp_or_gestureContext.class);
		}
		public Exp_or_gestureContext exp_or_gesture(int i) {
			return getRuleContext(Exp_or_gestureContext.class,i);
		}
		public DeclContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumberExpContext extends ExpContext {
		public Token number;
		public TerminalNode NUMBER() { return getToken(MotorMusicParser.NUMBER, 0); }
		public NumberExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EvalContext extends ExpContext {
		public ExpContext func;
		public Exp_or_gestureContext arg;
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public Exp_or_gestureContext exp_or_gesture() {
			return getRuleContext(Exp_or_gestureContext.class,0);
		}
		public EvalContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentExpContext extends ExpContext {
		public Token symbol;
		public TerminalNode IDENT() { return getToken(MotorMusicParser.IDENT, 0); }
		public IdentExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class WrappedExpContext extends ExpContext {
		public Exp_or_gestureContext within;
		public TerminalNode LPAREN() { return getToken(MotorMusicParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MotorMusicParser.RPAREN, 0); }
		public Exp_or_gestureContext exp_or_gesture() {
			return getRuleContext(Exp_or_gestureContext.class,0);
		}
		public WrappedExpContext(ExpContext ctx) { copyFrom(ctx); }
	}

	public final ExpContext exp() throws RecognitionException {
		return exp(0);
	}

	private ExpContext exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpContext _localctx = new ExpContext(_ctx, _parentState);
		ExpContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				_localctx = new IdentExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(96);
				((IdentExpContext)_localctx).symbol = match(IDENT);
				}
				break;
			case 2:
				{
				_localctx = new NumberExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(97);
				((NumberExpContext)_localctx).number = match(NUMBER);
				}
				break;
			case 3:
				{
				_localctx = new DeclContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(98);
				match(FN);
				setState(99);
				((DeclContext)_localctx).decl_name = match(IDENT);
				setState(100);
				match(LPAREN);
				setState(101);
				((DeclContext)_localctx).argName = match(IDENT);
				setState(102);
				match(COLON);
				setState(103);
				((DeclContext)_localctx).inTyp = type();
				setState(104);
				match(RPAREN);
				setState(105);
				match(COLON);
				setState(106);
				((DeclContext)_localctx).outType = type();
				setState(107);
				match(EQUALS);
				setState(108);
				match(RANGLE);
				setState(109);
				((DeclContext)_localctx).out = exp_or_gesture();
				setState(110);
				match(SEMICOLON);
				setState(111);
				((DeclContext)_localctx).in = exp_or_gesture();
				}
				break;
			case 4:
				{
				_localctx = new AnomDeclContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(113);
				match(FN);
				setState(114);
				match(LPAREN);
				setState(115);
				((AnomDeclContext)_localctx).arg = match(IDENT);
				setState(116);
				match(COLON);
				setState(117);
				((AnomDeclContext)_localctx).inTyp = type();
				setState(118);
				match(RPAREN);
				setState(119);
				match(COLON);
				setState(120);
				((AnomDeclContext)_localctx).outType = type();
				setState(121);
				match(EQUALS);
				setState(122);
				match(RANGLE);
				setState(123);
				((AnomDeclContext)_localctx).out = exp_or_gesture();
				}
				break;
			case 5:
				{
				_localctx = new WrappedExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(125);
				match(LPAREN);
				setState(126);
				((WrappedExpContext)_localctx).within = exp_or_gesture();
				setState(127);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(138);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new EvalContext(new ExpContext(_parentctx, _parentState));
					((EvalContext)_localctx).func = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_exp);
					setState(131);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(132);
					match(LPAREN);
					setState(133);
					((EvalContext)_localctx).arg = exp_or_gesture();
					setState(134);
					match(RPAREN);
					}
					} 
				}
				setState(140);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Exp_or_gestureContext extends ParserRuleContext {
		public Exp_or_gestureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp_or_gesture; }
	 
		public Exp_or_gestureContext() { }
		public void copyFrom(Exp_or_gestureContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExpExpOrGestureContext extends Exp_or_gestureContext {
		public ExpContext e;
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ExpExpOrGestureContext(Exp_or_gestureContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GestureExpOrGestureContext extends Exp_or_gestureContext {
		public GestureContext g;
		public GestureContext gesture() {
			return getRuleContext(GestureContext.class,0);
		}
		public GestureExpOrGestureContext(Exp_or_gestureContext ctx) { copyFrom(ctx); }
	}

	public final Exp_or_gestureContext exp_or_gesture() throws RecognitionException {
		Exp_or_gestureContext _localctx = new Exp_or_gestureContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_exp_or_gesture);
		try {
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				_localctx = new ExpExpOrGestureContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(141);
				((ExpExpOrGestureContext)_localctx).e = exp(0);
				}
				break;
			case 2:
				_localctx = new GestureExpOrGestureContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(142);
				((GestureExpOrGestureContext)_localctx).g = gesture();
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u0092\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003"+
		"\u0000\u0017\b\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001\u001d\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u00025\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003<\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004O\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0003\u0005V\b\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006^\b"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007\u0082"+
		"\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007\u0089\b\u0007\n\u0007\f\u0007\u008c\t\u0007\u0001\b\u0001\b\u0003"+
		"\b\u0090\b\b\u0001\b\u0000\u0001\u000e\t\u0000\u0002\u0004\u0006\b\n\f"+
		"\u000e\u0010\u0000\u0000\u009d\u0000\u0016\u0001\u0000\u0000\u0000\u0002"+
		"\u001c\u0001\u0000\u0000\u0000\u00044\u0001\u0000\u0000\u0000\u0006;\u0001"+
		"\u0000\u0000\u0000\bN\u0001\u0000\u0000\u0000\nU\u0001\u0000\u0000\u0000"+
		"\f]\u0001\u0000\u0000\u0000\u000e\u0081\u0001\u0000\u0000\u0000\u0010"+
		"\u008f\u0001\u0000\u0000\u0000\u0012\u0017\u0005\u0000\u0000\u0001\u0013"+
		"\u0014\u0003\u0010\b\u0000\u0014\u0015\u0005\u0000\u0000\u0001\u0015\u0017"+
		"\u0001\u0000\u0000\u0000\u0016\u0012\u0001\u0000\u0000\u0000\u0016\u0013"+
		"\u0001\u0000\u0000\u0000\u0017\u0001\u0001\u0000\u0000\u0000\u0018\u001d"+
		"\u0003\b\u0004\u0000\u0019\u001a\u0003\b\u0004\u0000\u001a\u001b\u0003"+
		"\u0002\u0001\u0000\u001b\u001d\u0001\u0000\u0000\u0000\u001c\u0018\u0001"+
		"\u0000\u0000\u0000\u001c\u0019\u0001\u0000\u0000\u0000\u001d\u0003\u0001"+
		"\u0000\u0000\u0000\u001e\u001f\u0003\u0002\u0001\u0000\u001f \u0005\u000e"+
		"\u0000\u0000 5\u0001\u0000\u0000\u0000!\"\u0003\u0002\u0001\u0000\"#\u0005"+
		"\u000f\u0000\u0000#5\u0001\u0000\u0000\u0000$%\u0003\u0002\u0001\u0000"+
		"%&\u0005\u000e\u0000\u0000&\'\u0003\u0004\u0002\u0000\'5\u0001\u0000\u0000"+
		"\u0000()\u0003\u0002\u0001\u0000)*\u0005\u000f\u0000\u0000*+\u0003\u0004"+
		"\u0002\u0000+5\u0001\u0000\u0000\u0000,-\u0003\u0002\u0001\u0000-.\u0005"+
		"\u000e\u0000\u0000./\u0003\u0002\u0001\u0000/5\u0001\u0000\u0000\u0000"+
		"01\u0003\u0002\u0001\u000012\u0005\u000f\u0000\u000023\u0003\u0002\u0001"+
		"\u000035\u0001\u0000\u0000\u00004\u001e\u0001\u0000\u0000\u00004!\u0001"+
		"\u0000\u0000\u00004$\u0001\u0000\u0000\u00004(\u0001\u0000\u0000\u0000"+
		"4,\u0001\u0000\u0000\u000040\u0001\u0000\u0000\u00005\u0005\u0001\u0000"+
		"\u0000\u00006<\u0003\u000e\u0007\u000078\u0003\u000e\u0007\u000089\u0005"+
		"\u0010\u0000\u00009:\u0003\u0006\u0003\u0000:<\u0001\u0000\u0000\u0000"+
		";6\u0001\u0000\u0000\u0000;7\u0001\u0000\u0000\u0000<\u0007\u0001\u0000"+
		"\u0000\u0000=O\u0005\r\u0000\u0000>?\u0003\u000e\u0007\u0000?@\u0005\r"+
		"\u0000\u0000@O\u0001\u0000\u0000\u0000AO\u0003\u0006\u0003\u0000BC\u0003"+
		"\u000e\u0007\u0000CD\u0003\u0006\u0003\u0000DO\u0001\u0000\u0000\u0000"+
		"EF\u0005\u0007\u0000\u0000FG\u0003\u0004\u0002\u0000GH\u0005\b\u0000\u0000"+
		"HO\u0001\u0000\u0000\u0000IJ\u0003\u0006\u0003\u0000JK\u0005\u0005\u0000"+
		"\u0000KL\u0003\u0004\u0002\u0000LM\u0005\u0006\u0000\u0000MO\u0001\u0000"+
		"\u0000\u0000N=\u0001\u0000\u0000\u0000N>\u0001\u0000\u0000\u0000NA\u0001"+
		"\u0000\u0000\u0000NB\u0001\u0000\u0000\u0000NE\u0001\u0000\u0000\u0000"+
		"NI\u0001\u0000\u0000\u0000O\t\u0001\u0000\u0000\u0000PV\u0005\u0003\u0000"+
		"\u0000QR\u0005\u0007\u0000\u0000RS\u0003\f\u0006\u0000ST\u0005\b\u0000"+
		"\u0000TV\u0001\u0000\u0000\u0000UP\u0001\u0000\u0000\u0000UQ\u0001\u0000"+
		"\u0000\u0000V\u000b\u0001\u0000\u0000\u0000W^\u0005\u0003\u0000\u0000"+
		"XY\u0003\n\u0005\u0000YZ\u0005\u0014\u0000\u0000Z[\u0005\n\u0000\u0000"+
		"[\\\u0003\f\u0006\u0000\\^\u0001\u0000\u0000\u0000]W\u0001\u0000\u0000"+
		"\u0000]X\u0001\u0000\u0000\u0000^\r\u0001\u0000\u0000\u0000_`\u0006\u0007"+
		"\uffff\uffff\u0000`\u0082\u0005\u0003\u0000\u0000a\u0082\u0005\u0004\u0000"+
		"\u0000bc\u0005\u0002\u0000\u0000cd\u0005\u0003\u0000\u0000de\u0005\u0007"+
		"\u0000\u0000ef\u0005\u0003\u0000\u0000fg\u0005\u0013\u0000\u0000gh\u0003"+
		"\f\u0006\u0000hi\u0005\b\u0000\u0000ij\u0005\u0013\u0000\u0000jk\u0003"+
		"\f\u0006\u0000kl\u0005\u0012\u0000\u0000lm\u0005\n\u0000\u0000mn\u0003"+
		"\u0010\b\u0000no\u0005\u0016\u0000\u0000op\u0003\u0010\b\u0000p\u0082"+
		"\u0001\u0000\u0000\u0000qr\u0005\u0002\u0000\u0000rs\u0005\u0007\u0000"+
		"\u0000st\u0005\u0003\u0000\u0000tu\u0005\u0013\u0000\u0000uv\u0003\f\u0006"+
		"\u0000vw\u0005\b\u0000\u0000wx\u0005\u0013\u0000\u0000xy\u0003\f\u0006"+
		"\u0000yz\u0005\u0012\u0000\u0000z{\u0005\n\u0000\u0000{|\u0003\u0010\b"+
		"\u0000|\u0082\u0001\u0000\u0000\u0000}~\u0005\u0007\u0000\u0000~\u007f"+
		"\u0003\u0010\b\u0000\u007f\u0080\u0005\b\u0000\u0000\u0080\u0082\u0001"+
		"\u0000\u0000\u0000\u0081_\u0001\u0000\u0000\u0000\u0081a\u0001\u0000\u0000"+
		"\u0000\u0081b\u0001\u0000\u0000\u0000\u0081q\u0001\u0000\u0000\u0000\u0081"+
		"}\u0001\u0000\u0000\u0000\u0082\u008a\u0001\u0000\u0000\u0000\u0083\u0084"+
		"\n\u0004\u0000\u0000\u0084\u0085\u0005\u0007\u0000\u0000\u0085\u0086\u0003"+
		"\u0010\b\u0000\u0086\u0087\u0005\b\u0000\u0000\u0087\u0089\u0001\u0000"+
		"\u0000\u0000\u0088\u0083\u0001\u0000\u0000\u0000\u0089\u008c\u0001\u0000"+
		"\u0000\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000"+
		"\u0000\u0000\u008b\u000f\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000"+
		"\u0000\u0000\u008d\u0090\u0003\u000e\u0007\u0000\u008e\u0090\u0003\b\u0004"+
		"\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u008e\u0001\u0000\u0000"+
		"\u0000\u0090\u0011\u0001\u0000\u0000\u0000\n\u0016\u001c4;NU]\u0081\u008a"+
		"\u008f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}