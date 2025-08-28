// Generated from /Users/zacksussman/Documents/code/motormusic/motormusic-runtime/antlr/MotorMusicLexer.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MotorMusicLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, FN=2, IDENT=3, NUMBER=4, LCURLY=5, RCURLY=6, LPAREN=7, RPAREN=8, 
		LANGLE=9, RANGLE=10, LSQBRACKET=11, RSQBRACKET=12, UNDERSCORE=13, DOT=14, 
		CARROT=15, AMPERSAND=16, MID=17, EQUALS=18, COLON=19, DASH=20, COMMA=21, 
		SEMICOLON=22, EXCLAMATION=23, UNRECOGNIZED=24;
	public static final int
		WS_CHANNEL=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "WS_CHANNEL"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "FN", "IDENT", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "AMPERSAND", "MID", "EQUALS", "COLON", "DASH", "COMMA", "SEMICOLON", 
			"EXCLAMATION", "UNRECOGNIZED"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'fn'", null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", 
			"'['", "']'", "'_'", "'.'", "'^'", "'&'", "'|'", "'='", "':'", "'-'", 
			"','", "';'", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "FN", "IDENT", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "AMPERSAND", "MID", "EQUALS", "COLON", "DASH", "COMMA", "SEMICOLON", 
			"EXCLAMATION", "UNRECOGNIZED"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MotorMusicLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MotorMusicLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0018\u0092\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0004\u00004\b\u0000\u000b\u0000\f\u00005\u0001"+
		"\u0000\u0004\u00009\b\u0000\u000b\u0000\f\u0000:\u0001\u0000\u0004\u0000"+
		">\b\u0000\u000b\u0000\f\u0000?\u0001\u0000\u0004\u0000C\b\u0000\u000b"+
		"\u0000\f\u0000D\u0003\u0000G\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0004\u0002O\b\u0002\u000b\u0002"+
		"\f\u0002P\u0001\u0003\u0004\u0003T\b\u0003\u000b\u0003\f\u0003U\u0001"+
		"\u0003\u0001\u0003\u0004\u0003Z\b\u0003\u000b\u0003\f\u0003[\u0001\u0003"+
		"\u0001\u0003\u0004\u0003`\b\u0003\u000b\u0003\f\u0003a\u0001\u0003\u0004"+
		"\u0003e\b\u0003\u000b\u0003\f\u0003f\u0003\u0003i\b\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0000"+
		"\u0000\u0018\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016"+
		"-\u0017/\u0018\u0001\u0000\u0004\u0002\u0000\t\t  \u0002\u0000AZaz\u0001"+
		"\u000009\u0001\u0000..\u009f\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001"+
		"\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001"+
		"\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000"+
		"\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000"+
		"\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-"+
		"\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u0001F\u0001\u0000"+
		"\u0000\u0000\u0003J\u0001\u0000\u0000\u0000\u0005N\u0001\u0000\u0000\u0000"+
		"\u0007h\u0001\u0000\u0000\u0000\tj\u0001\u0000\u0000\u0000\u000bl\u0001"+
		"\u0000\u0000\u0000\rn\u0001\u0000\u0000\u0000\u000fp\u0001\u0000\u0000"+
		"\u0000\u0011r\u0001\u0000\u0000\u0000\u0013t\u0001\u0000\u0000\u0000\u0015"+
		"v\u0001\u0000\u0000\u0000\u0017x\u0001\u0000\u0000\u0000\u0019z\u0001"+
		"\u0000\u0000\u0000\u001b|\u0001\u0000\u0000\u0000\u001d~\u0001\u0000\u0000"+
		"\u0000\u001f\u0080\u0001\u0000\u0000\u0000!\u0082\u0001\u0000\u0000\u0000"+
		"#\u0084\u0001\u0000\u0000\u0000%\u0086\u0001\u0000\u0000\u0000\'\u0088"+
		"\u0001\u0000\u0000\u0000)\u008a\u0001\u0000\u0000\u0000+\u008c\u0001\u0000"+
		"\u0000\u0000-\u008e\u0001\u0000\u0000\u0000/\u0090\u0001\u0000\u0000\u0000"+
		"12\u0005\r\u0000\u000024\u0005\n\u0000\u000031\u0001\u0000\u0000\u0000"+
		"45\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000\u0000"+
		"\u00006G\u0001\u0000\u0000\u000079\u0005\r\u0000\u000087\u0001\u0000\u0000"+
		"\u00009:\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000:;\u0001\u0000"+
		"\u0000\u0000;G\u0001\u0000\u0000\u0000<>\u0005\n\u0000\u0000=<\u0001\u0000"+
		"\u0000\u0000>?\u0001\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000?@\u0001"+
		"\u0000\u0000\u0000@G\u0001\u0000\u0000\u0000AC\u0007\u0000\u0000\u0000"+
		"BA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000"+
		"\u0000DE\u0001\u0000\u0000\u0000EG\u0001\u0000\u0000\u0000F3\u0001\u0000"+
		"\u0000\u0000F8\u0001\u0000\u0000\u0000F=\u0001\u0000\u0000\u0000FB\u0001"+
		"\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HI\u0006\u0000\u0000\u0000"+
		"I\u0002\u0001\u0000\u0000\u0000JK\u0005f\u0000\u0000KL\u0005n\u0000\u0000"+
		"L\u0004\u0001\u0000\u0000\u0000MO\u0007\u0001\u0000\u0000NM\u0001\u0000"+
		"\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000Q\u0006\u0001\u0000\u0000\u0000RT\u0007\u0002\u0000"+
		"\u0000SR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000US\u0001\u0000"+
		"\u0000\u0000UV\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000WY\u0007"+
		"\u0003\u0000\u0000XZ\u0007\u0002\u0000\u0000YX\u0001\u0000\u0000\u0000"+
		"Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000"+
		"\u0000\\i\u0001\u0000\u0000\u0000]_\u0007\u0003\u0000\u0000^`\u0007\u0002"+
		"\u0000\u0000_^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000a_\u0001"+
		"\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000bi\u0001\u0000\u0000\u0000"+
		"ce\u0007\u0002\u0000\u0000dc\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000"+
		"\u0000fd\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000gi\u0001\u0000"+
		"\u0000\u0000hS\u0001\u0000\u0000\u0000h]\u0001\u0000\u0000\u0000hd\u0001"+
		"\u0000\u0000\u0000i\b\u0001\u0000\u0000\u0000jk\u0005{\u0000\u0000k\n"+
		"\u0001\u0000\u0000\u0000lm\u0005}\u0000\u0000m\f\u0001\u0000\u0000\u0000"+
		"no\u0005(\u0000\u0000o\u000e\u0001\u0000\u0000\u0000pq\u0005)\u0000\u0000"+
		"q\u0010\u0001\u0000\u0000\u0000rs\u0005<\u0000\u0000s\u0012\u0001\u0000"+
		"\u0000\u0000tu\u0005>\u0000\u0000u\u0014\u0001\u0000\u0000\u0000vw\u0005"+
		"[\u0000\u0000w\u0016\u0001\u0000\u0000\u0000xy\u0005]\u0000\u0000y\u0018"+
		"\u0001\u0000\u0000\u0000z{\u0005_\u0000\u0000{\u001a\u0001\u0000\u0000"+
		"\u0000|}\u0005.\u0000\u0000}\u001c\u0001\u0000\u0000\u0000~\u007f\u0005"+
		"^\u0000\u0000\u007f\u001e\u0001\u0000\u0000\u0000\u0080\u0081\u0005&\u0000"+
		"\u0000\u0081 \u0001\u0000\u0000\u0000\u0082\u0083\u0005|\u0000\u0000\u0083"+
		"\"\u0001\u0000\u0000\u0000\u0084\u0085\u0005=\u0000\u0000\u0085$\u0001"+
		"\u0000\u0000\u0000\u0086\u0087\u0005:\u0000\u0000\u0087&\u0001\u0000\u0000"+
		"\u0000\u0088\u0089\u0005-\u0000\u0000\u0089(\u0001\u0000\u0000\u0000\u008a"+
		"\u008b\u0005,\u0000\u0000\u008b*\u0001\u0000\u0000\u0000\u008c\u008d\u0005"+
		";\u0000\u0000\u008d,\u0001\u0000\u0000\u0000\u008e\u008f\u0005!\u0000"+
		"\u0000\u008f.\u0001\u0000\u0000\u0000\u0090\u0091\t\u0000\u0000\u0000"+
		"\u00910\u0001\u0000\u0000\u0000\r\u00005:?DFNPU[afh\u0001\u0000\u0002"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}