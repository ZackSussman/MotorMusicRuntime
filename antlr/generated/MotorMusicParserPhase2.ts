// Generated from ./MotorMusicParserPhase2.g4 by ANTLR 4.13.2
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
import MotorMusicParserPhase2Listener from "./MotorMusicParserPhase2Listener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MotorMusicParserPhase2 extends Parser {
	public static readonly WS = 1;
	public static readonly VOICE = 2;
	public static readonly NUMBER = 3;
	public static readonly IDENT = 4;
	public static readonly SEMICOLON = 5;
	public static readonly DOT = 6;
	public static readonly LCURLY = 7;
	public static readonly RCURLY = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly LANGLE = 11;
	public static readonly RANGLE = 12;
	public static readonly LSQBRACKET = 13;
	public static readonly RSQBRACKET = 14;
	public static readonly EXCLAMATION = 15;
	public static readonly MID = 16;
	public static readonly UNDERSCORE = 17;
	public static readonly PLUS = 18;
	public static readonly As = 19;
	public static readonly A = 20;
	public static readonly B = 21;
	public static readonly Cs = 22;
	public static readonly C = 23;
	public static readonly Ds = 24;
	public static readonly D = 25;
	public static readonly E = 26;
	public static readonly Fs = 27;
	public static readonly F = 28;
	public static readonly Gs = 29;
	public static readonly G = 30;
	public static readonly UNRECOGNIZED = 31;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_number_list = 1;
	public static readonly RULE_music_list = 2;
	public static readonly RULE_bracketed_music_list = 3;
	public static readonly RULE_music = 4;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, "';'", 
                                                            "'.'", "'{'", 
                                                            "'}'", "'('", 
                                                            "')'", "'<'", 
                                                            "'>'", "'['", 
                                                            "']'", "'!'", 
                                                            "'|'", "'_'", 
                                                            "'+'", null, 
                                                            "'A'", null, 
                                                            null, null, 
                                                            null, "'D'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'G'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "VOICE", "NUMBER", 
                                                             "IDENT", "SEMICOLON", 
                                                             "DOT", "LCURLY", 
                                                             "RCURLY", "LPAREN", 
                                                             "RPAREN", "LANGLE", 
                                                             "RANGLE", "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "EXCLAMATION", 
                                                             "MID", "UNDERSCORE", 
                                                             "PLUS", "As", 
                                                             "A", "B", "Cs", 
                                                             "C", "Ds", 
                                                             "D", "E", "Fs", 
                                                             "F", "Gs", 
                                                             "G", "UNRECOGNIZED" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "number_list", "music_list", "bracketed_music_list", 
		"music",
	];
	public get grammarFileName(): string { return "MotorMusicParserPhase2.g4"; }
	public get literalNames(): (string | null)[] { return MotorMusicParserPhase2.literalNames; }
	public get symbolicNames(): (string | null)[] { return MotorMusicParserPhase2.symbolicNames; }
	public get ruleNames(): string[] { return MotorMusicParserPhase2.ruleNames; }
	public get serializedATN(): number[] { return MotorMusicParserPhase2._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MotorMusicParserPhase2._ATN, MotorMusicParserPhase2.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MotorMusicParserPhase2.RULE_compilationUnit);
		try {
			this.state = 19;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				localctx = new SingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 10;
				this.match(MotorMusicParserPhase2.LANGLE);
				this.state = 11;
				(localctx as SingleContext)._data = this.music();
				this.state = 12;
				this.match(MotorMusicParserPhase2.RANGLE);
				}
				break;
			case 2:
				localctx = new MultiContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 14;
				this.match(MotorMusicParserPhase2.LANGLE);
				this.state = 15;
				(localctx as MultiContext)._data = this.music();
				this.state = 16;
				this.match(MotorMusicParserPhase2.RANGLE);
				this.state = 17;
				(localctx as MultiContext)._rest = this.compilationUnit();
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
	public number_list(): Number_listContext {
		let localctx: Number_listContext = new Number_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MotorMusicParserPhase2.RULE_number_list);
		try {
			this.state = 25;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new SingleNumberContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 21;
				(localctx as SingleNumberContext)._top = this.match(MotorMusicParserPhase2.NUMBER);
				}
				break;
			case 2:
				localctx = new MultiNumberContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 22;
				(localctx as MultiNumberContext)._top = this.match(MotorMusicParserPhase2.NUMBER);
				this.state = 23;
				this.match(MotorMusicParserPhase2.PLUS);
				this.state = 24;
				(localctx as MultiNumberContext)._rest = this.number_list();
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
	public music_list(): Music_listContext {
		let localctx: Music_listContext = new Music_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MotorMusicParserPhase2.RULE_music_list);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new SingleMusicContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 27;
				(localctx as SingleMusicContext)._top = this.music();
				}
				break;
			case 2:
				localctx = new MultiMusicContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 28;
				(localctx as MultiMusicContext)._top = this.music();
				this.state = 29;
				(localctx as MultiMusicContext)._rest = this.music_list();
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
	public bracketed_music_list(): Bracketed_music_listContext {
		let localctx: Bracketed_music_listContext = new Bracketed_music_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MotorMusicParserPhase2.RULE_bracketed_music_list);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new BracketedMusicListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 33;
				this.match(MotorMusicParserPhase2.LCURLY);
				this.state = 34;
				(localctx as BracketedMusicListContext)._value = this.music_list();
				this.state = 35;
				this.match(MotorMusicParserPhase2.RCURLY);
				}
				break;
			case 2:
				localctx = new ResolveBracketedMusicListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 37;
				this.match(MotorMusicParserPhase2.LCURLY);
				this.state = 38;
				(localctx as ResolveBracketedMusicListContext)._away_from = this.music_list();
				this.state = 39;
				this.match(MotorMusicParserPhase2.MID);
				this.state = 40;
				(localctx as ResolveBracketedMusicListContext)._towards = this.music_list();
				this.state = 41;
				this.match(MotorMusicParserPhase2.RCURLY);
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
	public music(): MusicContext {
		let localctx: MusicContext = new MusicContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MotorMusicParserPhase2.RULE_music);
		try {
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				localctx = new WordContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 45;
				(localctx as WordContext)._ident = this.match(MotorMusicParserPhase2.IDENT);
				}
				break;
			case 2:
				localctx = new TimedWordContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 46;
				(localctx as TimedWordContext)._time = this.match(MotorMusicParserPhase2.NUMBER);
				this.state = 47;
				(localctx as TimedWordContext)._ident = this.match(MotorMusicParserPhase2.IDENT);
				}
				break;
			case 3:
				localctx = new BeatContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 48;
				(localctx as BeatContext)._beat = this.number_list();
				}
				break;
			case 4:
				localctx = new ResolveContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 49;
				this.match(MotorMusicParserPhase2.LPAREN);
				this.state = 50;
				(localctx as ResolveContext)._towards = this.music_list();
				this.state = 51;
				this.match(MotorMusicParserPhase2.MID);
				this.state = 52;
				(localctx as ResolveContext)._awayFrom = this.music_list();
				this.state = 53;
				this.match(MotorMusicParserPhase2.RPAREN);
				}
				break;
			case 5:
				localctx = new ConcatContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 55;
				this.match(MotorMusicParserPhase2.LCURLY);
				this.state = 56;
				(localctx as ConcatContext)._concat = this.music_list();
				this.state = 57;
				this.match(MotorMusicParserPhase2.RCURLY);
				}
				break;
			case 6:
				localctx = new SpecConcatContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 59;
				this.match(MotorMusicParserPhase2.LCURLY);
				this.state = 60;
				(localctx as SpecConcatContext)._awayFrom = this.music_list();
				this.state = 61;
				this.match(MotorMusicParserPhase2.MID);
				this.state = 62;
				(localctx as SpecConcatContext)._towards = this.music_list();
				this.state = 63;
				this.match(MotorMusicParserPhase2.RCURLY);
				}
				break;
			case 7:
				localctx = new ContainmentContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 65;
				this.match(MotorMusicParserPhase2.LSQBRACKET);
				this.state = 66;
				(localctx as ContainmentContext)._container = this.music();
				this.state = 67;
				this.match(MotorMusicParserPhase2.RSQBRACKET);
				this.state = 68;
				(localctx as ContainmentContext)._contained = this.bracketed_music_list();
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

	public static readonly _serializedATN: number[] = [4,1,31,73,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,20,
	8,0,1,1,1,1,1,1,1,1,3,1,26,8,1,1,2,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,44,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,71,
	8,4,1,4,0,0,5,0,2,4,6,8,0,0,77,0,19,1,0,0,0,2,25,1,0,0,0,4,31,1,0,0,0,6,
	43,1,0,0,0,8,70,1,0,0,0,10,11,5,11,0,0,11,12,3,8,4,0,12,13,5,12,0,0,13,
	20,1,0,0,0,14,15,5,11,0,0,15,16,3,8,4,0,16,17,5,12,0,0,17,18,3,0,0,0,18,
	20,1,0,0,0,19,10,1,0,0,0,19,14,1,0,0,0,20,1,1,0,0,0,21,26,5,3,0,0,22,23,
	5,3,0,0,23,24,5,18,0,0,24,26,3,2,1,0,25,21,1,0,0,0,25,22,1,0,0,0,26,3,1,
	0,0,0,27,32,3,8,4,0,28,29,3,8,4,0,29,30,3,4,2,0,30,32,1,0,0,0,31,27,1,0,
	0,0,31,28,1,0,0,0,32,5,1,0,0,0,33,34,5,7,0,0,34,35,3,4,2,0,35,36,5,8,0,
	0,36,44,1,0,0,0,37,38,5,7,0,0,38,39,3,4,2,0,39,40,5,16,0,0,40,41,3,4,2,
	0,41,42,5,8,0,0,42,44,1,0,0,0,43,33,1,0,0,0,43,37,1,0,0,0,44,7,1,0,0,0,
	45,71,5,4,0,0,46,47,5,3,0,0,47,71,5,4,0,0,48,71,3,2,1,0,49,50,5,9,0,0,50,
	51,3,4,2,0,51,52,5,16,0,0,52,53,3,4,2,0,53,54,5,10,0,0,54,71,1,0,0,0,55,
	56,5,7,0,0,56,57,3,4,2,0,57,58,5,8,0,0,58,71,1,0,0,0,59,60,5,7,0,0,60,61,
	3,4,2,0,61,62,5,16,0,0,62,63,3,4,2,0,63,64,5,8,0,0,64,71,1,0,0,0,65,66,
	5,13,0,0,66,67,3,8,4,0,67,68,5,14,0,0,68,69,3,6,3,0,69,71,1,0,0,0,70,45,
	1,0,0,0,70,46,1,0,0,0,70,48,1,0,0,0,70,49,1,0,0,0,70,55,1,0,0,0,70,59,1,
	0,0,0,70,65,1,0,0,0,71,9,1,0,0,0,5,19,25,31,43,70];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicParserPhase2.__ATN) {
			MotorMusicParserPhase2.__ATN = new ATNDeserializer().deserialize(MotorMusicParserPhase2._serializedATN);
		}

		return MotorMusicParserPhase2.__ATN;
	}


	static DecisionsToDFA = MotorMusicParserPhase2._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase2, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase2.RULE_compilationUnit;
	}
	public override copyFrom(ctx: CompilationUnitContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleContext extends CompilationUnitContext {
	public _data!: MusicContext;
	constructor(parser: MotorMusicParserPhase2, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGLE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LANGLE, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RANGLE, 0);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterSingle) {
	 		listener.enterSingle(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitSingle) {
	 		listener.exitSingle(this);
		}
	}
}
export class MultiContext extends CompilationUnitContext {
	public _data!: MusicContext;
	public _rest!: CompilationUnitContext;
	constructor(parser: MotorMusicParserPhase2, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGLE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LANGLE, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RANGLE, 0);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public compilationUnit(): CompilationUnitContext {
		return this.getTypedRuleContext(CompilationUnitContext, 0) as CompilationUnitContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterMulti) {
	 		listener.enterMulti(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitMulti) {
	 		listener.exitMulti(this);
		}
	}
}


export class Number_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase2, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase2.RULE_number_list;
	}
	public override copyFrom(ctx: Number_listContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleNumberContext extends Number_listContext {
	public _top!: Token;
	constructor(parser: MotorMusicParserPhase2, ctx: Number_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.NUMBER, 0);
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterSingleNumber) {
	 		listener.enterSingleNumber(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitSingleNumber) {
	 		listener.exitSingleNumber(this);
		}
	}
}
export class MultiNumberContext extends Number_listContext {
	public _top!: Token;
	public _rest!: Number_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: Number_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.PLUS, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.NUMBER, 0);
	}
	public number_list(): Number_listContext {
		return this.getTypedRuleContext(Number_listContext, 0) as Number_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterMultiNumber) {
	 		listener.enterMultiNumber(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitMultiNumber) {
	 		listener.exitMultiNumber(this);
		}
	}
}


export class Music_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase2, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase2.RULE_music_list;
	}
	public override copyFrom(ctx: Music_listContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleMusicContext extends Music_listContext {
	public _top!: MusicContext;
	constructor(parser: MotorMusicParserPhase2, ctx: Music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterSingleMusic) {
	 		listener.enterSingleMusic(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitSingleMusic) {
	 		listener.exitSingleMusic(this);
		}
	}
}
export class MultiMusicContext extends Music_listContext {
	public _top!: MusicContext;
	public _rest!: Music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: Music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterMultiMusic) {
	 		listener.enterMultiMusic(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitMultiMusic) {
	 		listener.exitMultiMusic(this);
		}
	}
}


export class Bracketed_music_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase2, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase2.RULE_bracketed_music_list;
	}
	public override copyFrom(ctx: Bracketed_music_listContext): void {
		super.copyFrom(ctx);
	}
}
export class BracketedMusicListContext extends Bracketed_music_listContext {
	public _value!: Music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: Bracketed_music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RCURLY, 0);
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterBracketedMusicList) {
	 		listener.enterBracketedMusicList(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitBracketedMusicList) {
	 		listener.exitBracketedMusicList(this);
		}
	}
}
export class ResolveBracketedMusicListContext extends Bracketed_music_listContext {
	public _away_from!: Music_listContext;
	public _towards!: Music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: Bracketed_music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LCURLY, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.MID, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RCURLY, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterResolveBracketedMusicList) {
	 		listener.enterResolveBracketedMusicList(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitResolveBracketedMusicList) {
	 		listener.exitResolveBracketedMusicList(this);
		}
	}
}


export class MusicContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase2, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase2.RULE_music;
	}
	public override copyFrom(ctx: MusicContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcatContext extends MusicContext {
	public _concat!: Music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RCURLY, 0);
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterConcat) {
	 		listener.enterConcat(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitConcat) {
	 		listener.exitConcat(this);
		}
	}
}
export class WordContext extends MusicContext {
	public _ident!: Token;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.IDENT, 0);
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterWord) {
	 		listener.enterWord(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitWord) {
	 		listener.exitWord(this);
		}
	}
}
export class BeatContext extends MusicContext {
	public _beat!: Number_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_list(): Number_listContext {
		return this.getTypedRuleContext(Number_listContext, 0) as Number_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterBeat) {
	 		listener.enterBeat(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitBeat) {
	 		listener.exitBeat(this);
		}
	}
}
export class TimedWordContext extends MusicContext {
	public _time!: Token;
	public _ident!: Token;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.NUMBER, 0);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.IDENT, 0);
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterTimedWord) {
	 		listener.enterTimedWord(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitTimedWord) {
	 		listener.exitTimedWord(this);
		}
	}
}
export class SpecConcatContext extends MusicContext {
	public _awayFrom!: Music_listContext;
	public _towards!: Music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LCURLY, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.MID, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RCURLY, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterSpecConcat) {
	 		listener.enterSpecConcat(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitSpecConcat) {
	 		listener.exitSpecConcat(this);
		}
	}
}
export class ResolveContext extends MusicContext {
	public _towards!: Music_listContext;
	public _awayFrom!: Music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LPAREN, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.MID, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RPAREN, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterResolve) {
	 		listener.enterResolve(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitResolve) {
	 		listener.exitResolve(this);
		}
	}
}
export class ContainmentContext extends MusicContext {
	public _container!: MusicContext;
	public _contained!: Bracketed_music_listContext;
	constructor(parser: MotorMusicParserPhase2, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.LSQBRACKET, 0);
	}
	public RSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParserPhase2.RSQBRACKET, 0);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public bracketed_music_list(): Bracketed_music_listContext {
		return this.getTypedRuleContext(Bracketed_music_listContext, 0) as Bracketed_music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.enterContainment) {
	 		listener.enterContainment(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase2Listener): void {
	    if(listener.exitContainment) {
	 		listener.exitContainment(this);
		}
	}
}
