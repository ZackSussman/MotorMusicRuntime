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
	public static readonly PITCH_SPECIFICATION = 15;
	public static readonly PITCH_SPEC_WS = 16;
	public static readonly PITCH_SPECIFICATION_VALUE = 17;
	public static readonly PITCH_SPEC_NEWLINE = 18;
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
                                                            "'^'", "'PITCH_SPECIFICATION:'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "WS", 
                                                             "SYLLABLE", 
                                                             "NUMBER", "LCURLY", 
                                                             "RCURLY", "LPAREN", 
                                                             "RPAREN", "LANGLE", 
                                                             "RANGLE", "LSQBRACKET", 
                                                             "RSQBRACKET", 
                                                             "UNDERSCORE", 
                                                             "DOT", "CARROT", 
                                                             "PITCH_SPECIFICATION", 
                                                             "PITCH_SPEC_WS", 
                                                             "PITCH_SPECIFICATION_VALUE", 
                                                             "PITCH_SPEC_NEWLINE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "PITCH_SPEC_MODE", ];

	public static readonly ruleNames: string[] = [
		"WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", 
		"RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", "PITCH_SPECIFICATION", 
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

	public static readonly _serializedATN: number[] = [4,0,18,185,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,1,0,1,0,4,0,41,8,0,11,0,12,0,42,1,0,4,0,46,8,0,11,0,12,0,
	47,1,0,4,0,51,8,0,11,0,12,0,52,1,0,4,0,56,8,0,11,0,12,0,57,3,0,60,8,0,1,
	0,1,0,1,1,4,1,65,8,1,11,1,12,1,66,1,1,5,1,70,8,1,10,1,12,1,73,9,1,1,1,5,
	1,76,8,1,10,1,12,1,79,9,1,1,1,4,1,82,8,1,11,1,12,1,83,1,1,5,1,87,8,1,10,
	1,12,1,90,9,1,3,1,92,8,1,1,1,3,1,95,8,1,1,2,4,2,98,8,2,11,2,12,2,99,1,2,
	4,2,103,8,2,11,2,12,2,104,1,2,1,2,4,2,109,8,2,11,2,12,2,110,1,2,1,2,4,2,
	115,8,2,11,2,12,2,116,3,2,119,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
	7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,1,14,1,14,1,15,4,15,167,8,15,11,15,12,15,168,1,15,1,15,
	1,16,4,16,174,8,16,11,16,12,16,175,1,17,4,17,179,8,17,11,17,12,17,180,1,
	17,1,17,1,17,0,0,18,2,1,4,2,6,3,8,4,10,5,12,6,14,7,16,8,18,9,20,10,22,11,
	24,12,26,13,28,14,30,15,32,16,34,17,36,18,2,0,1,7,2,0,9,9,32,32,6,0,98,
	100,102,104,106,110,112,116,118,120,122,122,6,0,97,97,101,101,105,105,111,
	111,117,117,121,121,1,0,48,56,1,0,48,57,5,0,40,41,46,46,48,57,65,90,97,
	122,2,0,10,10,13,13,206,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,
	0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,
	0,0,0,0,22,1,0,0,0,0,24,1,0,0,0,0,26,1,0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,
	1,32,1,0,0,0,1,34,1,0,0,0,1,36,1,0,0,0,2,59,1,0,0,0,4,91,1,0,0,0,6,118,
	1,0,0,0,8,120,1,0,0,0,10,122,1,0,0,0,12,124,1,0,0,0,14,126,1,0,0,0,16,128,
	1,0,0,0,18,130,1,0,0,0,20,132,1,0,0,0,22,134,1,0,0,0,24,136,1,0,0,0,26,
	138,1,0,0,0,28,140,1,0,0,0,30,142,1,0,0,0,32,166,1,0,0,0,34,173,1,0,0,0,
	36,178,1,0,0,0,38,39,5,13,0,0,39,41,5,10,0,0,40,38,1,0,0,0,41,42,1,0,0,
	0,42,40,1,0,0,0,42,43,1,0,0,0,43,60,1,0,0,0,44,46,5,13,0,0,45,44,1,0,0,
	0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,60,1,0,0,0,49,51,5,10,0,
	0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,60,1,0,0,0,
	54,56,7,0,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,
	60,1,0,0,0,59,40,1,0,0,0,59,45,1,0,0,0,59,50,1,0,0,0,59,55,1,0,0,0,60,61,
	1,0,0,0,61,62,6,0,0,0,62,3,1,0,0,0,63,65,7,1,0,0,64,63,1,0,0,0,65,66,1,
	0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,71,1,0,0,0,68,70,7,2,0,0,69,68,1,0,
	0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,77,1,0,0,0,73,71,1,0,0,
	0,74,76,7,1,0,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,
	78,92,1,0,0,0,79,77,1,0,0,0,80,82,7,2,0,0,81,80,1,0,0,0,82,83,1,0,0,0,83,
	81,1,0,0,0,83,84,1,0,0,0,84,88,1,0,0,0,85,87,7,1,0,0,86,85,1,0,0,0,87,90,
	1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,64,1,
	0,0,0,91,81,1,0,0,0,92,94,1,0,0,0,93,95,7,3,0,0,94,93,1,0,0,0,94,95,1,0,
	0,0,95,5,1,0,0,0,96,98,7,4,0,0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,
	0,99,100,1,0,0,0,100,119,1,0,0,0,101,103,7,4,0,0,102,101,1,0,0,0,103,104,
	1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,108,9,0,0,0,
	107,109,7,4,0,0,108,107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,
	1,0,0,0,111,119,1,0,0,0,112,114,5,46,0,0,113,115,7,4,0,0,114,113,1,0,0,
	0,115,116,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,97,
	1,0,0,0,118,102,1,0,0,0,118,112,1,0,0,0,119,7,1,0,0,0,120,121,5,123,0,0,
	121,9,1,0,0,0,122,123,5,125,0,0,123,11,1,0,0,0,124,125,5,40,0,0,125,13,
	1,0,0,0,126,127,5,41,0,0,127,15,1,0,0,0,128,129,5,60,0,0,129,17,1,0,0,0,
	130,131,5,62,0,0,131,19,1,0,0,0,132,133,5,91,0,0,133,21,1,0,0,0,134,135,
	5,93,0,0,135,23,1,0,0,0,136,137,5,95,0,0,137,25,1,0,0,0,138,139,5,46,0,
	0,139,27,1,0,0,0,140,141,5,94,0,0,141,29,1,0,0,0,142,143,5,80,0,0,143,144,
	5,73,0,0,144,145,5,84,0,0,145,146,5,67,0,0,146,147,5,72,0,0,147,148,5,95,
	0,0,148,149,5,83,0,0,149,150,5,80,0,0,150,151,5,69,0,0,151,152,5,67,0,0,
	152,153,5,73,0,0,153,154,5,70,0,0,154,155,5,73,0,0,155,156,5,67,0,0,156,
	157,5,65,0,0,157,158,5,84,0,0,158,159,5,73,0,0,159,160,5,79,0,0,160,161,
	5,78,0,0,161,162,5,58,0,0,162,163,1,0,0,0,163,164,6,14,1,0,164,31,1,0,0,
	0,165,167,7,0,0,0,166,165,1,0,0,0,167,168,1,0,0,0,168,166,1,0,0,0,168,169,
	1,0,0,0,169,170,1,0,0,0,170,171,6,15,0,0,171,33,1,0,0,0,172,174,7,5,0,0,
	173,172,1,0,0,0,174,175,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,35,
	1,0,0,0,177,179,7,6,0,0,178,177,1,0,0,0,179,180,1,0,0,0,180,178,1,0,0,0,
	180,181,1,0,0,0,181,182,1,0,0,0,182,183,6,17,2,0,183,184,6,17,0,0,184,37,
	1,0,0,0,22,0,1,42,47,52,57,59,66,71,77,83,88,91,94,99,104,110,116,118,168,
	175,180,3,0,2,0,5,1,0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MotorMusicLexer.__ATN) {
			MotorMusicLexer.__ATN = new ATNDeserializer().deserialize(MotorMusicLexer._serializedATN);
		}

		return MotorMusicLexer.__ATN;
	}


	static DecisionsToDFA = MotorMusicLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}