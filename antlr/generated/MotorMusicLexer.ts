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
	public static readonly AMPERSAND = 15;
	public static readonly PITCH_SPECIFICATION = 16;
	public static readonly PITCH_SPEC_WS = 17;
	public static readonly PITCH_SPECIFICATION_VALUE = 18;
	public static readonly PITCH_SPEC_NEWLINE = 19;
	public static readonly EOF = Token.EOF;
	public static readonly WS_CHANNEL = 2;
	public static readonly PITCH_SPEC_MODE = 1;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN", 
                                                                                      "WS_CHANNEL" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "'<'", "'>'", 
                                                            "'['", "']'", 
                                                            "'_'", "'.'", 
                                                            "'^'", "'&'", 
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
                                                             "AMPERSAND", 
                                                             "PITCH_SPECIFICATION", 
                                                             "PITCH_SPEC_WS", 
                                                             "PITCH_SPECIFICATION_VALUE", 
                                                             "PITCH_SPEC_NEWLINE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "PITCH_SPEC_MODE", ];

	public static readonly ruleNames: string[] = [
		"WS", "SYLLABLE", "DEFAULT_SYLLABLE", "TWELVE_TET_SYLLABLE", "NUMBER", 
		"LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", "RANGLE", "LSQBRACKET", 
		"RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", "AMPERSAND", "PITCH_SPECIFICATION", 
		"PITCH_SPEC_WS", "PITCH_SPECIFICATION_VALUE", "PITCH_SPEC_NEWLINE",
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

	public static readonly _serializedATN: number[] = [4,0,19,201,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,1,0,4,0,47,8,0,11,0,12,
	0,48,1,0,4,0,52,8,0,11,0,12,0,53,1,0,4,0,57,8,0,11,0,12,0,58,1,0,4,0,62,
	8,0,11,0,12,0,63,3,0,66,8,0,1,0,1,0,1,1,1,1,3,1,72,8,1,1,2,4,2,75,8,2,11,
	2,12,2,76,1,2,5,2,80,8,2,10,2,12,2,83,9,2,1,2,5,2,86,8,2,10,2,12,2,89,9,
	2,1,2,4,2,92,8,2,11,2,12,2,93,1,2,5,2,97,8,2,10,2,12,2,100,9,2,3,2,102,
	8,2,1,3,1,3,3,3,106,8,3,1,3,3,3,109,8,3,1,4,4,4,112,8,4,11,4,12,4,113,1,
	4,1,4,4,4,118,8,4,11,4,12,4,119,1,4,1,4,4,4,124,8,4,11,4,12,4,125,1,4,4,
	4,129,8,4,11,4,12,4,130,3,4,133,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,
	1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,
	16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,4,18,183,8,18,11,18,12,
	18,184,1,18,1,18,1,19,4,19,190,8,19,11,19,12,19,191,1,20,4,20,195,8,20,
	11,20,12,20,196,1,20,1,20,1,20,0,0,21,2,1,4,2,6,0,8,0,10,3,12,4,14,5,16,
	6,18,7,20,8,22,9,24,10,26,11,28,12,30,13,32,14,34,15,36,16,38,17,40,18,
	42,19,2,0,1,10,2,0,9,9,32,32,6,0,98,100,102,104,106,110,112,116,118,120,
	122,122,6,0,97,97,101,101,105,105,111,111,117,117,121,121,1,0,65,71,2,0,
	35,35,98,98,1,0,48,56,1,0,48,57,1,0,46,46,5,0,40,41,46,46,48,57,65,90,97,
	122,2,0,10,10,13,13,222,0,2,1,0,0,0,0,4,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,
	0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,
	1,0,0,0,0,26,1,0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,1,0,0,
	0,0,36,1,0,0,0,1,38,1,0,0,0,1,40,1,0,0,0,1,42,1,0,0,0,2,65,1,0,0,0,4,71,
	1,0,0,0,6,101,1,0,0,0,8,103,1,0,0,0,10,132,1,0,0,0,12,134,1,0,0,0,14,136,
	1,0,0,0,16,138,1,0,0,0,18,140,1,0,0,0,20,142,1,0,0,0,22,144,1,0,0,0,24,
	146,1,0,0,0,26,148,1,0,0,0,28,150,1,0,0,0,30,152,1,0,0,0,32,154,1,0,0,0,
	34,156,1,0,0,0,36,158,1,0,0,0,38,182,1,0,0,0,40,189,1,0,0,0,42,194,1,0,
	0,0,44,45,5,13,0,0,45,47,5,10,0,0,46,44,1,0,0,0,47,48,1,0,0,0,48,46,1,0,
	0,0,48,49,1,0,0,0,49,66,1,0,0,0,50,52,5,13,0,0,51,50,1,0,0,0,52,53,1,0,
	0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,66,1,0,0,0,55,57,5,10,0,0,56,55,1,0,
	0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,66,1,0,0,0,60,62,7,0,0,
	0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,
	65,46,1,0,0,0,65,51,1,0,0,0,65,56,1,0,0,0,65,61,1,0,0,0,66,67,1,0,0,0,67,
	68,6,0,0,0,68,3,1,0,0,0,69,72,3,6,2,0,70,72,3,8,3,0,71,69,1,0,0,0,71,70,
	1,0,0,0,72,5,1,0,0,0,73,75,7,1,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,74,1,
	0,0,0,76,77,1,0,0,0,77,81,1,0,0,0,78,80,7,2,0,0,79,78,1,0,0,0,80,83,1,0,
	0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,87,1,0,0,0,83,81,1,0,0,0,84,86,7,1,0,
	0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,102,1,0,0,
	0,89,87,1,0,0,0,90,92,7,2,0,0,91,90,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,
	93,94,1,0,0,0,94,98,1,0,0,0,95,97,7,1,0,0,96,95,1,0,0,0,97,100,1,0,0,0,
	98,96,1,0,0,0,98,99,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,101,74,1,0,0,
	0,101,91,1,0,0,0,102,7,1,0,0,0,103,105,7,3,0,0,104,106,7,4,0,0,105,104,
	1,0,0,0,105,106,1,0,0,0,106,108,1,0,0,0,107,109,7,5,0,0,108,107,1,0,0,0,
	108,109,1,0,0,0,109,9,1,0,0,0,110,112,7,6,0,0,111,110,1,0,0,0,112,113,1,
	0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,117,7,7,0,0,116,
	118,7,6,0,0,117,116,1,0,0,0,118,119,1,0,0,0,119,117,1,0,0,0,119,120,1,0,
	0,0,120,133,1,0,0,0,121,123,7,7,0,0,122,124,7,6,0,0,123,122,1,0,0,0,124,
	125,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,133,1,0,0,0,127,129,7,6,
	0,0,128,127,1,0,0,0,129,130,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,
	133,1,0,0,0,132,111,1,0,0,0,132,121,1,0,0,0,132,128,1,0,0,0,133,11,1,0,
	0,0,134,135,5,123,0,0,135,13,1,0,0,0,136,137,5,125,0,0,137,15,1,0,0,0,138,
	139,5,40,0,0,139,17,1,0,0,0,140,141,5,41,0,0,141,19,1,0,0,0,142,143,5,60,
	0,0,143,21,1,0,0,0,144,145,5,62,0,0,145,23,1,0,0,0,146,147,5,91,0,0,147,
	25,1,0,0,0,148,149,5,93,0,0,149,27,1,0,0,0,150,151,5,95,0,0,151,29,1,0,
	0,0,152,153,5,46,0,0,153,31,1,0,0,0,154,155,5,94,0,0,155,33,1,0,0,0,156,
	157,5,38,0,0,157,35,1,0,0,0,158,159,5,80,0,0,159,160,5,73,0,0,160,161,5,
	84,0,0,161,162,5,67,0,0,162,163,5,72,0,0,163,164,5,95,0,0,164,165,5,83,
	0,0,165,166,5,80,0,0,166,167,5,69,0,0,167,168,5,67,0,0,168,169,5,73,0,0,
	169,170,5,70,0,0,170,171,5,73,0,0,171,172,5,67,0,0,172,173,5,65,0,0,173,
	174,5,84,0,0,174,175,5,73,0,0,175,176,5,79,0,0,176,177,5,78,0,0,177,178,
	5,58,0,0,178,179,1,0,0,0,179,180,6,17,1,0,180,37,1,0,0,0,181,183,7,0,0,
	0,182,181,1,0,0,0,183,184,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,186,
	1,0,0,0,186,187,6,18,0,0,187,39,1,0,0,0,188,190,7,8,0,0,189,188,1,0,0,0,
	190,191,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,41,1,0,0,0,193,195,
	7,9,0,0,194,193,1,0,0,0,195,196,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,0,
	197,198,1,0,0,0,198,199,6,20,2,0,199,200,6,20,0,0,200,43,1,0,0,0,24,0,1,
	48,53,58,63,65,71,76,81,87,93,98,101,105,108,113,119,125,130,132,184,191,
	196,3,0,2,0,5,1,0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicLexer.__ATN) {
			MotorMusicLexer.__ATN = new ATNDeserializer().deserialize(MotorMusicLexer._serializedATN);
		}

		return MotorMusicLexer.__ATN;
	}


	static DecisionsToDFA = MotorMusicLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}