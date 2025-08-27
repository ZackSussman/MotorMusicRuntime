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
		RULE_syllable_group = 3, RULE_gesture = 4, RULE_type = 5, RULE_exp = 6, 
		RULE_exp_or_gesture = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "raised_gesture_list", "motion_spec_list", "syllable_group", 
			"gesture", "type", "exp", "exp_or_gesture"
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
			setState(20);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(16);
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
				setState(17);
				((NonEmptyProgramContext)_localctx).p = exp_or_gesture();
				setState(18);
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
			setState(26);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new RaisedSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(22);
				((RaisedSingleContext)_localctx).top = gesture();
				}
				break;
			case 2:
				_localctx = new RaisedMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				((RaisedMultiContext)_localctx).top = gesture();
				setState(24);
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
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleMotionSpecDownContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				((SingleMotionSpecDownContext)_localctx).top = raised_gesture_list();
				setState(29);
				match(DOT);
				}
				break;
			case 2:
				_localctx = new SingleMotionSpecUpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				((SingleMotionSpecUpContext)_localctx).top = raised_gesture_list();
				setState(32);
				match(CARROT);
				}
				break;
			case 3:
				_localctx = new TowardsPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(34);
				((TowardsPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(35);
				match(DOT);
				setState(36);
				((TowardsPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 4:
				_localctx = new AwayPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(38);
				((AwayPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(39);
				match(CARROT);
				setState(40);
				((AwayPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 5:
				_localctx = new EndAwayFromMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(42);
				((EndAwayFromMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(43);
				match(DOT);
				setState(44);
				((EndAwayFromMotionSpecContext)_localctx).rest = raised_gesture_list();
				}
				break;
			case 6:
				_localctx = new EndTowardsMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(46);
				((EndTowardsMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(47);
				match(CARROT);
				setState(48);
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
			setState(57);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new SyllableGroupSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(52);
				((SyllableGroupSingleContext)_localctx).syllable = exp(0);
				}
				break;
			case 2:
				_localctx = new SyllableGroupMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(53);
				((SyllableGroupMultiContext)_localctx).top = exp(0);
				setState(54);
				match(AMPERSAND);
				setState(55);
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
			setState(76);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				_localctx = new EmptyContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(59);
				match(UNDERSCORE);
				}
				break;
			case 2:
				_localctx = new TimeTaggedEmptyContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(60);
				((TimeTaggedEmptyContext)_localctx).number = exp(0);
				setState(61);
				match(UNDERSCORE);
				}
				break;
			case 3:
				_localctx = new SyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(63);
				((SyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 4:
				_localctx = new TimeTaggedSyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(64);
				((TimeTaggedSyllableGroupContext)_localctx).number = exp(0);
				setState(65);
				((TimeTaggedSyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 5:
				_localctx = new DirectionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(67);
				match(LPAREN);
				setState(68);
				((DirectionSpecContext)_localctx).motion_spec = motion_spec_list();
				setState(69);
				match(RPAREN);
				}
				break;
			case 6:
				_localctx = new ContainmentContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(71);
				((ContainmentContext)_localctx).syllables = syllable_group();
				setState(72);
				match(LCURLY);
				setState(73);
				((ContainmentContext)_localctx).motion_spec = motion_spec_list();
				setState(74);
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
		public TypeContext inType;
		public TypeContext outType;
		public TerminalNode DASH() { return getToken(MotorMusicParser.DASH, 0); }
		public TerminalNode RANGLE() { return getToken(MotorMusicParser.RANGLE, 0); }
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
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
		return type(0);
	}

	private TypeContext type(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeContext _localctx = new TypeContext(_ctx, _parentState);
		TypeContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_type, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new BuiltInContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(79);
			((BuiltInContext)_localctx).builtin = match(IDENT);
			}
			_ctx.stop = _input.LT(-1);
			setState(87);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new FunctionTypeContext(new TypeContext(_parentctx, _parentState));
					((FunctionTypeContext)_localctx).inType = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_type);
					setState(81);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(82);
					match(DASH);
					setState(83);
					match(RANGLE);
					setState(84);
					((FunctionTypeContext)_localctx).outType = type(2);
					}
					} 
				}
				setState(89);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
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
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				_localctx = new IdentExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(91);
				((IdentExpContext)_localctx).symbol = match(IDENT);
				}
				break;
			case 2:
				{
				_localctx = new NumberExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(92);
				((NumberExpContext)_localctx).number = match(NUMBER);
				}
				break;
			case 3:
				{
				_localctx = new DeclContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(93);
				match(FN);
				setState(94);
				((DeclContext)_localctx).decl_name = match(IDENT);
				setState(95);
				match(LPAREN);
				setState(96);
				((DeclContext)_localctx).argName = match(IDENT);
				setState(97);
				match(COLON);
				setState(98);
				((DeclContext)_localctx).inTyp = type(0);
				setState(99);
				match(RPAREN);
				setState(100);
				match(COLON);
				setState(101);
				((DeclContext)_localctx).outType = type(0);
				setState(102);
				match(EQUALS);
				setState(103);
				match(RANGLE);
				setState(104);
				((DeclContext)_localctx).out = exp_or_gesture();
				setState(105);
				match(SEMICOLON);
				setState(106);
				((DeclContext)_localctx).in = exp_or_gesture();
				}
				break;
			case 4:
				{
				_localctx = new AnomDeclContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				match(FN);
				setState(109);
				match(LPAREN);
				setState(110);
				((AnomDeclContext)_localctx).arg = match(IDENT);
				setState(111);
				match(COLON);
				setState(112);
				((AnomDeclContext)_localctx).inTyp = type(0);
				setState(113);
				match(RPAREN);
				setState(114);
				match(COLON);
				setState(115);
				((AnomDeclContext)_localctx).outType = type(0);
				setState(116);
				match(EQUALS);
				setState(117);
				match(RANGLE);
				setState(118);
				((AnomDeclContext)_localctx).out = exp_or_gesture();
				}
				break;
			case 5:
				{
				_localctx = new WrappedExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(120);
				match(LPAREN);
				setState(121);
				((WrappedExpContext)_localctx).within = exp_or_gesture();
				setState(122);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(133);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new EvalContext(new ExpContext(_parentctx, _parentState));
					((EvalContext)_localctx).func = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_exp);
					setState(126);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(127);
					match(LPAREN);
					setState(128);
					((EvalContext)_localctx).arg = exp_or_gesture();
					setState(129);
					match(RPAREN);
					}
					} 
				}
				setState(135);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
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
		enterRule(_localctx, 14, RULE_exp_or_gesture);
		try {
			setState(138);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				_localctx = new ExpExpOrGestureContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(136);
				((ExpExpOrGestureContext)_localctx).e = exp(0);
				}
				break;
			case 2:
				_localctx = new GestureExpOrGestureContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(137);
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
		case 5:
			return type_sempred((TypeContext)_localctx, predIndex);
		case 6:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean type_sempred(TypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u008d\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u0015\b\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u001b\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00023\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		":\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004M\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005V\b\u0005\n\u0005\f\u0005"+
		"Y\t\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006"+
		"}\b\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0005\u0006\u0084\b\u0006\n\u0006\f\u0006\u0087\t\u0006\u0001\u0007\u0001"+
		"\u0007\u0003\u0007\u008b\b\u0007\u0001\u0007\u0000\u0002\n\f\b\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0000\u0000\u0098\u0000\u0014\u0001\u0000\u0000"+
		"\u0000\u0002\u001a\u0001\u0000\u0000\u0000\u00042\u0001\u0000\u0000\u0000"+
		"\u00069\u0001\u0000\u0000\u0000\bL\u0001\u0000\u0000\u0000\nN\u0001\u0000"+
		"\u0000\u0000\f|\u0001\u0000\u0000\u0000\u000e\u008a\u0001\u0000\u0000"+
		"\u0000\u0010\u0015\u0005\u0000\u0000\u0001\u0011\u0012\u0003\u000e\u0007"+
		"\u0000\u0012\u0013\u0005\u0000\u0000\u0001\u0013\u0015\u0001\u0000\u0000"+
		"\u0000\u0014\u0010\u0001\u0000\u0000\u0000\u0014\u0011\u0001\u0000\u0000"+
		"\u0000\u0015\u0001\u0001\u0000\u0000\u0000\u0016\u001b\u0003\b\u0004\u0000"+
		"\u0017\u0018\u0003\b\u0004\u0000\u0018\u0019\u0003\u0002\u0001\u0000\u0019"+
		"\u001b\u0001\u0000\u0000\u0000\u001a\u0016\u0001\u0000\u0000\u0000\u001a"+
		"\u0017\u0001\u0000\u0000\u0000\u001b\u0003\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0003\u0002\u0001\u0000\u001d\u001e\u0005\u000e\u0000\u0000\u001e"+
		"3\u0001\u0000\u0000\u0000\u001f \u0003\u0002\u0001\u0000 !\u0005\u000f"+
		"\u0000\u0000!3\u0001\u0000\u0000\u0000\"#\u0003\u0002\u0001\u0000#$\u0005"+
		"\u000e\u0000\u0000$%\u0003\u0004\u0002\u0000%3\u0001\u0000\u0000\u0000"+
		"&\'\u0003\u0002\u0001\u0000\'(\u0005\u000f\u0000\u0000()\u0003\u0004\u0002"+
		"\u0000)3\u0001\u0000\u0000\u0000*+\u0003\u0002\u0001\u0000+,\u0005\u000e"+
		"\u0000\u0000,-\u0003\u0002\u0001\u0000-3\u0001\u0000\u0000\u0000./\u0003"+
		"\u0002\u0001\u0000/0\u0005\u000f\u0000\u000001\u0003\u0002\u0001\u0000"+
		"13\u0001\u0000\u0000\u00002\u001c\u0001\u0000\u0000\u00002\u001f\u0001"+
		"\u0000\u0000\u00002\"\u0001\u0000\u0000\u00002&\u0001\u0000\u0000\u0000"+
		"2*\u0001\u0000\u0000\u00002.\u0001\u0000\u0000\u00003\u0005\u0001\u0000"+
		"\u0000\u00004:\u0003\f\u0006\u000056\u0003\f\u0006\u000067\u0005\u0010"+
		"\u0000\u000078\u0003\u0006\u0003\u00008:\u0001\u0000\u0000\u000094\u0001"+
		"\u0000\u0000\u000095\u0001\u0000\u0000\u0000:\u0007\u0001\u0000\u0000"+
		"\u0000;M\u0005\r\u0000\u0000<=\u0003\f\u0006\u0000=>\u0005\r\u0000\u0000"+
		">M\u0001\u0000\u0000\u0000?M\u0003\u0006\u0003\u0000@A\u0003\f\u0006\u0000"+
		"AB\u0003\u0006\u0003\u0000BM\u0001\u0000\u0000\u0000CD\u0005\u0007\u0000"+
		"\u0000DE\u0003\u0004\u0002\u0000EF\u0005\b\u0000\u0000FM\u0001\u0000\u0000"+
		"\u0000GH\u0003\u0006\u0003\u0000HI\u0005\u0005\u0000\u0000IJ\u0003\u0004"+
		"\u0002\u0000JK\u0005\u0006\u0000\u0000KM\u0001\u0000\u0000\u0000L;\u0001"+
		"\u0000\u0000\u0000L<\u0001\u0000\u0000\u0000L?\u0001\u0000\u0000\u0000"+
		"L@\u0001\u0000\u0000\u0000LC\u0001\u0000\u0000\u0000LG\u0001\u0000\u0000"+
		"\u0000M\t\u0001\u0000\u0000\u0000NO\u0006\u0005\uffff\uffff\u0000OP\u0005"+
		"\u0003\u0000\u0000PW\u0001\u0000\u0000\u0000QR\n\u0001\u0000\u0000RS\u0005"+
		"\u0014\u0000\u0000ST\u0005\n\u0000\u0000TV\u0003\n\u0005\u0002UQ\u0001"+
		"\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000"+
		"WX\u0001\u0000\u0000\u0000X\u000b\u0001\u0000\u0000\u0000YW\u0001\u0000"+
		"\u0000\u0000Z[\u0006\u0006\uffff\uffff\u0000[}\u0005\u0003\u0000\u0000"+
		"\\}\u0005\u0004\u0000\u0000]^\u0005\u0002\u0000\u0000^_\u0005\u0003\u0000"+
		"\u0000_`\u0005\u0007\u0000\u0000`a\u0005\u0003\u0000\u0000ab\u0005\u0013"+
		"\u0000\u0000bc\u0003\n\u0005\u0000cd\u0005\b\u0000\u0000de\u0005\u0013"+
		"\u0000\u0000ef\u0003\n\u0005\u0000fg\u0005\u0012\u0000\u0000gh\u0005\n"+
		"\u0000\u0000hi\u0003\u000e\u0007\u0000ij\u0005\u0016\u0000\u0000jk\u0003"+
		"\u000e\u0007\u0000k}\u0001\u0000\u0000\u0000lm\u0005\u0002\u0000\u0000"+
		"mn\u0005\u0007\u0000\u0000no\u0005\u0003\u0000\u0000op\u0005\u0013\u0000"+
		"\u0000pq\u0003\n\u0005\u0000qr\u0005\b\u0000\u0000rs\u0005\u0013\u0000"+
		"\u0000st\u0003\n\u0005\u0000tu\u0005\u0012\u0000\u0000uv\u0005\n\u0000"+
		"\u0000vw\u0003\u000e\u0007\u0000w}\u0001\u0000\u0000\u0000xy\u0005\u0007"+
		"\u0000\u0000yz\u0003\u000e\u0007\u0000z{\u0005\b\u0000\u0000{}\u0001\u0000"+
		"\u0000\u0000|Z\u0001\u0000\u0000\u0000|\\\u0001\u0000\u0000\u0000|]\u0001"+
		"\u0000\u0000\u0000|l\u0001\u0000\u0000\u0000|x\u0001\u0000\u0000\u0000"+
		"}\u0085\u0001\u0000\u0000\u0000~\u007f\n\u0004\u0000\u0000\u007f\u0080"+
		"\u0005\u0007\u0000\u0000\u0080\u0081\u0003\u000e\u0007\u0000\u0081\u0082"+
		"\u0005\b\u0000\u0000\u0082\u0084\u0001\u0000\u0000\u0000\u0083~\u0001"+
		"\u0000\u0000\u0000\u0084\u0087\u0001\u0000\u0000\u0000\u0085\u0083\u0001"+
		"\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\r\u0001\u0000"+
		"\u0000\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0088\u008b\u0003\f\u0006"+
		"\u0000\u0089\u008b\u0003\b\u0004\u0000\u008a\u0088\u0001\u0000\u0000\u0000"+
		"\u008a\u0089\u0001\u0000\u0000\u0000\u008b\u000f\u0001\u0000\u0000\u0000"+
		"\t\u0014\u001a29LW|\u0085\u008a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}