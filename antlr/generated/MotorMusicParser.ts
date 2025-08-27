// Generated from MotorMusicParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MotorMusicParserListener from "./MotorMusicParserListener.js";
import MotorMusicParserVisitor from "./MotorMusicParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MotorMusicParser extends Parser {
	public static readonly WS = 1;
	public static readonly FN = 2;
	public static readonly IDENT = 3;
	public static readonly NUMBER = 4;
	public static readonly LCURLY = 5;
	public static readonly RCURLY = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LANGLE = 9;
	public static readonly RANGLE = 10;
	public static readonly LSQBRACKET = 11;
	public static readonly RSQBRACKET = 12;
	public static readonly UNDERSCORE = 13;
	public static readonly DOT = 14;
	public static readonly CARROT = 15;
	public static readonly AMPERSAND = 16;
	public static readonly MID = 17;
	public static readonly EQUALS = 18;
	public static readonly COLON = 19;
	public static readonly DASH = 20;
	public static readonly COMMA = 21;
	public static readonly SEMICOLON = 22;
	public static readonly EXCLAMATION = 23;
	public static readonly UNRECOGNIZED = 24;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_raised_gesture_list = 1;
	public static readonly RULE_motion_spec_list = 2;
	public static readonly RULE_syllable_group = 3;
	public static readonly RULE_gesture = 4;
	public static readonly RULE_type = 5;
	public static readonly RULE_exp = 6;
	public static readonly RULE_exp_or_gesture = 7;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'fn'", null, 
                                                            null, "'{'", 
                                                            "'}'", "'('", 
                                                            "')'", "'<'", 
                                                            "'>'", "'['", 
                                                            "']'", "'_'", 
                                                            "'.'", "'^'", 
                                                            "'&'", "'|'", 
                                                            "'='", "':'", 
                                                            "'-'", "','", 
                                                            "';'", "'!'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "FN", "IDENT", 
                                                             "NUMBER", "LCURLY", 
                                                             "RCURLY", "LPAREN", 
                                                             "RPAREN", "LANGLE", 
                                                             "RANGLE", "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "UNDERSCORE", 
                                                             "DOT", "CARROT", 
                                                             "AMPERSAND", 
                                                             "MID", "EQUALS", 
                                                             "COLON", "DASH", 
                                                             "COMMA", "SEMICOLON", 
                                                             "EXCLAMATION", 
                                                             "UNRECOGNIZED" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "raised_gesture_list", "motion_spec_list", "syllable_group", 
		"gesture", "type", "exp", "exp_or_gesture",
	];
	public get grammarFileName(): string { return "MotorMusicParser.g4"; }
	public get literalNames(): (string | null)[] { return MotorMusicParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MotorMusicParser.symbolicNames; }
	public get ruleNames(): string[] { return MotorMusicParser.ruleNames; }
	public get serializedATN(): number[] { return MotorMusicParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MotorMusicParser._ATN, MotorMusicParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MotorMusicParser.RULE_compilationUnit);
		try {
			this.state = 20;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
				localctx = new EmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 16;
				this.match(MotorMusicParser.EOF);
				}
				break;
			case 2:
			case 3:
			case 4:
			case 7:
			case 13:
				localctx = new NonEmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 17;
				(localctx as NonEmptyProgramContext)._p = this.exp_or_gesture();
				this.state = 18;
				this.match(MotorMusicParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public raised_gesture_list(): Raised_gesture_listContext {
		let localctx: Raised_gesture_listContext = new Raised_gesture_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MotorMusicParser.RULE_raised_gesture_list);
		try {
			this.state = 26;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new RaisedSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 22;
				(localctx as RaisedSingleContext)._top = this.gesture();
				}
				break;
			case 2:
				localctx = new RaisedMultiContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 23;
				(localctx as RaisedMultiContext)._top = this.gesture();
				this.state = 24;
				(localctx as RaisedMultiContext)._rest = this.raised_gesture_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public motion_spec_list(): Motion_spec_listContext {
		let localctx: Motion_spec_listContext = new Motion_spec_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MotorMusicParser.RULE_motion_spec_list);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new SingleMotionSpecDownContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 28;
				(localctx as SingleMotionSpecDownContext)._top = this.raised_gesture_list();
				this.state = 29;
				this.match(MotorMusicParser.DOT);
				}
				break;
			case 2:
				localctx = new SingleMotionSpecUpContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 31;
				(localctx as SingleMotionSpecUpContext)._top = this.raised_gesture_list();
				this.state = 32;
				this.match(MotorMusicParser.CARROT);
				}
				break;
			case 3:
				localctx = new TowardsPrefixMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 34;
				(localctx as TowardsPrefixMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 35;
				this.match(MotorMusicParser.DOT);
				this.state = 36;
				(localctx as TowardsPrefixMotionSpecContext)._rest = this.motion_spec_list();
				}
				break;
			case 4:
				localctx = new AwayPrefixMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 38;
				(localctx as AwayPrefixMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 39;
				this.match(MotorMusicParser.CARROT);
				this.state = 40;
				(localctx as AwayPrefixMotionSpecContext)._rest = this.motion_spec_list();
				}
				break;
			case 5:
				localctx = new EndAwayFromMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 42;
				(localctx as EndAwayFromMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 43;
				this.match(MotorMusicParser.DOT);
				this.state = 44;
				(localctx as EndAwayFromMotionSpecContext)._rest = this.raised_gesture_list();
				}
				break;
			case 6:
				localctx = new EndTowardsMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 46;
				(localctx as EndTowardsMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 47;
				this.match(MotorMusicParser.CARROT);
				this.state = 48;
				(localctx as EndTowardsMotionSpecContext)._rest = this.raised_gesture_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public syllable_group(): Syllable_groupContext {
		let localctx: Syllable_groupContext = new Syllable_groupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MotorMusicParser.RULE_syllable_group);
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new SyllableGroupSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 52;
				(localctx as SyllableGroupSingleContext)._syllable = this.exp(0);
				}
				break;
			case 2:
				localctx = new SyllableGroupMultiContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 53;
				(localctx as SyllableGroupMultiContext)._top = this.exp(0);
				this.state = 54;
				this.match(MotorMusicParser.AMPERSAND);
				this.state = 55;
				(localctx as SyllableGroupMultiContext)._rest = this.syllable_group();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gesture(): GestureContext {
		let localctx: GestureContext = new GestureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MotorMusicParser.RULE_gesture);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				localctx = new EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 59;
				this.match(MotorMusicParser.UNDERSCORE);
				}
				break;
			case 2:
				localctx = new TimeTaggedEmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 60;
				(localctx as TimeTaggedEmptyContext)._number_ = this.exp(0);
				this.state = 61;
				this.match(MotorMusicParser.UNDERSCORE);
				}
				break;
			case 3:
				localctx = new SyllableGroupContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
				(localctx as SyllableGroupContext)._syllables = this.syllable_group();
				}
				break;
			case 4:
				localctx = new TimeTaggedSyllableGroupContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 64;
				(localctx as TimeTaggedSyllableGroupContext)._number_ = this.exp(0);
				this.state = 65;
				(localctx as TimeTaggedSyllableGroupContext)._syllables = this.syllable_group();
				}
				break;
			case 5:
				localctx = new DirectionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 67;
				this.match(MotorMusicParser.LPAREN);
				this.state = 68;
				(localctx as DirectionSpecContext)._motion_spec = this.motion_spec_list();
				this.state = 69;
				this.match(MotorMusicParser.RPAREN);
				}
				break;
			case 6:
				localctx = new ContainmentContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 71;
				(localctx as ContainmentContext)._syllables = this.syllable_group();
				this.state = 72;
				this.match(MotorMusicParser.LCURLY);
				this.state = 73;
				(localctx as ContainmentContext)._motion_spec = this.motion_spec_list();
				this.state = 74;
				this.match(MotorMusicParser.RCURLY);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public type_(): TypeContext;
	public type_(_p: number): TypeContext;
	// @RuleVersion(0)
	public type_(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypeContext = new TypeContext(this, this._ctx, _parentState);
		let _prevctx: TypeContext = localctx;
		let _startState: number = 10;
		this.enterRecursionRule(localctx, 10, MotorMusicParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new BuiltInContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 79;
			(localctx as BuiltInContext)._builtin = this.match(MotorMusicParser.IDENT);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 87;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new FunctionTypeContext(this, new TypeContext(this, _parentctx, _parentState));
					(localctx as FunctionTypeContext)._inType = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MotorMusicParser.RULE_type);
					this.state = 81;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 82;
					this.match(MotorMusicParser.DASH);
					this.state = 83;
					this.match(MotorMusicParser.RANGLE);
					this.state = 84;
					(localctx as FunctionTypeContext)._outType = this.type_(2);
					}
					}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpContext = new ExpContext(this, this._ctx, _parentState);
		let _prevctx: ExpContext = localctx;
		let _startState: number = 12;
		this.enterRecursionRule(localctx, 12, MotorMusicParser.RULE_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				localctx = new IdentExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 91;
				(localctx as IdentExpContext)._symbol_ = this.match(MotorMusicParser.IDENT);
				}
				break;
			case 2:
				{
				localctx = new NumberExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 92;
				(localctx as NumberExpContext)._number_ = this.match(MotorMusicParser.NUMBER);
				}
				break;
			case 3:
				{
				localctx = new DeclContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 93;
				this.match(MotorMusicParser.FN);
				this.state = 94;
				(localctx as DeclContext)._decl_name = this.match(MotorMusicParser.IDENT);
				this.state = 95;
				this.match(MotorMusicParser.LPAREN);
				this.state = 96;
				(localctx as DeclContext)._argName = this.match(MotorMusicParser.IDENT);
				this.state = 97;
				this.match(MotorMusicParser.COLON);
				this.state = 98;
				(localctx as DeclContext)._inTyp = this.type_(0);
				this.state = 99;
				this.match(MotorMusicParser.RPAREN);
				this.state = 100;
				this.match(MotorMusicParser.COLON);
				this.state = 101;
				(localctx as DeclContext)._outType = this.type_(0);
				this.state = 102;
				this.match(MotorMusicParser.EQUALS);
				this.state = 103;
				this.match(MotorMusicParser.RANGLE);
				this.state = 104;
				(localctx as DeclContext)._out = this.exp_or_gesture();
				this.state = 105;
				this.match(MotorMusicParser.SEMICOLON);
				this.state = 106;
				(localctx as DeclContext)._in_ = this.exp_or_gesture();
				}
				break;
			case 4:
				{
				localctx = new AnomDeclContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 108;
				this.match(MotorMusicParser.FN);
				this.state = 109;
				this.match(MotorMusicParser.LPAREN);
				this.state = 110;
				(localctx as AnomDeclContext)._arg = this.match(MotorMusicParser.IDENT);
				this.state = 111;
				this.match(MotorMusicParser.COLON);
				this.state = 112;
				(localctx as AnomDeclContext)._inTyp = this.type_(0);
				this.state = 113;
				this.match(MotorMusicParser.RPAREN);
				this.state = 114;
				this.match(MotorMusicParser.COLON);
				this.state = 115;
				(localctx as AnomDeclContext)._outType = this.type_(0);
				this.state = 116;
				this.match(MotorMusicParser.EQUALS);
				this.state = 117;
				this.match(MotorMusicParser.RANGLE);
				this.state = 118;
				(localctx as AnomDeclContext)._out = this.exp_or_gesture();
				}
				break;
			case 5:
				{
				localctx = new WrappedExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 120;
				this.match(MotorMusicParser.LPAREN);
				this.state = 121;
				(localctx as WrappedExpContext)._within = this.exp_or_gesture();
				this.state = 122;
				this.match(MotorMusicParser.RPAREN);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 133;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new EvalContext(this, new ExpContext(this, _parentctx, _parentState));
					(localctx as EvalContext)._func = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MotorMusicParser.RULE_exp);
					this.state = 126;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 127;
					this.match(MotorMusicParser.LPAREN);
					this.state = 128;
					(localctx as EvalContext)._arg = this.exp_or_gesture();
					this.state = 129;
					this.match(MotorMusicParser.RPAREN);
					}
					}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exp_or_gesture(): Exp_or_gestureContext {
		let localctx: Exp_or_gestureContext = new Exp_or_gestureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MotorMusicParser.RULE_exp_or_gesture);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				localctx = new ExpExpOrGestureContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 136;
				(localctx as ExpExpOrGestureContext)._e = this.exp(0);
				}
				break;
			case 2:
				localctx = new GestureExpOrGestureContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 137;
				(localctx as GestureExpOrGestureContext)._g = this.gesture();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.type_sempred(localctx as TypeContext, predIndex);
		case 6:
			return this.exp_sempred(localctx as ExpContext, predIndex);
		}
		return true;
	}
	private type_sempred(localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exp_sempred(localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,24,141,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,3,
	0,21,8,0,1,1,1,1,1,1,1,1,3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,51,8,2,1,3,1,3,
	1,3,1,3,1,3,3,3,58,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,3,4,77,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,86,8,5,10,
	5,12,5,89,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,3,6,125,8,6,1,6,1,6,1,6,1,6,1,6,5,6,132,8,6,10,6,12,6,135,9,6,1,7,
	1,7,3,7,139,8,7,1,7,0,2,10,12,8,0,2,4,6,8,10,12,14,0,0,152,0,20,1,0,0,0,
	2,26,1,0,0,0,4,50,1,0,0,0,6,57,1,0,0,0,8,76,1,0,0,0,10,78,1,0,0,0,12,124,
	1,0,0,0,14,138,1,0,0,0,16,21,5,0,0,1,17,18,3,14,7,0,18,19,5,0,0,1,19,21,
	1,0,0,0,20,16,1,0,0,0,20,17,1,0,0,0,21,1,1,0,0,0,22,27,3,8,4,0,23,24,3,
	8,4,0,24,25,3,2,1,0,25,27,1,0,0,0,26,22,1,0,0,0,26,23,1,0,0,0,27,3,1,0,
	0,0,28,29,3,2,1,0,29,30,5,14,0,0,30,51,1,0,0,0,31,32,3,2,1,0,32,33,5,15,
	0,0,33,51,1,0,0,0,34,35,3,2,1,0,35,36,5,14,0,0,36,37,3,4,2,0,37,51,1,0,
	0,0,38,39,3,2,1,0,39,40,5,15,0,0,40,41,3,4,2,0,41,51,1,0,0,0,42,43,3,2,
	1,0,43,44,5,14,0,0,44,45,3,2,1,0,45,51,1,0,0,0,46,47,3,2,1,0,47,48,5,15,
	0,0,48,49,3,2,1,0,49,51,1,0,0,0,50,28,1,0,0,0,50,31,1,0,0,0,50,34,1,0,0,
	0,50,38,1,0,0,0,50,42,1,0,0,0,50,46,1,0,0,0,51,5,1,0,0,0,52,58,3,12,6,0,
	53,54,3,12,6,0,54,55,5,16,0,0,55,56,3,6,3,0,56,58,1,0,0,0,57,52,1,0,0,0,
	57,53,1,0,0,0,58,7,1,0,0,0,59,77,5,13,0,0,60,61,3,12,6,0,61,62,5,13,0,0,
	62,77,1,0,0,0,63,77,3,6,3,0,64,65,3,12,6,0,65,66,3,6,3,0,66,77,1,0,0,0,
	67,68,5,7,0,0,68,69,3,4,2,0,69,70,5,8,0,0,70,77,1,0,0,0,71,72,3,6,3,0,72,
	73,5,5,0,0,73,74,3,4,2,0,74,75,5,6,0,0,75,77,1,0,0,0,76,59,1,0,0,0,76,60,
	1,0,0,0,76,63,1,0,0,0,76,64,1,0,0,0,76,67,1,0,0,0,76,71,1,0,0,0,77,9,1,
	0,0,0,78,79,6,5,-1,0,79,80,5,3,0,0,80,87,1,0,0,0,81,82,10,1,0,0,82,83,5,
	20,0,0,83,84,5,10,0,0,84,86,3,10,5,2,85,81,1,0,0,0,86,89,1,0,0,0,87,85,
	1,0,0,0,87,88,1,0,0,0,88,11,1,0,0,0,89,87,1,0,0,0,90,91,6,6,-1,0,91,125,
	5,3,0,0,92,125,5,4,0,0,93,94,5,2,0,0,94,95,5,3,0,0,95,96,5,7,0,0,96,97,
	5,3,0,0,97,98,5,19,0,0,98,99,3,10,5,0,99,100,5,8,0,0,100,101,5,19,0,0,101,
	102,3,10,5,0,102,103,5,18,0,0,103,104,5,10,0,0,104,105,3,14,7,0,105,106,
	5,22,0,0,106,107,3,14,7,0,107,125,1,0,0,0,108,109,5,2,0,0,109,110,5,7,0,
	0,110,111,5,3,0,0,111,112,5,19,0,0,112,113,3,10,5,0,113,114,5,8,0,0,114,
	115,5,19,0,0,115,116,3,10,5,0,116,117,5,18,0,0,117,118,5,10,0,0,118,119,
	3,14,7,0,119,125,1,0,0,0,120,121,5,7,0,0,121,122,3,14,7,0,122,123,5,8,0,
	0,123,125,1,0,0,0,124,90,1,0,0,0,124,92,1,0,0,0,124,93,1,0,0,0,124,108,
	1,0,0,0,124,120,1,0,0,0,125,133,1,0,0,0,126,127,10,4,0,0,127,128,5,7,0,
	0,128,129,3,14,7,0,129,130,5,8,0,0,130,132,1,0,0,0,131,126,1,0,0,0,132,
	135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,13,1,0,0,0,135,133,1,0,
	0,0,136,139,3,12,6,0,137,139,3,8,4,0,138,136,1,0,0,0,138,137,1,0,0,0,139,
	15,1,0,0,0,9,20,26,50,57,76,87,124,133,138];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicParser.__ATN) {
			MotorMusicParser.__ATN = new ATNDeserializer().deserialize(MotorMusicParser._serializedATN);
		}

		return MotorMusicParser.__ATN;
	}


	static DecisionsToDFA = MotorMusicParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_compilationUnit;
	}
	public copyFrom(ctx: CompilationUnitContext): void {
		super.copyFrom(ctx);
	}
}
export class NonEmptyProgramContext extends CompilationUnitContext {
	public _p!: Exp_or_gestureContext;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public exp_or_gesture(): Exp_or_gestureContext {
		return this.getTypedRuleContext(Exp_or_gestureContext, 0) as Exp_or_gestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterNonEmptyProgram) {
	 		listener.enterNonEmptyProgram(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitNonEmptyProgram) {
	 		listener.exitNonEmptyProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitNonEmptyProgram) {
			return visitor.visitNonEmptyProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyProgramContext extends CompilationUnitContext {
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterEmptyProgram) {
	 		listener.enterEmptyProgram(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitEmptyProgram) {
	 		listener.exitEmptyProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitEmptyProgram) {
			return visitor.visitEmptyProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raised_gesture_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_raised_gesture_list;
	}
	public copyFrom(ctx: Raised_gesture_listContext): void {
		super.copyFrom(ctx);
	}
}
export class RaisedMultiContext extends Raised_gesture_listContext {
	public _top!: GestureContext;
	public _rest!: Raised_gesture_listContext;
	constructor(parser: MotorMusicParser, ctx: Raised_gesture_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public gesture(): GestureContext {
		return this.getTypedRuleContext(GestureContext, 0) as GestureContext;
	}
	public raised_gesture_list(): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, 0) as Raised_gesture_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterRaisedMulti) {
	 		listener.enterRaisedMulti(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitRaisedMulti) {
	 		listener.exitRaisedMulti(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitRaisedMulti) {
			return visitor.visitRaisedMulti(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RaisedSingleContext extends Raised_gesture_listContext {
	public _top!: GestureContext;
	constructor(parser: MotorMusicParser, ctx: Raised_gesture_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public gesture(): GestureContext {
		return this.getTypedRuleContext(GestureContext, 0) as GestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterRaisedSingle) {
	 		listener.enterRaisedSingle(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitRaisedSingle) {
	 		listener.exitRaisedSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitRaisedSingle) {
			return visitor.visitRaisedSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Motion_spec_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_motion_spec_list;
	}
	public copyFrom(ctx: Motion_spec_listContext): void {
		super.copyFrom(ctx);
	}
}
export class AwayPrefixMotionSpecContext extends Motion_spec_listContext {
	public _top!: Raised_gesture_listContext;
	public _rest!: Motion_spec_listContext;
	constructor(parser: MotorMusicParser, ctx: Motion_spec_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CARROT(): TerminalNode {
		return this.getToken(MotorMusicParser.CARROT, 0);
	}
	public raised_gesture_list(): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, 0) as Raised_gesture_listContext;
	}
	public motion_spec_list(): Motion_spec_listContext {
		return this.getTypedRuleContext(Motion_spec_listContext, 0) as Motion_spec_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterAwayPrefixMotionSpec) {
	 		listener.enterAwayPrefixMotionSpec(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitAwayPrefixMotionSpec) {
	 		listener.exitAwayPrefixMotionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitAwayPrefixMotionSpec) {
			return visitor.visitAwayPrefixMotionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EndTowardsMotionSpecContext extends Motion_spec_listContext {
	public _top!: Raised_gesture_listContext;
	public _rest!: Raised_gesture_listContext;
	constructor(parser: MotorMusicParser, ctx: Motion_spec_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CARROT(): TerminalNode {
		return this.getToken(MotorMusicParser.CARROT, 0);
	}
	public raised_gesture_list_list(): Raised_gesture_listContext[] {
		return this.getTypedRuleContexts(Raised_gesture_listContext) as Raised_gesture_listContext[];
	}
	public raised_gesture_list(i: number): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, i) as Raised_gesture_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterEndTowardsMotionSpec) {
	 		listener.enterEndTowardsMotionSpec(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitEndTowardsMotionSpec) {
	 		listener.exitEndTowardsMotionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitEndTowardsMotionSpec) {
			return visitor.visitEndTowardsMotionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleMotionSpecUpContext extends Motion_spec_listContext {
	public _top!: Raised_gesture_listContext;
	constructor(parser: MotorMusicParser, ctx: Motion_spec_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CARROT(): TerminalNode {
		return this.getToken(MotorMusicParser.CARROT, 0);
	}
	public raised_gesture_list(): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, 0) as Raised_gesture_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSingleMotionSpecUp) {
	 		listener.enterSingleMotionSpecUp(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSingleMotionSpecUp) {
	 		listener.exitSingleMotionSpecUp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitSingleMotionSpecUp) {
			return visitor.visitSingleMotionSpecUp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleMotionSpecDownContext extends Motion_spec_listContext {
	public _top!: Raised_gesture_listContext;
	constructor(parser: MotorMusicParser, ctx: Motion_spec_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MotorMusicParser.DOT, 0);
	}
	public raised_gesture_list(): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, 0) as Raised_gesture_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSingleMotionSpecDown) {
	 		listener.enterSingleMotionSpecDown(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSingleMotionSpecDown) {
	 		listener.exitSingleMotionSpecDown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitSingleMotionSpecDown) {
			return visitor.visitSingleMotionSpecDown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TowardsPrefixMotionSpecContext extends Motion_spec_listContext {
	public _top!: Raised_gesture_listContext;
	public _rest!: Motion_spec_listContext;
	constructor(parser: MotorMusicParser, ctx: Motion_spec_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MotorMusicParser.DOT, 0);
	}
	public raised_gesture_list(): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, 0) as Raised_gesture_listContext;
	}
	public motion_spec_list(): Motion_spec_listContext {
		return this.getTypedRuleContext(Motion_spec_listContext, 0) as Motion_spec_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterTowardsPrefixMotionSpec) {
	 		listener.enterTowardsPrefixMotionSpec(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitTowardsPrefixMotionSpec) {
	 		listener.exitTowardsPrefixMotionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitTowardsPrefixMotionSpec) {
			return visitor.visitTowardsPrefixMotionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EndAwayFromMotionSpecContext extends Motion_spec_listContext {
	public _top!: Raised_gesture_listContext;
	public _rest!: Raised_gesture_listContext;
	constructor(parser: MotorMusicParser, ctx: Motion_spec_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MotorMusicParser.DOT, 0);
	}
	public raised_gesture_list_list(): Raised_gesture_listContext[] {
		return this.getTypedRuleContexts(Raised_gesture_listContext) as Raised_gesture_listContext[];
	}
	public raised_gesture_list(i: number): Raised_gesture_listContext {
		return this.getTypedRuleContext(Raised_gesture_listContext, i) as Raised_gesture_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterEndAwayFromMotionSpec) {
	 		listener.enterEndAwayFromMotionSpec(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitEndAwayFromMotionSpec) {
	 		listener.exitEndAwayFromMotionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitEndAwayFromMotionSpec) {
			return visitor.visitEndAwayFromMotionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Syllable_groupContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_syllable_group;
	}
	public copyFrom(ctx: Syllable_groupContext): void {
		super.copyFrom(ctx);
	}
}
export class SyllableGroupSingleContext extends Syllable_groupContext {
	public _syllable!: ExpContext;
	constructor(parser: MotorMusicParser, ctx: Syllable_groupContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSyllableGroupSingle) {
	 		listener.enterSyllableGroupSingle(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSyllableGroupSingle) {
	 		listener.exitSyllableGroupSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitSyllableGroupSingle) {
			return visitor.visitSyllableGroupSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SyllableGroupMultiContext extends Syllable_groupContext {
	public _top!: ExpContext;
	public _rest!: Syllable_groupContext;
	constructor(parser: MotorMusicParser, ctx: Syllable_groupContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(MotorMusicParser.AMPERSAND, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public syllable_group(): Syllable_groupContext {
		return this.getTypedRuleContext(Syllable_groupContext, 0) as Syllable_groupContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSyllableGroupMulti) {
	 		listener.enterSyllableGroupMulti(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSyllableGroupMulti) {
	 		listener.exitSyllableGroupMulti(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitSyllableGroupMulti) {
			return visitor.visitSyllableGroupMulti(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GestureContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_gesture;
	}
	public copyFrom(ctx: GestureContext): void {
		super.copyFrom(ctx);
	}
}
export class EmptyContext extends GestureContext {
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(MotorMusicParser.UNDERSCORE, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterEmpty) {
	 		listener.enterEmpty(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitEmpty) {
	 		listener.exitEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitEmpty) {
			return visitor.visitEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DirectionSpecContext extends GestureContext {
	public _motion_spec!: Motion_spec_listContext;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public motion_spec_list(): Motion_spec_listContext {
		return this.getTypedRuleContext(Motion_spec_listContext, 0) as Motion_spec_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterDirectionSpec) {
	 		listener.enterDirectionSpec(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitDirectionSpec) {
	 		listener.exitDirectionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitDirectionSpec) {
			return visitor.visitDirectionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeTaggedEmptyContext extends GestureContext {
	public _number_!: ExpContext;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(MotorMusicParser.UNDERSCORE, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterTimeTaggedEmpty) {
	 		listener.enterTimeTaggedEmpty(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitTimeTaggedEmpty) {
	 		listener.exitTimeTaggedEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitTimeTaggedEmpty) {
			return visitor.visitTimeTaggedEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SyllableGroupContext extends GestureContext {
	public _syllables!: Syllable_groupContext;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public syllable_group(): Syllable_groupContext {
		return this.getTypedRuleContext(Syllable_groupContext, 0) as Syllable_groupContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSyllableGroup) {
	 		listener.enterSyllableGroup(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSyllableGroup) {
	 		listener.exitSyllableGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitSyllableGroup) {
			return visitor.visitSyllableGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeTaggedSyllableGroupContext extends GestureContext {
	public _number_!: ExpContext;
	public _syllables!: Syllable_groupContext;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public syllable_group(): Syllable_groupContext {
		return this.getTypedRuleContext(Syllable_groupContext, 0) as Syllable_groupContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterTimeTaggedSyllableGroup) {
	 		listener.enterTimeTaggedSyllableGroup(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitTimeTaggedSyllableGroup) {
	 		listener.exitTimeTaggedSyllableGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitTimeTaggedSyllableGroup) {
			return visitor.visitTimeTaggedSyllableGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContainmentContext extends GestureContext {
	public _syllables!: Syllable_groupContext;
	public _motion_spec!: Motion_spec_listContext;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.RCURLY, 0);
	}
	public syllable_group(): Syllable_groupContext {
		return this.getTypedRuleContext(Syllable_groupContext, 0) as Syllable_groupContext;
	}
	public motion_spec_list(): Motion_spec_listContext {
		return this.getTypedRuleContext(Motion_spec_listContext, 0) as Motion_spec_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterContainment) {
	 		listener.enterContainment(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitContainment) {
	 		listener.exitContainment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitContainment) {
			return visitor.visitContainment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_type;
	}
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public _inType!: TypeContext;
	public _outType!: TypeContext;
	constructor(parser: MotorMusicParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DASH(): TerminalNode {
		return this.getToken(MotorMusicParser.DASH, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParser.RANGLE, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterFunctionType) {
	 		listener.enterFunctionType(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitFunctionType) {
	 		listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BuiltInContext extends TypeContext {
	public _builtin!: Token;
	constructor(parser: MotorMusicParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParser.IDENT, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterBuiltIn) {
	 		listener.enterBuiltIn(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitBuiltIn) {
	 		listener.exitBuiltIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitBuiltIn) {
			return visitor.visitBuiltIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_exp;
	}
	public copyFrom(ctx: ExpContext): void {
		super.copyFrom(ctx);
	}
}
export class AnomDeclContext extends ExpContext {
	public _arg!: Token;
	public _inTyp!: TypeContext;
	public _outType!: TypeContext;
	public _out!: Exp_or_gestureContext;
	constructor(parser: MotorMusicParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FN(): TerminalNode {
		return this.getToken(MotorMusicParser.FN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MotorMusicParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MotorMusicParser.COLON, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MotorMusicParser.EQUALS, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParser.RANGLE, 0);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParser.IDENT, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public exp_or_gesture(): Exp_or_gestureContext {
		return this.getTypedRuleContext(Exp_or_gestureContext, 0) as Exp_or_gestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterAnomDecl) {
	 		listener.enterAnomDecl(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitAnomDecl) {
	 		listener.exitAnomDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitAnomDecl) {
			return visitor.visitAnomDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclContext extends ExpContext {
	public _decl_name!: Token;
	public _argName!: Token;
	public _inTyp!: TypeContext;
	public _outType!: TypeContext;
	public _out!: Exp_or_gestureContext;
	public _in_!: Exp_or_gestureContext;
	constructor(parser: MotorMusicParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FN(): TerminalNode {
		return this.getToken(MotorMusicParser.FN, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MotorMusicParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MotorMusicParser.COLON, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(MotorMusicParser.EQUALS, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParser.RANGLE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MotorMusicParser.SEMICOLON, 0);
	}
	public IDENT_list(): TerminalNode[] {
	    	return this.getTokens(MotorMusicParser.IDENT);
	}
	public IDENT(i: number): TerminalNode {
		return this.getToken(MotorMusicParser.IDENT, i);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public exp_or_gesture_list(): Exp_or_gestureContext[] {
		return this.getTypedRuleContexts(Exp_or_gestureContext) as Exp_or_gestureContext[];
	}
	public exp_or_gesture(i: number): Exp_or_gestureContext {
		return this.getTypedRuleContext(Exp_or_gestureContext, i) as Exp_or_gestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterDecl) {
	 		listener.enterDecl(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitDecl) {
	 		listener.exitDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitDecl) {
			return visitor.visitDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpContext extends ExpContext {
	public _number_!: Token;
	constructor(parser: MotorMusicParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParser.NUMBER, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterNumberExp) {
	 		listener.enterNumberExp(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitNumberExp) {
	 		listener.exitNumberExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitNumberExp) {
			return visitor.visitNumberExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EvalContext extends ExpContext {
	public _func!: ExpContext;
	public _arg!: Exp_or_gestureContext;
	constructor(parser: MotorMusicParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public exp_or_gesture(): Exp_or_gestureContext {
		return this.getTypedRuleContext(Exp_or_gestureContext, 0) as Exp_or_gestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterEval) {
	 		listener.enterEval(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitEval) {
	 		listener.exitEval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitEval) {
			return visitor.visitEval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentExpContext extends ExpContext {
	public _symbol_!: Token;
	constructor(parser: MotorMusicParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParser.IDENT, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterIdentExp) {
	 		listener.enterIdentExp(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitIdentExp) {
	 		listener.exitIdentExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitIdentExp) {
			return visitor.visitIdentExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WrappedExpContext extends ExpContext {
	public _within!: Exp_or_gestureContext;
	constructor(parser: MotorMusicParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public exp_or_gesture(): Exp_or_gestureContext {
		return this.getTypedRuleContext(Exp_or_gestureContext, 0) as Exp_or_gestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterWrappedExp) {
	 		listener.enterWrappedExp(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitWrappedExp) {
	 		listener.exitWrappedExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitWrappedExp) {
			return visitor.visitWrappedExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exp_or_gestureContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_exp_or_gesture;
	}
	public copyFrom(ctx: Exp_or_gestureContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpExpOrGestureContext extends Exp_or_gestureContext {
	public _e!: ExpContext;
	constructor(parser: MotorMusicParser, ctx: Exp_or_gestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterExpExpOrGesture) {
	 		listener.enterExpExpOrGesture(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitExpExpOrGesture) {
	 		listener.exitExpExpOrGesture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitExpExpOrGesture) {
			return visitor.visitExpExpOrGesture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GestureExpOrGestureContext extends Exp_or_gestureContext {
	public _g!: GestureContext;
	constructor(parser: MotorMusicParser, ctx: Exp_or_gestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public gesture(): GestureContext {
		return this.getTypedRuleContext(GestureContext, 0) as GestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterGestureExpOrGesture) {
	 		listener.enterGestureExpOrGesture(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitGestureExpOrGesture) {
	 		listener.exitGestureExpOrGesture(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MotorMusicParserVisitor<Result>): Result {
		if (visitor.visitGestureExpOrGesture) {
			return visitor.visitGestureExpOrGesture(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
