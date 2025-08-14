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
	public static readonly PITCH_SPECIFICATION = 16;
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
                                                             "UNRECOGNIZED", 
                                                             "PITCH_SPECIFICATION" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", 
		"RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", "UNRECOGNIZED", 
		"PITCH_SPECIFICATION",
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

	public static readonly _serializedATN: number[] = [4,0,16,163,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,
	4,0,36,8,0,11,0,12,0,37,1,0,4,0,41,8,0,11,0,12,0,42,1,0,4,0,46,8,0,11,0,
	12,0,47,1,0,4,0,51,8,0,11,0,12,0,52,3,0,55,8,0,1,0,1,0,1,1,4,1,60,8,1,11,
	1,12,1,61,1,1,5,1,65,8,1,10,1,12,1,68,9,1,1,1,5,1,71,8,1,10,1,12,1,74,9,
	1,1,1,4,1,77,8,1,11,1,12,1,78,1,1,5,1,82,8,1,10,1,12,1,85,9,1,3,1,87,8,
	1,1,2,4,2,90,8,2,11,2,12,2,91,1,2,4,2,95,8,2,11,2,12,2,96,1,2,1,2,4,2,101,
	8,2,11,2,12,2,102,1,2,1,2,4,2,107,8,2,11,2,12,2,108,3,2,111,8,2,1,3,1,3,
	1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,
	1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,4,15,
	160,8,15,11,15,12,15,161,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
	19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,5,2,0,9,9,32,32,6,0,98,100,
	102,104,106,110,112,116,118,120,122,122,6,0,97,97,101,101,105,105,111,111,
	117,117,121,121,1,0,48,57,5,0,40,41,46,46,48,57,65,90,97,122,182,0,1,1,
	0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
	1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,
	0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,54,1,0,0,0,3,86,
	1,0,0,0,5,110,1,0,0,0,7,112,1,0,0,0,9,114,1,0,0,0,11,116,1,0,0,0,13,118,
	1,0,0,0,15,120,1,0,0,0,17,122,1,0,0,0,19,124,1,0,0,0,21,126,1,0,0,0,23,
	128,1,0,0,0,25,130,1,0,0,0,27,132,1,0,0,0,29,134,1,0,0,0,31,136,1,0,0,0,
	33,34,5,13,0,0,34,36,5,10,0,0,35,33,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,
	37,38,1,0,0,0,38,55,1,0,0,0,39,41,5,13,0,0,40,39,1,0,0,0,41,42,1,0,0,0,
	42,40,1,0,0,0,42,43,1,0,0,0,43,55,1,0,0,0,44,46,5,10,0,0,45,44,1,0,0,0,
	46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,55,1,0,0,0,49,51,7,0,0,0,50,
	49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,35,
	1,0,0,0,54,40,1,0,0,0,54,45,1,0,0,0,54,50,1,0,0,0,55,56,1,0,0,0,56,57,6,
	0,0,0,57,2,1,0,0,0,58,60,7,1,0,0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,
	0,0,61,62,1,0,0,0,62,66,1,0,0,0,63,65,7,2,0,0,64,63,1,0,0,0,65,68,1,0,0,
	0,66,64,1,0,0,0,66,67,1,0,0,0,67,72,1,0,0,0,68,66,1,0,0,0,69,71,7,1,0,0,
	70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,87,1,0,0,0,74,
	72,1,0,0,0,75,77,7,2,0,0,76,75,1,0,0,0,77,78,1,0,0,0,78,76,1,0,0,0,78,79,
	1,0,0,0,79,83,1,0,0,0,80,82,7,1,0,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,
	0,0,0,83,84,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,86,59,1,0,0,0,86,76,1,0,
	0,0,87,4,1,0,0,0,88,90,7,3,0,0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,
	0,91,92,1,0,0,0,92,111,1,0,0,0,93,95,7,3,0,0,94,93,1,0,0,0,95,96,1,0,0,
	0,96,94,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,100,9,0,0,0,99,101,7,3,0,
	0,100,99,1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,111,
	1,0,0,0,104,106,5,46,0,0,105,107,7,3,0,0,106,105,1,0,0,0,107,108,1,0,0,
	0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,89,1,0,0,0,110,94,
	1,0,0,0,110,104,1,0,0,0,111,6,1,0,0,0,112,113,5,123,0,0,113,8,1,0,0,0,114,
	115,5,125,0,0,115,10,1,0,0,0,116,117,5,40,0,0,117,12,1,0,0,0,118,119,5,
	41,0,0,119,14,1,0,0,0,120,121,5,60,0,0,121,16,1,0,0,0,122,123,5,62,0,0,
	123,18,1,0,0,0,124,125,5,91,0,0,125,20,1,0,0,0,126,127,5,93,0,0,127,22,
	1,0,0,0,128,129,5,95,0,0,129,24,1,0,0,0,130,131,5,46,0,0,131,26,1,0,0,0,
	132,133,5,94,0,0,133,28,1,0,0,0,134,135,9,0,0,0,135,30,1,0,0,0,136,137,
	5,80,0,0,137,138,5,73,0,0,138,139,5,84,0,0,139,140,5,67,0,0,140,141,5,72,
	0,0,141,142,5,32,0,0,142,143,5,83,0,0,143,144,5,80,0,0,144,145,5,69,0,0,
	145,146,5,67,0,0,146,147,5,73,0,0,147,148,5,70,0,0,148,149,5,73,0,0,149,
	150,5,67,0,0,150,151,5,65,0,0,151,152,5,84,0,0,152,153,5,73,0,0,153,154,
	5,79,0,0,154,155,5,78,0,0,155,156,5,58,0,0,156,157,5,32,0,0,157,159,1,0,
	0,0,158,160,7,4,0,0,159,158,1,0,0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,
	162,1,0,0,0,162,32,1,0,0,0,18,0,37,42,47,52,54,61,66,72,78,83,86,91,96,
	102,108,110,161,1,0,2,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicLexer.__ATN) {
			MotorMusicLexer.__ATN = new ATNDeserializer().deserialize(MotorMusicLexer._serializedATN);
		}

		return MotorMusicLexer.__ATN;
	}


	static DecisionsToDFA = MotorMusicLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}