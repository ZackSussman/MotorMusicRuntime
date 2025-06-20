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
	public static readonly IDENT = 2;
	public static readonly LCURLY = 3;
	public static readonly RCURLY = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly LANGLE = 7;
	public static readonly RANGLE = 8;
	public static readonly LSQBRACKET = 9;
	public static readonly RSQBRACKET = 10;
	public static readonly MID = 11;
	public static readonly UNDERSCORE = 12;
	public static readonly UNRECOGNIZED = 13;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_bracketed_music_list = 1;
	public static readonly RULE_music_list = 2;
	public static readonly RULE_music = 3;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'{'", 
                                                            "'}'", "'('", 
                                                            "')'", "'<'", 
                                                            "'>'", "'['", 
                                                            "']'", "'|'", 
                                                            "'_'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "IDENT", "LCURLY", 
                                                             "RCURLY", "LPAREN", 
                                                             "RPAREN", "LANGLE", 
                                                             "RANGLE", "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "MID", "UNDERSCORE", 
                                                             "UNRECOGNIZED" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "bracketed_music_list", "music_list", "music",
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
			this.state = 12;
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
			case 5:
			case 12:
				localctx = new NonEmptyProgramContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 9;
				(localctx as NonEmptyProgramContext)._e = this.music();
				this.state = 10;
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
	public bracketed_music_list(): Bracketed_music_listContext {
		let localctx: Bracketed_music_listContext = new Bracketed_music_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MotorMusicParser.RULE_bracketed_music_list);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new BracketedMusicListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 14;
				this.match(MotorMusicParser.LCURLY);
				this.state = 15;
				(localctx as BracketedMusicListContext)._value = this.music_list();
				this.state = 16;
				this.match(MotorMusicParser.RCURLY);
				}
				break;
			case 2:
				localctx = new ResolveBracketedMusicListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 18;
				this.match(MotorMusicParser.LCURLY);
				this.state = 19;
				(localctx as ResolveBracketedMusicListContext)._away_from = this.music_list();
				this.state = 20;
				this.match(MotorMusicParser.MID);
				this.state = 21;
				(localctx as ResolveBracketedMusicListContext)._towards = this.music_list();
				this.state = 22;
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
	// @RuleVersion(0)
	public music_list(): Music_listContext {
		let localctx: Music_listContext = new Music_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MotorMusicParser.RULE_music_list);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new SingleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 26;
				(localctx as SingleContext)._top = this.music();
				}
				break;
			case 2:
				localctx = new MultiContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 27;
				(localctx as MultiContext)._top = this.music();
				this.state = 28;
				(localctx as MultiContext)._rest = this.music_list();
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
		this.enterRule(localctx, 6, MotorMusicParser.RULE_music);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				localctx = new EmptyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 32;
				this.match(MotorMusicParser.UNDERSCORE);
				}
				break;
			case 2:
				localctx = new SyllableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 33;
				(localctx as SyllableContext)._syllable = this.match(MotorMusicParser.IDENT);
				}
				break;
			case 5:
				localctx = new ResolveContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 34;
				this.match(MotorMusicParser.LPAREN);
				this.state = 35;
				(localctx as ResolveContext)._towards = this.music_list();
				this.state = 36;
				this.match(MotorMusicParser.MID);
				this.state = 37;
				(localctx as ResolveContext)._awayFrom = this.music_list();
				this.state = 38;
				this.match(MotorMusicParser.RPAREN);
				}
				break;
			case 3:
				localctx = new ConcatContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 40;
				this.match(MotorMusicParser.LCURLY);
				this.state = 41;
				(localctx as ConcatContext)._awayFrom = this.music_list();
				this.state = 42;
				this.match(MotorMusicParser.MID);
				this.state = 43;
				(localctx as ConcatContext)._towards = this.music_list();
				this.state = 44;
				this.match(MotorMusicParser.RCURLY);
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

	public static readonly _serializedATN: number[] = [4,1,13,49,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,1,0,3,0,13,8,0,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,3,1,25,8,1,1,2,1,2,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,47,8,3,1,3,0,0,4,0,2,4,6,0,
	0,50,0,12,1,0,0,0,2,24,1,0,0,0,4,30,1,0,0,0,6,46,1,0,0,0,8,13,5,0,0,1,9,
	10,3,6,3,0,10,11,5,0,0,1,11,13,1,0,0,0,12,8,1,0,0,0,12,9,1,0,0,0,13,1,1,
	0,0,0,14,15,5,3,0,0,15,16,3,4,2,0,16,17,5,4,0,0,17,25,1,0,0,0,18,19,5,3,
	0,0,19,20,3,4,2,0,20,21,5,11,0,0,21,22,3,4,2,0,22,23,5,4,0,0,23,25,1,0,
	0,0,24,14,1,0,0,0,24,18,1,0,0,0,25,3,1,0,0,0,26,31,3,6,3,0,27,28,3,6,3,
	0,28,29,3,4,2,0,29,31,1,0,0,0,30,26,1,0,0,0,30,27,1,0,0,0,31,5,1,0,0,0,
	32,47,5,12,0,0,33,47,5,2,0,0,34,35,5,5,0,0,35,36,3,4,2,0,36,37,5,11,0,0,
	37,38,3,4,2,0,38,39,5,6,0,0,39,47,1,0,0,0,40,41,5,3,0,0,41,42,3,4,2,0,42,
	43,5,11,0,0,43,44,3,4,2,0,44,45,5,4,0,0,45,47,1,0,0,0,46,32,1,0,0,0,46,
	33,1,0,0,0,46,34,1,0,0,0,46,40,1,0,0,0,47,7,1,0,0,0,4,12,24,30,46];

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
export class NonEmptyProgramContext extends CompilationUnitContext {
	public _e!: MusicContext;
	constructor(parser: MotorMusicParser, ctx: CompilationUnitContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EOF(): TerminalNode {
		return this.getToken(MotorMusicParser.EOF, 0);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
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


export class Bracketed_music_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_bracketed_music_list;
	}
	public override copyFrom(ctx: Bracketed_music_listContext): void {
		super.copyFrom(ctx);
	}
}
export class BracketedMusicListContext extends Bracketed_music_listContext {
	public _value!: Music_listContext;
	constructor(parser: MotorMusicParser, ctx: Bracketed_music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.LCURLY, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.RCURLY, 0);
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterBracketedMusicList) {
	 		listener.enterBracketedMusicList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitBracketedMusicList) {
	 		listener.exitBracketedMusicList(this);
		}
	}
}
export class ResolveBracketedMusicListContext extends Bracketed_music_listContext {
	public _away_from!: Music_listContext;
	public _towards!: Music_listContext;
	constructor(parser: MotorMusicParser, ctx: Bracketed_music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.LCURLY, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParser.MID, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.RCURLY, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterResolveBracketedMusicList) {
	 		listener.enterResolveBracketedMusicList(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitResolveBracketedMusicList) {
	 		listener.exitResolveBracketedMusicList(this);
		}
	}
}


export class Music_listContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_music_list;
	}
	public override copyFrom(ctx: Music_listContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleContext extends Music_listContext {
	public _top!: MusicContext;
	constructor(parser: MotorMusicParser, ctx: Music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterSingle) {
	 		listener.enterSingle(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitSingle) {
	 		listener.exitSingle(this);
		}
	}
}
export class MultiContext extends Music_listContext {
	public _top!: MusicContext;
	public _rest!: Music_listContext;
	constructor(parser: MotorMusicParser, ctx: Music_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public music(): MusicContext {
		return this.getTypedRuleContext(MusicContext, 0) as MusicContext;
	}
	public music_list(): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, 0) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterMulti) {
	 		listener.enterMulti(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitMulti) {
	 		listener.exitMulti(this);
		}
	}
}


export class MusicContext extends ParserRuleContext {
	constructor(parser?: MotorMusicParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MotorMusicParser.RULE_music;
	}
	public override copyFrom(ctx: MusicContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcatContext extends MusicContext {
	public _awayFrom!: Music_listContext;
	public _towards!: Music_listContext;
	constructor(parser: MotorMusicParser, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.LCURLY, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParser.MID, 0);
	}
	public RCURLY(): TerminalNode {
		return this.getToken(MotorMusicParser.RCURLY, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterConcat) {
	 		listener.enterConcat(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitConcat) {
	 		listener.exitConcat(this);
		}
	}
}
export class EmptyContext extends MusicContext {
	constructor(parser: MotorMusicParser, ctx: MusicContext) {
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
export class ResolveContext extends MusicContext {
	public _towards!: Music_listContext;
	public _awayFrom!: Music_listContext;
	constructor(parser: MotorMusicParser, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.LPAREN, 0);
	}
	public MID(): TerminalNode {
		return this.getToken(MotorMusicParser.MID, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(MotorMusicParser.RPAREN, 0);
	}
	public music_list_list(): Music_listContext[] {
		return this.getTypedRuleContexts(Music_listContext) as Music_listContext[];
	}
	public music_list(i: number): Music_listContext {
		return this.getTypedRuleContext(Music_listContext, i) as Music_listContext;
	}
	public enterRule(listener: MotorMusicParserListener): void {
	    if(listener.enterResolve) {
	 		listener.enterResolve(this);
		}
	}
	public exitRule(listener: MotorMusicParserListener): void {
	    if(listener.exitResolve) {
	 		listener.exitResolve(this);
		}
	}
}
export class SyllableContext extends MusicContext {
	public _syllable!: Token;
	constructor(parser: MotorMusicParser, ctx: MusicContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENT(): TerminalNode {
		return this.getToken(MotorMusicParser.IDENT, 0);
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
