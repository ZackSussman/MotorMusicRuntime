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
		WS=1, SYLLABLE=2, NUMBER=3, LCURLY=4, RCURLY=5, LPAREN=6, RPAREN=7, LANGLE=8, 
		RANGLE=9, LSQBRACKET=10, RSQBRACKET=11, UNDERSCORE=12, DOT=13, CARROT=14, 
		UNRECOGNIZED=15, PITCH_SPECIFICATION=16;
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
			"WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", 
			"RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", 
			"UNRECOGNIZED", "PITCH_SPECIFICATION"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", 
			"']'", "'_'", "'.'", "'^'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "UNRECOGNIZED", "PITCH_SPECIFICATION"
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
		"\u0004\u0000\u0010\u00a3\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0004\u0000$\b\u0000"+
		"\u000b\u0000\f\u0000%\u0001\u0000\u0004\u0000)\b\u0000\u000b\u0000\f\u0000"+
		"*\u0001\u0000\u0004\u0000.\b\u0000\u000b\u0000\f\u0000/\u0001\u0000\u0004"+
		"\u00003\b\u0000\u000b\u0000\f\u00004\u0003\u00007\b\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0004\u0001<\b\u0001\u000b\u0001\f\u0001=\u0001"+
		"\u0001\u0005\u0001A\b\u0001\n\u0001\f\u0001D\t\u0001\u0001\u0001\u0005"+
		"\u0001G\b\u0001\n\u0001\f\u0001J\t\u0001\u0001\u0001\u0004\u0001M\b\u0001"+
		"\u000b\u0001\f\u0001N\u0001\u0001\u0005\u0001R\b\u0001\n\u0001\f\u0001"+
		"U\t\u0001\u0003\u0001W\b\u0001\u0001\u0002\u0004\u0002Z\b\u0002\u000b"+
		"\u0002\f\u0002[\u0001\u0002\u0004\u0002_\b\u0002\u000b\u0002\f\u0002`"+
		"\u0001\u0002\u0001\u0002\u0004\u0002e\b\u0002\u000b\u0002\f\u0002f\u0001"+
		"\u0002\u0001\u0002\u0004\u0002k\b\u0002\u000b\u0002\f\u0002l\u0003\u0002"+
		"o\b\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0004\u000f\u00a0\b\u000f\u000b\u000f\f"+
		"\u000f\u00a1\u0000\u0000\u0010\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001\u0000\u0005"+
		"\u0002\u0000\t\t  \u0006\u0000bdfhjnptvxzz\u0006\u0000aaeeiioouuyy\u0001"+
		"\u000009\u0005\u0000()..09AZaz\u00b6\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u00016\u0001\u0000\u0000\u0000\u0003V\u0001\u0000"+
		"\u0000\u0000\u0005n\u0001\u0000\u0000\u0000\u0007p\u0001\u0000\u0000\u0000"+
		"\tr\u0001\u0000\u0000\u0000\u000bt\u0001\u0000\u0000\u0000\rv\u0001\u0000"+
		"\u0000\u0000\u000fx\u0001\u0000\u0000\u0000\u0011z\u0001\u0000\u0000\u0000"+
		"\u0013|\u0001\u0000\u0000\u0000\u0015~\u0001\u0000\u0000\u0000\u0017\u0080"+
		"\u0001\u0000\u0000\u0000\u0019\u0082\u0001\u0000\u0000\u0000\u001b\u0084"+
		"\u0001\u0000\u0000\u0000\u001d\u0086\u0001\u0000\u0000\u0000\u001f\u0088"+
		"\u0001\u0000\u0000\u0000!\"\u0005\r\u0000\u0000\"$\u0005\n\u0000\u0000"+
		"#!\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000"+
		"\u0000%&\u0001\u0000\u0000\u0000&7\u0001\u0000\u0000\u0000\')\u0005\r"+
		"\u0000\u0000(\'\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000*(\u0001"+
		"\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+7\u0001\u0000\u0000\u0000"+
		",.\u0005\n\u0000\u0000-,\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000"+
		"/-\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000\u000007\u0001\u0000\u0000"+
		"\u000013\u0007\u0000\u0000\u000021\u0001\u0000\u0000\u000034\u0001\u0000"+
		"\u0000\u000042\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u000057\u0001"+
		"\u0000\u0000\u00006#\u0001\u0000\u0000\u00006(\u0001\u0000\u0000\u0000"+
		"6-\u0001\u0000\u0000\u000062\u0001\u0000\u0000\u000078\u0001\u0000\u0000"+
		"\u000089\u0006\u0000\u0000\u00009\u0002\u0001\u0000\u0000\u0000:<\u0007"+
		"\u0001\u0000\u0000;:\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000"+
		"=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>B\u0001\u0000\u0000"+
		"\u0000?A\u0007\u0002\u0000\u0000@?\u0001\u0000\u0000\u0000AD\u0001\u0000"+
		"\u0000\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CH\u0001"+
		"\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000EG\u0007\u0001\u0000\u0000"+
		"FE\u0001\u0000\u0000\u0000GJ\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000"+
		"\u0000HI\u0001\u0000\u0000\u0000IW\u0001\u0000\u0000\u0000JH\u0001\u0000"+
		"\u0000\u0000KM\u0007\u0002\u0000\u0000LK\u0001\u0000\u0000\u0000MN\u0001"+
		"\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000"+
		"OS\u0001\u0000\u0000\u0000PR\u0007\u0001\u0000\u0000QP\u0001\u0000\u0000"+
		"\u0000RU\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000ST\u0001\u0000"+
		"\u0000\u0000TW\u0001\u0000\u0000\u0000US\u0001\u0000\u0000\u0000V;\u0001"+
		"\u0000\u0000\u0000VL\u0001\u0000\u0000\u0000W\u0004\u0001\u0000\u0000"+
		"\u0000XZ\u0007\u0003\u0000\u0000YX\u0001\u0000\u0000\u0000Z[\u0001\u0000"+
		"\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\o\u0001"+
		"\u0000\u0000\u0000]_\u0007\u0003\u0000\u0000^]\u0001\u0000\u0000\u0000"+
		"_`\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000"+
		"\u0000ab\u0001\u0000\u0000\u0000bd\t\u0000\u0000\u0000ce\u0007\u0003\u0000"+
		"\u0000dc\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000fd\u0001\u0000"+
		"\u0000\u0000fg\u0001\u0000\u0000\u0000go\u0001\u0000\u0000\u0000hj\u0005"+
		".\u0000\u0000ik\u0007\u0003\u0000\u0000ji\u0001\u0000\u0000\u0000kl\u0001"+
		"\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000"+
		"mo\u0001\u0000\u0000\u0000nY\u0001\u0000\u0000\u0000n^\u0001\u0000\u0000"+
		"\u0000nh\u0001\u0000\u0000\u0000o\u0006\u0001\u0000\u0000\u0000pq\u0005"+
		"{\u0000\u0000q\b\u0001\u0000\u0000\u0000rs\u0005}\u0000\u0000s\n\u0001"+
		"\u0000\u0000\u0000tu\u0005(\u0000\u0000u\f\u0001\u0000\u0000\u0000vw\u0005"+
		")\u0000\u0000w\u000e\u0001\u0000\u0000\u0000xy\u0005<\u0000\u0000y\u0010"+
		"\u0001\u0000\u0000\u0000z{\u0005>\u0000\u0000{\u0012\u0001\u0000\u0000"+
		"\u0000|}\u0005[\u0000\u0000}\u0014\u0001\u0000\u0000\u0000~\u007f\u0005"+
		"]\u0000\u0000\u007f\u0016\u0001\u0000\u0000\u0000\u0080\u0081\u0005_\u0000"+
		"\u0000\u0081\u0018\u0001\u0000\u0000\u0000\u0082\u0083\u0005.\u0000\u0000"+
		"\u0083\u001a\u0001\u0000\u0000\u0000\u0084\u0085\u0005^\u0000\u0000\u0085"+
		"\u001c\u0001\u0000\u0000\u0000\u0086\u0087\t\u0000\u0000\u0000\u0087\u001e"+
		"\u0001\u0000\u0000\u0000\u0088\u0089\u0005P\u0000\u0000\u0089\u008a\u0005"+
		"I\u0000\u0000\u008a\u008b\u0005T\u0000\u0000\u008b\u008c\u0005C\u0000"+
		"\u0000\u008c\u008d\u0005H\u0000\u0000\u008d\u008e\u0005 \u0000\u0000\u008e"+
		"\u008f\u0005S\u0000\u0000\u008f\u0090\u0005P\u0000\u0000\u0090\u0091\u0005"+
		"E\u0000\u0000\u0091\u0092\u0005C\u0000\u0000\u0092\u0093\u0005I\u0000"+
		"\u0000\u0093\u0094\u0005F\u0000\u0000\u0094\u0095\u0005I\u0000\u0000\u0095"+
		"\u0096\u0005C\u0000\u0000\u0096\u0097\u0005A\u0000\u0000\u0097\u0098\u0005"+
		"T\u0000\u0000\u0098\u0099\u0005I\u0000\u0000\u0099\u009a\u0005O\u0000"+
		"\u0000\u009a\u009b\u0005N\u0000\u0000\u009b\u009c\u0005:\u0000\u0000\u009c"+
		"\u009d\u0005 \u0000\u0000\u009d\u009f\u0001\u0000\u0000\u0000\u009e\u00a0"+
		"\u0007\u0004\u0000\u0000\u009f\u009e\u0001\u0000\u0000\u0000\u00a0\u00a1"+
		"\u0001\u0000\u0000\u0000\u00a1\u009f\u0001\u0000\u0000\u0000\u00a1\u00a2"+
		"\u0001\u0000\u0000\u0000\u00a2 \u0001\u0000\u0000\u0000\u0012\u0000%*"+
		"/46=BHNSV[`fln\u00a1\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}