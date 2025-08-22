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
		AMPERSAND=15, PITCH_SPECIFICATION=16, PITCH_SPEC_WS=17, PITCH_SPECIFICATION_VALUE=18, 
		PITCH_SPEC_NEWLINE=19;
	public static final int
		RULE_compilationUnit = 0, RULE_pitch_specification_statement = 1, RULE_raised_gesture_list = 2, 
		RULE_motion_spec_list = 3, RULE_syllable_group = 4, RULE_gesture = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "pitch_specification_statement", "raised_gesture_list", 
			"motion_spec_list", "syllable_group", "gesture"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", 
			"']'", "'_'", "'.'", "'^'", "'&'", "'PITCH_SPECIFICATION:'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "AMPERSAND", "PITCH_SPECIFICATION", "PITCH_SPEC_WS", "PITCH_SPECIFICATION_VALUE", 
			"PITCH_SPEC_NEWLINE"
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
	public static class NonEmptyProgramWithPitchSpecificationContext extends CompilationUnitContext {
		public Pitch_specification_statementContext s;
		public GestureContext e;
		public TerminalNode EOF() { return getToken(MotorMusicParser.EOF, 0); }
		public Pitch_specification_statementContext pitch_specification_statement() {
			return getRuleContext(Pitch_specification_statementContext.class,0);
		}
		public GestureContext gesture() {
			return getRuleContext(GestureContext.class,0);
		}
		public NonEmptyProgramWithPitchSpecificationContext(CompilationUnitContext ctx) { copyFrom(ctx); }
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
			setState(20);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				_localctx = new EmptyProgramContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(12);
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
				setState(13);
				((NonEmptyProgramWithDefaultPitchSpecificationContext)_localctx).e = gesture();
				setState(14);
				match(EOF);
				}
				break;
			case PITCH_SPECIFICATION:
				_localctx = new NonEmptyProgramWithPitchSpecificationContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(16);
				((NonEmptyProgramWithPitchSpecificationContext)_localctx).s = pitch_specification_statement();
				setState(17);
				((NonEmptyProgramWithPitchSpecificationContext)_localctx).e = gesture();
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
	public static class Pitch_specification_statementContext extends ParserRuleContext {
		public Pitch_specification_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pitch_specification_statement; }
	 
		public Pitch_specification_statementContext() { }
		public void copyFrom(Pitch_specification_statementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PitchSpecificationStatementContext extends Pitch_specification_statementContext {
		public Token p;
		public TerminalNode PITCH_SPECIFICATION() { return getToken(MotorMusicParser.PITCH_SPECIFICATION, 0); }
		public TerminalNode PITCH_SPECIFICATION_VALUE() { return getToken(MotorMusicParser.PITCH_SPECIFICATION_VALUE, 0); }
		public PitchSpecificationStatementContext(Pitch_specification_statementContext ctx) { copyFrom(ctx); }
	}

	public final Pitch_specification_statementContext pitch_specification_statement() throws RecognitionException {
		Pitch_specification_statementContext _localctx = new Pitch_specification_statementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_pitch_specification_statement);
		try {
			_localctx = new PitchSpecificationStatementContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(PITCH_SPECIFICATION);
			setState(23);
			((PitchSpecificationStatementContext)_localctx).p = match(PITCH_SPECIFICATION_VALUE);
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
		enterRule(_localctx, 4, RULE_raised_gesture_list);
		try {
			setState(29);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				_localctx = new RaisedSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(25);
				((RaisedSingleContext)_localctx).top = gesture();
				}
				break;
			case 2:
				_localctx = new RaisedMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(26);
				((RaisedMultiContext)_localctx).top = gesture();
				setState(27);
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
		enterRule(_localctx, 6, RULE_motion_spec_list);
		try {
			setState(53);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new SingleMotionSpecDownContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(31);
				((SingleMotionSpecDownContext)_localctx).top = raised_gesture_list();
				setState(32);
				match(DOT);
				}
				break;
			case 2:
				_localctx = new SingleMotionSpecUpContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				((SingleMotionSpecUpContext)_localctx).top = raised_gesture_list();
				setState(35);
				match(CARROT);
				}
				break;
			case 3:
				_localctx = new TowardsPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(37);
				((TowardsPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(38);
				match(DOT);
				setState(39);
				((TowardsPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 4:
				_localctx = new AwayPrefixMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
				((AwayPrefixMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(42);
				match(CARROT);
				setState(43);
				((AwayPrefixMotionSpecContext)_localctx).rest = motion_spec_list();
				}
				break;
			case 5:
				_localctx = new EndAwayFromMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(45);
				((EndAwayFromMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(46);
				match(DOT);
				setState(47);
				((EndAwayFromMotionSpecContext)_localctx).rest = raised_gesture_list();
				}
				break;
			case 6:
				_localctx = new EndTowardsMotionSpecContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(49);
				((EndTowardsMotionSpecContext)_localctx).top = raised_gesture_list();
				setState(50);
				match(CARROT);
				setState(51);
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
		enterRule(_localctx, 8, RULE_syllable_group);
		try {
			setState(59);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new SyllableGroupSingleContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				((SyllableGroupSingleContext)_localctx).syllable = match(SYLLABLE);
				}
				break;
			case 2:
				_localctx = new SyllableGroupMultiContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(56);
				((SyllableGroupMultiContext)_localctx).top = match(SYLLABLE);
				setState(57);
				match(AMPERSAND);
				setState(58);
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

	public final GestureContext gesture() throws RecognitionException {
		GestureContext _localctx = new GestureContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_gesture);
		try {
			setState(71);
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
				((TimeTaggedEmptyContext)_localctx).number = match(NUMBER);
				setState(63);
				match(UNDERSCORE);
				}
				break;
			case 3:
				_localctx = new SyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(64);
				((SyllableGroupContext)_localctx).syllables = syllable_group();
				}
				break;
			case 4:
				_localctx = new TimeTaggedSyllableGroupContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(65);
				((TimeTaggedSyllableGroupContext)_localctx).number = match(NUMBER);
				setState(66);
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
		"\u0004\u0001\u0013J\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u0015\b\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u0002\u001e\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u00036\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0003\u0004<\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0003\u0005H\b\u0005\u0001\u0005\u0000\u0000\u0006\u0000\u0002"+
		"\u0004\u0006\b\n\u0000\u0000P\u0000\u0014\u0001\u0000\u0000\u0000\u0002"+
		"\u0016\u0001\u0000\u0000\u0000\u0004\u001d\u0001\u0000\u0000\u0000\u0006"+
		"5\u0001\u0000\u0000\u0000\b;\u0001\u0000\u0000\u0000\nG\u0001\u0000\u0000"+
		"\u0000\f\u0015\u0005\u0000\u0000\u0001\r\u000e\u0003\n\u0005\u0000\u000e"+
		"\u000f\u0005\u0000\u0000\u0001\u000f\u0015\u0001\u0000\u0000\u0000\u0010"+
		"\u0011\u0003\u0002\u0001\u0000\u0011\u0012\u0003\n\u0005\u0000\u0012\u0013"+
		"\u0005\u0000\u0000\u0001\u0013\u0015\u0001\u0000\u0000\u0000\u0014\f\u0001"+
		"\u0000\u0000\u0000\u0014\r\u0001\u0000\u0000\u0000\u0014\u0010\u0001\u0000"+
		"\u0000\u0000\u0015\u0001\u0001\u0000\u0000\u0000\u0016\u0017\u0005\u0010"+
		"\u0000\u0000\u0017\u0018\u0005\u0012\u0000\u0000\u0018\u0003\u0001\u0000"+
		"\u0000\u0000\u0019\u001e\u0003\n\u0005\u0000\u001a\u001b\u0003\n\u0005"+
		"\u0000\u001b\u001c\u0003\u0004\u0002\u0000\u001c\u001e\u0001\u0000\u0000"+
		"\u0000\u001d\u0019\u0001\u0000\u0000\u0000\u001d\u001a\u0001\u0000\u0000"+
		"\u0000\u001e\u0005\u0001\u0000\u0000\u0000\u001f \u0003\u0004\u0002\u0000"+
		" !\u0005\r\u0000\u0000!6\u0001\u0000\u0000\u0000\"#\u0003\u0004\u0002"+
		"\u0000#$\u0005\u000e\u0000\u0000$6\u0001\u0000\u0000\u0000%&\u0003\u0004"+
		"\u0002\u0000&\'\u0005\r\u0000\u0000\'(\u0003\u0006\u0003\u0000(6\u0001"+
		"\u0000\u0000\u0000)*\u0003\u0004\u0002\u0000*+\u0005\u000e\u0000\u0000"+
		"+,\u0003\u0006\u0003\u0000,6\u0001\u0000\u0000\u0000-.\u0003\u0004\u0002"+
		"\u0000./\u0005\r\u0000\u0000/0\u0003\u0004\u0002\u000006\u0001\u0000\u0000"+
		"\u000012\u0003\u0004\u0002\u000023\u0005\u000e\u0000\u000034\u0003\u0004"+
		"\u0002\u000046\u0001\u0000\u0000\u00005\u001f\u0001\u0000\u0000\u0000"+
		"5\"\u0001\u0000\u0000\u00005%\u0001\u0000\u0000\u00005)\u0001\u0000\u0000"+
		"\u00005-\u0001\u0000\u0000\u000051\u0001\u0000\u0000\u00006\u0007\u0001"+
		"\u0000\u0000\u00007<\u0005\u0002\u0000\u000089\u0005\u0002\u0000\u0000"+
		"9:\u0005\u000f\u0000\u0000:<\u0003\b\u0004\u0000;7\u0001\u0000\u0000\u0000"+
		";8\u0001\u0000\u0000\u0000<\t\u0001\u0000\u0000\u0000=H\u0005\f\u0000"+
		"\u0000>?\u0005\u0003\u0000\u0000?H\u0005\f\u0000\u0000@H\u0003\b\u0004"+
		"\u0000AB\u0005\u0003\u0000\u0000BH\u0003\b\u0004\u0000CD\u0005\u0006\u0000"+
		"\u0000DE\u0003\u0006\u0003\u0000EF\u0005\u0007\u0000\u0000FH\u0001\u0000"+
		"\u0000\u0000G=\u0001\u0000\u0000\u0000G>\u0001\u0000\u0000\u0000G@\u0001"+
		"\u0000\u0000\u0000GA\u0001\u0000\u0000\u0000GC\u0001\u0000\u0000\u0000"+
		"H\u000b\u0001\u0000\u0000\u0000\u0005\u0014\u001d5;G";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}