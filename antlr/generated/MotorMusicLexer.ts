// Generated from MotorMusicLexer.g4 by ANTLR 4.13.1
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", 
                                                                                      "WS_CHANNEL" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"WS", "FN", "IDENT", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
		"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", 
		"AMPERSAND", "MID", "EQUALS", "COLON", "DASH", "COMMA", "SEMICOLON", "EXCLAMATION", 
		"UNRECOGNIZED",
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

	public static readonly _serializedATN: number[] = [4,0,24,146,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	1,0,1,0,4,0,52,8,0,11,0,12,0,53,1,0,4,0,57,8,0,11,0,12,0,58,1,0,4,0,62,
	8,0,11,0,12,0,63,1,0,4,0,67,8,0,11,0,12,0,68,3,0,71,8,0,1,0,1,0,1,1,1,1,
	1,1,1,2,4,2,79,8,2,11,2,12,2,80,1,3,4,3,84,8,3,11,3,12,3,85,1,3,1,3,4,3,
	90,8,3,11,3,12,3,91,1,3,1,3,4,3,96,8,3,11,3,12,3,97,1,3,4,3,101,8,3,11,
	3,12,3,102,3,3,105,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,
	1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,
	17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,0,0,
	24,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,
	29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,1,0,4,2,0,9,
	9,32,32,2,0,65,90,97,122,1,0,48,57,1,0,46,46,159,0,1,1,0,0,0,0,3,1,0,0,
	0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
	0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
	0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
	0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,
	1,70,1,0,0,0,3,74,1,0,0,0,5,78,1,0,0,0,7,104,1,0,0,0,9,106,1,0,0,0,11,108,
	1,0,0,0,13,110,1,0,0,0,15,112,1,0,0,0,17,114,1,0,0,0,19,116,1,0,0,0,21,
	118,1,0,0,0,23,120,1,0,0,0,25,122,1,0,0,0,27,124,1,0,0,0,29,126,1,0,0,0,
	31,128,1,0,0,0,33,130,1,0,0,0,35,132,1,0,0,0,37,134,1,0,0,0,39,136,1,0,
	0,0,41,138,1,0,0,0,43,140,1,0,0,0,45,142,1,0,0,0,47,144,1,0,0,0,49,50,5,
	13,0,0,50,52,5,10,0,0,51,49,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,
	0,0,0,54,71,1,0,0,0,55,57,5,13,0,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,
	0,0,0,58,59,1,0,0,0,59,71,1,0,0,0,60,62,5,10,0,0,61,60,1,0,0,0,62,63,1,
	0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,71,1,0,0,0,65,67,7,0,0,0,66,65,1,0,
	0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,51,1,0,0,
	0,70,56,1,0,0,0,70,61,1,0,0,0,70,66,1,0,0,0,71,72,1,0,0,0,72,73,6,0,0,0,
	73,2,1,0,0,0,74,75,5,102,0,0,75,76,5,110,0,0,76,4,1,0,0,0,77,79,7,1,0,0,
	78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,6,1,0,0,0,82,
	84,7,2,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,87,
	1,0,0,0,87,89,7,3,0,0,88,90,7,2,0,0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,
	0,0,0,91,92,1,0,0,0,92,105,1,0,0,0,93,95,7,3,0,0,94,96,7,2,0,0,95,94,1,
	0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,105,1,0,0,0,99,101,7,
	2,0,0,100,99,1,0,0,0,101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,
	105,1,0,0,0,104,83,1,0,0,0,104,93,1,0,0,0,104,100,1,0,0,0,105,8,1,0,0,0,
	106,107,5,123,0,0,107,10,1,0,0,0,108,109,5,125,0,0,109,12,1,0,0,0,110,111,
	5,40,0,0,111,14,1,0,0,0,112,113,5,41,0,0,113,16,1,0,0,0,114,115,5,60,0,
	0,115,18,1,0,0,0,116,117,5,62,0,0,117,20,1,0,0,0,118,119,5,91,0,0,119,22,
	1,0,0,0,120,121,5,93,0,0,121,24,1,0,0,0,122,123,5,95,0,0,123,26,1,0,0,0,
	124,125,5,46,0,0,125,28,1,0,0,0,126,127,5,94,0,0,127,30,1,0,0,0,128,129,
	5,38,0,0,129,32,1,0,0,0,130,131,5,124,0,0,131,34,1,0,0,0,132,133,5,61,0,
	0,133,36,1,0,0,0,134,135,5,58,0,0,135,38,1,0,0,0,136,137,5,45,0,0,137,40,
	1,0,0,0,138,139,5,44,0,0,139,42,1,0,0,0,140,141,5,59,0,0,141,44,1,0,0,0,
	142,143,5,33,0,0,143,46,1,0,0,0,144,145,9,0,0,0,145,48,1,0,0,0,13,0,53,
	58,63,68,70,78,80,85,91,97,102,104,1,0,2,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicLexer.__ATN) {
			MotorMusicLexer.__ATN = new ATNDeserializer().deserialize(MotorMusicLexer._serializedATN);
		}

		return MotorMusicLexer.__ATN;
	}


	static DecisionsToDFA = MotorMusicLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}