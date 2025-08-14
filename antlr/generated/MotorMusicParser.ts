// Generated from ./MotorMusicParser.g4 by ANTLR 4.13.2
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
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MotorMusicParser extends Parser {
	public static readonly WS = 1;
	public static readonly SYLLABLE = 2;
	public static readonly NUMBER = 3;
	public static readonly LCURLY = 4;
	public static readonly RCURLY = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly LANGLE = 8;
	public static readonly RANGLE = 9;
	public static readonly LSQBRACKET = 10;
	public static readonly RSQBRACKET = 11;
	public static readonly UNDERSCORE = 12;
	public static readonly DOT = 13;
	public static readonly CARROT = 14;
	public static readonly UNRECOGNIZED = 15;
	public static readonly PITCH_SPECIFICATION = 16;
	public static readonly PITCH_SPECIFICATION_VALUE = 17;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_raised_gesture_list = 1;
	public static readonly RULE_motion_spec_list = 2;
	public static readonly RULE_gesture = 3;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "'<'", "'>'", 
                                                            "'['", "']'", 
                                                            "'_'", "'.'", 
                                                            "'^'", null, 
                                                            "'PITCH_SPECIFICATION:'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "SYLLABLE", 
                                                             "NUMBER", "LCURLY", 
                                                             "RCURLY", "LPAREN", 
                                                             "RPAREN", "LANGLE", 
                                                             "RANGLE", "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "UNDERSCORE", 
                                                             "DOT", "CARROT", 
                                                             "UNRECOGNIZED", 
                                                             "PITCH_SPECIFICATION", 
                                                             "PITCH_SPECIFICATION_VALUE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "raised_gesture_list", "motion_spec_list", "gesture",
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
			this.state = 17;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
				localctx = new EmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 8;
				(localctx as EmptyProgramContext)._e = this.match(MotorMusicParser.EOF);
				}
				break;
			case 2:
			case 3:
			case 6:
			case 12:
				localctx = new NonEmptyProgramWithDefaultPitchSpecificationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 9;
				(localctx as NonEmptyProgramWithDefaultPitchSpecificationContext)._e = this.gesture();
				this.state = 10;
				this.match(MotorMusicParser.EOF);
				}
				break;
			case 16:
				localctx = new NonEmptyProgramWithPitchSpecificationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 12;
				this.match(MotorMusicParser.PITCH_SPECIFICATION);
				this.state = 13;
				(localctx as NonEmptyProgramWithPitchSpecificationContext)._p = this.match(MotorMusicParser.PITCH_SPECIFICATION_VALUE);
				this.state = 14;
				(localctx as NonEmptyProgramWithPitchSpecificationContext)._e = this.gesture();
				this.state = 15;
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
			this.state = 23;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new RaisedSingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 19;
				(localctx as RaisedSingleContext)._top = this.gesture();
				}
				break;
			case 2:
				localctx = new RaisedMultiContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 20;
				(localctx as RaisedMultiContext)._top = this.gesture();
				this.state = 21;
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
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new SingleMotionSpecDownContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 25;
				(localctx as SingleMotionSpecDownContext)._top = this.raised_gesture_list();
				this.state = 26;
				this.match(MotorMusicParser.DOT);
				}
				break;
			case 2:
				localctx = new SingleMotionSpecUpContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 28;
				(localctx as SingleMotionSpecUpContext)._top = this.raised_gesture_list();
				this.state = 29;
				this.match(MotorMusicParser.CARROT);
				}
				break;
			case 3:
				localctx = new TowardsPrefixMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 31;
				(localctx as TowardsPrefixMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 32;
				this.match(MotorMusicParser.DOT);
				this.state = 33;
				(localctx as TowardsPrefixMotionSpecContext)._rest = this.motion_spec_list();
				}
				break;
			case 4:
				localctx = new AwayPrefixMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 35;
				(localctx as AwayPrefixMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 36;
				this.match(MotorMusicParser.CARROT);
				this.state = 37;
				(localctx as AwayPrefixMotionSpecContext)._rest = this.motion_spec_list();
				}
				break;
			case 5:
				localctx = new EndAwayFromMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 39;
				(localctx as EndAwayFromMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 40;
				this.match(MotorMusicParser.DOT);
				this.state = 41;
				(localctx as EndAwayFromMotionSpecContext)._rest = this.raised_gesture_list();
				}
				break;
			case 6:
				localctx = new EndTowardsMotionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 43;
				(localctx as EndTowardsMotionSpecContext)._top = this.raised_gesture_list();
				this.state = 44;
				this.match(MotorMusicParser.CARROT);
				this.state = 45;
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
	public gesture(): GestureContext {
		let localctx: GestureContext = new GestureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MotorMusicParser.RULE_gesture);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.match(MotorMusicParser.UNDERSCORE);
				}
				break;
			case 2:
				localctx = new TimeTaggedEmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 50;
				(localctx as TimeTaggedEmptyContext)._number_ = this.match(MotorMusicParser.NUMBER);
				this.state = 51;
				this.match(MotorMusicParser.UNDERSCORE);
				}
				break;
			case 3:
				localctx = new SyllableContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 52;
				(localctx as SyllableContext)._syllable = this.match(MotorMusicParser.SYLLABLE);
				}
				break;
			case 4:
				localctx = new TimeTaggedSyllableContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 53;
				(localctx as TimeTaggedSyllableContext)._number_ = this.match(MotorMusicParser.NUMBER);
				this.state = 54;
				(localctx as TimeTaggedSyllableContext)._syllable = this.match(MotorMusicParser.SYLLABLE);
				}
				break;
			case 5:
				localctx = new DirectionSpecContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 55;
				this.match(MotorMusicParser.LPAREN);
				this.state = 56;
				(localctx as DirectionSpecContext)._motion_spec = this.motion_spec_list();
				this.state = 57;
				this.match(MotorMusicParser.RPAREN);
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

	public static readonly _serializedATN: number[] = [4,1,17,62,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,18,8,0,1,
	1,1,1,1,1,1,1,3,1,24,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,48,8,2,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,3,3,60,8,3,1,3,0,0,4,0,2,4,6,0,0,69,0,17,1,0,0,0,
	2,23,1,0,0,0,4,47,1,0,0,0,6,59,1,0,0,0,8,18,5,0,0,1,9,10,3,6,3,0,10,11,
	5,0,0,1,11,18,1,0,0,0,12,13,5,16,0,0,13,14,5,17,0,0,14,15,3,6,3,0,15,16,
	5,0,0,1,16,18,1,0,0,0,17,8,1,0,0,0,17,9,1,0,0,0,17,12,1,0,0,0,18,1,1,0,
	0,0,19,24,3,6,3,0,20,21,3,6,3,0,21,22,3,2,1,0,22,24,1,0,0,0,23,19,1,0,0,
	0,23,20,1,0,0,0,24,3,1,0,0,0,25,26,3,2,1,0,26,27,5,13,0,0,27,48,1,0,0,0,
	28,29,3,2,1,0,29,30,5,14,0,0,30,48,1,0,0,0,31,32,3,2,1,0,32,33,5,13,0,0,
	33,34,3,4,2,0,34,48,1,0,0,0,35,36,3,2,1,0,36,37,5,14,0,0,37,38,3,4,2,0,
	38,48,1,0,0,0,39,40,3,2,1,0,40,41,5,13,0,0,41,42,3,2,1,0,42,48,1,0,0,0,
	43,44,3,2,1,0,44,45,5,14,0,0,45,46,3,2,1,0,46,48,1,0,0,0,47,25,1,0,0,0,
	47,28,1,0,0,0,47,31,1,0,0,0,47,35,1,0,0,0,47,39,1,0,0,0,47,43,1,0,0,0,48,
	5,1,0,0,0,49,60,5,12,0,0,50,51,5,3,0,0,51,60,5,12,0,0,52,60,5,2,0,0,53,
	54,5,3,0,0,54,60,5,2,0,0,55,56,5,6,0,0,56,57,3,4,2,0,57,58,5,7,0,0,58,60,
	1,0,0,0,59,49,1,0,0,0,59,50,1,0,0,0,59,52,1,0,0,0,59,53,1,0,0,0,59,55,1,
	0,0,0,60,7,1,0,0,0,4,17,23,47,59];

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
	public override copyFrom(ctx: CompilationUnitContext): void {
		super.copyFrom(ctx);
	}
}
export class NonEmptyProgramWithPitchSpecificationContext extends CompilationUnitContext {
	public _p!: Token;
	public _e!: GestureContext;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PITCH_SPECIFICATION(): TerminalNode {
		return this.getToken(MotorMusicParser.PITCH_SPECIFICATION, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public PITCH_SPECIFICATION_VALUE(): TerminalNode {
		return this.getToken(MotorMusicParser.PITCH_SPECIFICATION_VALUE, 0);
	}
	public gesture(): GestureContext {
		return this.getTypedRuleContext(GestureContext, 0) as GestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterNonEmptyProgramWithPitchSpecification) {
	 		listener.enterNonEmptyProgramWithPitchSpecification(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitNonEmptyProgramWithPitchSpecification) {
	 		listener.exitNonEmptyProgramWithPitchSpecification(this);
		}
	}
}
export class NonEmptyProgramWithDefaultPitchSpecificationContext extends CompilationUnitContext {
	public _e!: GestureContext;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public gesture(): GestureContext {
		return this.getTypedRuleContext(GestureContext, 0) as GestureContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterNonEmptyProgramWithDefaultPitchSpecification) {
	 		listener.enterNonEmptyProgramWithDefaultPitchSpecification(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitNonEmptyProgramWithDefaultPitchSpecification) {
	 		listener.exitNonEmptyProgramWithDefaultPitchSpecification(this);
		}
	}
}
export class EmptyProgramContext extends CompilationUnitContext {
	public _e!: Token;
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
}


export class Raised_gesture_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_raised_gesture_list;
	}
	public override copyFrom(ctx: Raised_gesture_listContext): void {
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
}


export class Motion_spec_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_motion_spec_list;
	}
	public override copyFrom(ctx: Motion_spec_listContext): void {
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
}


export class GestureContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_gesture;
	}
	public override copyFrom(ctx: GestureContext): void {
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
}
export class TimeTaggedEmptyContext extends GestureContext {
	public _number_!: Token;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(MotorMusicParser.UNDERSCORE, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParser.NUMBER, 0);
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
}
export class TimeTaggedSyllableContext extends GestureContext {
	public _number_!: Token;
	public _syllable!: Token;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParser.NUMBER, 0);
	}
	public SYLLABLE(): TerminalNode {
		return this.getToken(MotorMusicParser.SYLLABLE, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterTimeTaggedSyllable) {
	 		listener.enterTimeTaggedSyllable(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitTimeTaggedSyllable) {
	 		listener.exitTimeTaggedSyllable(this);
		}
	}
}
export class SyllableContext extends GestureContext {
	public _syllable!: Token;
	constructor(parser: MotorMusicParser, ctx: GestureContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SYLLABLE(): TerminalNode {
		return this.getToken(MotorMusicParser.SYLLABLE, 0);
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSyllable) {
	 		listener.enterSyllable(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSyllable) {
	 		listener.exitSyllable(this);
		}
	}
}
