// Generated from ./MotorMusicLexer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MotorMusicLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;
	public static readonly WS_CHANNEL = 2;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", 
                                                                                      "WS_CHANNEL" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "'<'", "'>'", 
                                                            "'['", "']'", 
                                                            "'_'", "'.'", 
                                                            "'^'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "SYLLABLE", 
                                                             "NUMBER", "LCURLY", 
                                                             "RCURLY", "LPAREN", 
                                                             "RPAREN", "LANGLE", 
                                                             "RANGLE", "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "UNDERSCORE", 
                                                             "DOT", "CARROT", 
                                                             "UNRECOGNIZED" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", 
		"RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", "UNRECOGNIZED",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MotorMusicLexer._ATN, MotorMusicLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MotorMusicLexer.g4"; }

	public get literalNames(): (string | null)[] { return MotorMusicLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MotorMusicLexer.symbolicNames; }
	public get ruleNames(): string[] { return MotorMusicLexer.ruleNames; }

	public get serializedATN(): number[] { return MotorMusicLexer._serializedATN; }

	public get channelNames(): string[] { return MotorMusicLexer.channelNames; }

	public get modeNames(): string[] { return MotorMusicLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,15,134,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,1,0,1,0,4,0,34,8,
	0,11,0,12,0,35,1,0,4,0,39,8,0,11,0,12,0,40,1,0,4,0,44,8,0,11,0,12,0,45,
	1,0,4,0,49,8,0,11,0,12,0,50,3,0,53,8,0,1,0,1,0,1,1,4,1,58,8,1,11,1,12,1,
	59,1,1,5,1,63,8,1,10,1,12,1,66,9,1,1,1,5,1,69,8,1,10,1,12,1,72,9,1,1,1,
	4,1,75,8,1,11,1,12,1,76,1,1,5,1,80,8,1,10,1,12,1,83,9,1,3,1,85,8,1,1,2,
	4,2,88,8,2,11,2,12,2,89,1,2,4,2,93,8,2,11,2,12,2,94,1,2,1,2,4,2,99,8,2,
	11,2,12,2,100,1,2,1,2,4,2,105,8,2,11,2,12,2,106,3,2,109,8,2,1,3,1,3,1,4,
	1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,
	12,1,13,1,13,1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
	10,21,11,23,12,25,13,27,14,29,15,1,0,4,2,0,9,9,32,32,6,0,98,100,102,104,
	106,110,112,116,118,120,122,122,6,0,97,97,101,101,105,105,111,111,117,117,
	121,121,1,0,48,57,152,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
	9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
	0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,
	52,1,0,0,0,3,84,1,0,0,0,5,108,1,0,0,0,7,110,1,0,0,0,9,112,1,0,0,0,11,114,
	1,0,0,0,13,116,1,0,0,0,15,118,1,0,0,0,17,120,1,0,0,0,19,122,1,0,0,0,21,
	124,1,0,0,0,23,126,1,0,0,0,25,128,1,0,0,0,27,130,1,0,0,0,29,132,1,0,0,0,
	31,32,5,13,0,0,32,34,5,10,0,0,33,31,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,
	35,36,1,0,0,0,36,53,1,0,0,0,37,39,5,13,0,0,38,37,1,0,0,0,39,40,1,0,0,0,
	40,38,1,0,0,0,40,41,1,0,0,0,41,53,1,0,0,0,42,44,5,10,0,0,43,42,1,0,0,0,
	44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,53,1,0,0,0,47,49,7,0,0,0,48,
	47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,33,
	1,0,0,0,52,38,1,0,0,0,52,43,1,0,0,0,52,48,1,0,0,0,53,54,1,0,0,0,54,55,6,
	0,0,0,55,2,1,0,0,0,56,58,7,1,0,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,
	0,0,59,60,1,0,0,0,60,64,1,0,0,0,61,63,7,2,0,0,62,61,1,0,0,0,63,66,1,0,0,
	0,64,62,1,0,0,0,64,65,1,0,0,0,65,70,1,0,0,0,66,64,1,0,0,0,67,69,7,1,0,0,
	68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,85,1,0,0,0,72,
	70,1,0,0,0,73,75,7,2,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,
	1,0,0,0,77,81,1,0,0,0,78,80,7,1,0,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,
	0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,84,57,1,0,0,0,84,74,1,0,
	0,0,85,4,1,0,0,0,86,88,7,3,0,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,0,
	0,89,90,1,0,0,0,90,109,1,0,0,0,91,93,7,3,0,0,92,91,1,0,0,0,93,94,1,0,0,
	0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,98,9,0,0,0,97,99,7,3,0,0,
	98,97,1,0,0,0,99,100,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,109,1,0,
	0,0,102,104,5,46,0,0,103,105,7,3,0,0,104,103,1,0,0,0,105,106,1,0,0,0,106,
	104,1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,87,1,0,0,0,108,92,1,0,0,
	0,108,102,1,0,0,0,109,6,1,0,0,0,110,111,5,123,0,0,111,8,1,0,0,0,112,113,
	5,125,0,0,113,10,1,0,0,0,114,115,5,40,0,0,115,12,1,0,0,0,116,117,5,41,0,
	0,117,14,1,0,0,0,118,119,5,60,0,0,119,16,1,0,0,0,120,121,5,62,0,0,121,18,
	1,0,0,0,122,123,5,91,0,0,123,20,1,0,0,0,124,125,5,93,0,0,125,22,1,0,0,0,
	126,127,5,95,0,0,127,24,1,0,0,0,128,129,5,46,0,0,129,26,1,0,0,0,130,131,
	5,94,0,0,131,28,1,0,0,0,132,133,9,0,0,0,133,30,1,0,0,0,17,0,35,40,45,50,
	52,59,64,70,76,81,84,89,94,100,106,108,1,0,2,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicLexer.__ATN) {
			MotorMusicLexer.__ATN = new ATNDeserializer().deserialize(MotorMusicLexer._serializedATN);
		}

		return MotorMusicLexer.__ATN;
	}


	static DecisionsToDFA = MotorMusicLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}