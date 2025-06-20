// Generated from ./MotorMusicParserPhase1.g4 by ANTLR 4.13.2
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
import MotorMusicParserPhase1Listener from "./MotorMusicParserPhase1Listener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MotorMusicParserPhase1 extends Parser {
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
	public get grammarFileName(): string { return "MotorMusicParserPhase1.g4"; }
	public get literalNames(): (string | null)[] { return MotorMusicParserPhase1.literalNames; }
	public get symbolicNames(): (string | null)[] { return MotorMusicParserPhase1.symbolicNames; }
	public get ruleNames(): string[] { return MotorMusicParserPhase1.ruleNames; }
	public get serializedATN(): number[] { return MotorMusicParserPhase1._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MotorMusicParserPhase1._ATN, MotorMusicParserPhase1.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MotorMusicParserPhase1.RULE_compilationUnit);
		try {
			this.state = 15;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case -1:
				localctx = new EmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 10;
				(localctx as EmptyProgramContext)._e = this.match(MotorMusicParserPhase1.EOF);
				}
				break;
			case 2:
			case 3:
			case 4:
			case 7:
			case 9:
			case 13:
				localctx = new ProgramConsContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 11;
				(localctx as ProgramConsContext)._e = this.music();
				this.state = 12;
				this.match(MotorMusicParserPhase1.SEMICOLON);
				this.state = 13;
				(localctx as ProgramConsContext)._rest = this.compilationUnit();
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
	public number_list(): Number_listContext {
		let localctx: Number_listContext = new Number_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MotorMusicParserPhase1.RULE_number_list);
		try {
			this.state = 21;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new SingleNumberContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 17;
				(localctx as SingleNumberContext)._top = this.match(MotorMusicParserPhase1.NUMBER);
				}
				break;
			case 2:
				localctx = new MultiNumberContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 18;
				(localctx as MultiNumberContext)._top = this.match(MotorMusicParserPhase1.NUMBER);
				this.state = 19;
				this.match(MotorMusicParserPhase1.PLUS);
				this.state = 20;
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
		this.enterRule(localctx, 4, MotorMusicParserPhase1.RULE_music_list);
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new SingleMusicContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 23;
				(localctx as SingleMusicContext)._top = this.music();
				}
				break;
			case 2:
				localctx = new MultiMusicContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 24;
				(localctx as MultiMusicContext)._top = this.music();
				this.state = 25;
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
		this.enterRule(localctx, 6, MotorMusicParserPhase1.RULE_bracketed_music_list);
		try {
			this.state = 39;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new BracketedMusicListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 29;
				this.match(MotorMusicParserPhase1.LCURLY);
				this.state = 30;
				(localctx as BracketedMusicListContext)._value = this.music_list();
				this.state = 31;
				this.match(MotorMusicParserPhase1.RCURLY);
				}
				break;
			case 2:
				localctx = new ResolveBracketedMusicListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 33;
				this.match(MotorMusicParserPhase1.LCURLY);
				this.state = 34;
				(localctx as ResolveBracketedMusicListContext)._away_from = this.music_list();
				this.state = 35;
				this.match(MotorMusicParserPhase1.MID);
				this.state = 36;
				(localctx as ResolveBracketedMusicListContext)._towards = this.music_list();
				this.state = 37;
				this.match(MotorMusicParserPhase1.RCURLY);
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
		this.enterRule(localctx, 8, MotorMusicParserPhase1.RULE_music);
		try {
			let _alt: number;
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				localctx = new WordContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 41;
				(localctx as WordContext)._ident = this.match(MotorMusicParserPhase1.IDENT);
				}
				break;
			case 2:
				localctx = new TimedWordContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 42;
				(localctx as TimedWordContext)._time = this.match(MotorMusicParserPhase1.NUMBER);
				this.state = 43;
				(localctx as TimedWordContext)._ident = this.match(MotorMusicParserPhase1.IDENT);
				}
				break;
			case 3:
				localctx = new VoiceContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 44;
				(localctx as VoiceContext)._voice = this.match(MotorMusicParserPhase1.VOICE);
				}
				break;
			case 4:
				localctx = new TimedVoiceContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 45;
				(localctx as TimedVoiceContext)._time = this.match(MotorMusicParserPhase1.NUMBER);
				this.state = 46;
				(localctx as TimedVoiceContext)._voice = this.match(MotorMusicParserPhase1.VOICE);
				}
				break;
			case 5:
				localctx = new BeatContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 47;
				(localctx as BeatContext)._beat = this.number_list();
				}
				break;
			case 6:
				localctx = new ResolveContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 48;
				this.match(MotorMusicParserPhase1.LPAREN);
				this.state = 49;
				(localctx as ResolveContext)._towards = this.music_list();
				this.state = 50;
				this.match(MotorMusicParserPhase1.MID);
				this.state = 51;
				(localctx as ResolveContext)._awayFrom = this.music_list();
				this.state = 52;
				this.match(MotorMusicParserPhase1.RPAREN);
				}
				break;
			case 7:
				localctx = new ConcatContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 54;
				this.match(MotorMusicParserPhase1.LCURLY);
				this.state = 55;
				(localctx as ConcatContext)._concat = this.music_list();
				this.state = 56;
				this.match(MotorMusicParserPhase1.RCURLY);
				}
				break;
			case 8:
				localctx = new SpecConcatContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 58;
				this.match(MotorMusicParserPhase1.LCURLY);
				this.state = 59;
				(localctx as SpecConcatContext)._awayFrom = this.music_list();
				this.state = 60;
				this.match(MotorMusicParserPhase1.MID);
				this.state = 61;
				(localctx as SpecConcatContext)._towards = this.music_list();
				this.state = 62;
				this.match(MotorMusicParserPhase1.RCURLY);
				}
				break;
			case 9:
				localctx = new ContainmentContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 64;
				this.match(MotorMusicParserPhase1.LSQBRACKET);
				this.state = 65;
				(localctx as ContainmentContext)._container = this.music();
				this.state = 66;
				this.match(MotorMusicParserPhase1.RSQBRACKET);
				this.state = 67;
				(localctx as ContainmentContext)._contained = this.bracketed_music_list();
				}
				break;
			case 10:
				localctx = new VoiceTagContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 69;
				(localctx as VoiceTagContext)._voice = this.match(MotorMusicParserPhase1.VOICE);
				this.state = 70;
				this.match(MotorMusicParserPhase1.LANGLE);
				this.state = 72;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 71;
						(localctx as VoiceTagContext)._voiceContent = this.matchWildcard();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 74;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 76;
				this.match(MotorMusicParserPhase1.RANGLE);
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

	public static readonly _serializedATN: number[] = [4,1,31,80,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,0,1,0,3,0,16,8,0,1,1,1,1,1,
	1,1,1,3,1,22,8,1,1,2,1,2,1,2,1,2,3,2,28,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,3,3,40,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,4,4,73,8,4,11,4,12,4,74,1,4,3,4,78,8,4,1,4,0,0,5,0,2,4,6,8,0,0,88,0,
	15,1,0,0,0,2,21,1,0,0,0,4,27,1,0,0,0,6,39,1,0,0,0,8,77,1,0,0,0,10,16,5,
	0,0,1,11,12,3,8,4,0,12,13,5,5,0,0,13,14,3,0,0,0,14,16,1,0,0,0,15,10,1,0,
	0,0,15,11,1,0,0,0,16,1,1,0,0,0,17,22,5,3,0,0,18,19,5,3,0,0,19,20,5,18,0,
	0,20,22,3,2,1,0,21,17,1,0,0,0,21,18,1,0,0,0,22,3,1,0,0,0,23,28,3,8,4,0,
	24,25,3,8,4,0,25,26,3,4,2,0,26,28,1,0,0,0,27,23,1,0,0,0,27,24,1,0,0,0,28,
	5,1,0,0,0,29,30,5,7,0,0,30,31,3,4,2,0,31,32,5,8,0,0,32,40,1,0,0,0,33,34,
	5,7,0,0,34,35,3,4,2,0,35,36,5,16,0,0,36,37,3,4,2,0,37,38,5,8,0,0,38,40,
	1,0,0,0,39,29,1,0,0,0,39,33,1,0,0,0,40,7,1,0,0,0,41,78,5,4,0,0,42,43,5,
	3,0,0,43,78,5,4,0,0,44,78,5,2,0,0,45,46,5,3,0,0,46,78,5,2,0,0,47,78,3,2,
	1,0,48,49,5,9,0,0,49,50,3,4,2,0,50,51,5,16,0,0,51,52,3,4,2,0,52,53,5,10,
	0,0,53,78,1,0,0,0,54,55,5,7,0,0,55,56,3,4,2,0,56,57,5,8,0,0,57,78,1,0,0,
	0,58,59,5,7,0,0,59,60,3,4,2,0,60,61,5,16,0,0,61,62,3,4,2,0,62,63,5,8,0,
	0,63,78,1,0,0,0,64,65,5,13,0,0,65,66,3,8,4,0,66,67,5,14,0,0,67,68,3,6,3,
	0,68,78,1,0,0,0,69,70,5,2,0,0,70,72,5,11,0,0,71,73,9,0,0,0,72,71,1,0,0,
	0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,78,5,12,0,
	0,77,41,1,0,0,0,77,42,1,0,0,0,77,44,1,0,0,0,77,45,1,0,0,0,77,47,1,0,0,0,
	77,48,1,0,0,0,77,54,1,0,0,0,77,58,1,0,0,0,77,64,1,0,0,0,77,69,1,0,0,0,78,
	9,1,0,0,0,6,15,21,27,39,74,77];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicParserPhase1.__ATN) {
			MotorMusicParserPhase1.__ATN = new ATNDeserializer().deserialize(MotorMusicParserPhase1._serializedATN);
		}

		return MotorMusicParserPhase1.__ATN;
	}


	static DecisionsToDFA = MotorMusicParserPhase1._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase1, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase1.RULE_compilationUnit;
	}
	public override copyFrom(ctx: CompilationUnitContext): void {
		super.copyFrom(ctx);
	}
}
export class ProgramConsContext extends CompilationUnitContext {
	public _e!: MusicContext;
	public _rest!: CompilationUnitContext;
	constructor(parser: MotorMusicParserPhase1, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.SEMICOLON, 0);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public compilationUnit(): CompilationUnitContext {
		return this.getTypedRuleContext(CompilationUnitContext, 0) as CompilationUnitContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterProgramCons) {
	 		listener.enterProgramCons(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitProgramCons) {
	 		listener.exitProgramCons(this);
		}
	}
}
export class EmptyProgramContext extends CompilationUnitContext {
	public _e!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.EOF, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterEmptyProgram) {
	 		listener.enterEmptyProgram(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitEmptyProgram) {
	 		listener.exitEmptyProgram(this);
		}
	}
}


export class Number_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase1, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase1.RULE_number_list;
	}
	public override copyFrom(ctx: Number_listContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleNumberContext extends Number_listContext {
	public _top!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: Number_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.NUMBER, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterSingleNumber) {
	 		listener.enterSingleNumber(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitSingleNumber) {
	 		listener.exitSingleNumber(this);
		}
	}
}
export class MultiNumberContext extends Number_listContext {
	public _top!: Token;
	public _rest!: Number_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: Number_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.PLUS, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.NUMBER, 0);
	}
	public number_list(): Number_listContext {
		return this.getTypedRuleContext(Number_listContext, 0) as Number_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterMultiNumber) {
	 		listener.enterMultiNumber(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitMultiNumber) {
	 		listener.exitMultiNumber(this);
		}
	}
}


export class Music_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase1, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase1.RULE_music_list;
	}
	public override copyFrom(ctx: Music_listContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleMusicContext extends Music_listContext {
	public _top!: MusicContext;
	constructor(parser: MotorMusicParserPhase1, ctx: Music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterSingleMusic) {
	 		listener.enterSingleMusic(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitSingleMusic) {
	 		listener.exitSingleMusic(this);
		}
	}
}
export class MultiMusicContext extends Music_listContext {
	public _top!: MusicContext;
	public _rest!: Music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: Music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterMultiMusic) {
	 		listener.enterMultiMusic(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitMultiMusic) {
	 		listener.exitMultiMusic(this);
		}
	}
}


export class Bracketed_music_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase1, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase1.RULE_bracketed_music_list;
	}
	public override copyFrom(ctx: Bracketed_music_listContext): void {
		super.copyFrom(ctx);
	}
}
export class BracketedMusicListContext extends Bracketed_music_listContext {
	public _value!: Music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: Bracketed_music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RCURLY, 0);
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterBracketedMusicList) {
	 		listener.enterBracketedMusicList(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitBracketedMusicList) {
	 		listener.exitBracketedMusicList(this);
		}
	}
}
export class ResolveBracketedMusicListContext extends Bracketed_music_listContext {
	public _away_from!: Music_listContext;
	public _towards!: Music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: Bracketed_music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LCURLY, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.MID, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RCURLY, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterResolveBracketedMusicList) {
	 		listener.enterResolveBracketedMusicList(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitResolveBracketedMusicList) {
	 		listener.exitResolveBracketedMusicList(this);
		}
	}
}


export class MusicContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParserPhase1, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParserPhase1.RULE_music;
	}
	public override copyFrom(ctx: MusicContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcatContext extends MusicContext {
	public _concat!: Music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RCURLY, 0);
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterConcat) {
	 		listener.enterConcat(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitConcat) {
	 		listener.exitConcat(this);
		}
	}
}
export class WordContext extends MusicContext {
	public _ident!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.IDENT, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterWord) {
	 		listener.enterWord(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitWord) {
	 		listener.exitWord(this);
		}
	}
}
export class BeatContext extends MusicContext {
	public _beat!: Number_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_list(): Number_listContext {
		return this.getTypedRuleContext(Number_listContext, 0) as Number_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterBeat) {
	 		listener.enterBeat(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitBeat) {
	 		listener.exitBeat(this);
		}
	}
}
export class TimedWordContext extends MusicContext {
	public _time!: Token;
	public _ident!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.NUMBER, 0);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.IDENT, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterTimedWord) {
	 		listener.enterTimedWord(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitTimedWord) {
	 		listener.exitTimedWord(this);
		}
	}
}
export class SpecConcatContext extends MusicContext {
	public _awayFrom!: Music_listContext;
	public _towards!: Music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LCURLY, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.MID, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RCURLY, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterSpecConcat) {
	 		listener.enterSpecConcat(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitSpecConcat) {
	 		listener.exitSpecConcat(this);
		}
	}
}
export class VoiceContext extends MusicContext {
	public _voice!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VOICE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.VOICE, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterVoice) {
	 		listener.enterVoice(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitVoice) {
	 		listener.exitVoice(this);
		}
	}
}
export class ResolveContext extends MusicContext {
	public _towards!: Music_listContext;
	public _awayFrom!: Music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LPAREN, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.MID, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RPAREN, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterResolve) {
	 		listener.enterResolve(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitResolve) {
	 		listener.exitResolve(this);
		}
	}
}
export class TimedVoiceContext extends MusicContext {
	public _time!: Token;
	public _voice!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.NUMBER, 0);
	}
	public VOICE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.VOICE, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterTimedVoice) {
	 		listener.enterTimedVoice(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitTimedVoice) {
	 		listener.exitTimedVoice(this);
		}
	}
}
export class ContainmentContext extends MusicContext {
	public _container!: MusicContext;
	public _contained!: Bracketed_music_listContext;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LSQBRACKET, 0);
	}
	public RSQBRACKET(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RSQBRACKET, 0);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public bracketed_music_list(): Bracketed_music_listContext {
		return this.getTypedRuleContext(Bracketed_music_listContext, 0) as Bracketed_music_listContext;
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterContainment) {
	 		listener.enterContainment(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitContainment) {
	 		listener.exitContainment(this);
		}
	}
}
export class VoiceTagContext extends MusicContext {
	public _voice!: Token;
	public _voiceContent!: Token;
	constructor(parser: MotorMusicParserPhase1, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LANGLE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.LANGLE, 0);
	}
	public RANGLE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.RANGLE, 0);
	}
	public VOICE(): TerminalNode {
		return this.getToken(MotorMusicParserPhase1.VOICE, 0);
	}
	public enterRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.enterVoiceTag) {
	 		listener.enterVoiceTag(this);
		}
	}
	public exitRule(listener: MotorMusicParserPhase1Listener): void {
	    if(listener.exitVoiceTag) {
	 		listener.exitVoiceTag(this);
		}
	}
}
