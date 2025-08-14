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
		UNRECOGNIZED=15, PITCH_SPECIFICATION=16, PITCH_SPECIFICATION_VALUE=17;
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
			"UNRECOGNIZED", "PITCH_SPECIFICATION", "PITCH_SPECIFICATION_VALUE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", 
			"']'", "'_'", "'.'", "'^'", null, "'PITCH_SPECIFICATION:'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "UNRECOGNIZED", "PITCH_SPECIFICATION", "PITCH_SPECIFICATION_VALUE"
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
		"\u0004\u0000\u0011\u00a4\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000"+
		"\u0004\u0000&\b\u0000\u000b\u0000\f\u0000\'\u0001\u0000\u0004\u0000+\b"+
		"\u0000\u000b\u0000\f\u0000,\u0001\u0000\u0004\u00000\b\u0000\u000b\u0000"+
		"\f\u00001\u0001\u0000\u0004\u00005\b\u0000\u000b\u0000\f\u00006\u0003"+
		"\u00009\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0004\u0001>\b\u0001"+
		"\u000b\u0001\f\u0001?\u0001\u0001\u0005\u0001C\b\u0001\n\u0001\f\u0001"+
		"F\t\u0001\u0001\u0001\u0005\u0001I\b\u0001\n\u0001\f\u0001L\t\u0001\u0001"+
		"\u0001\u0004\u0001O\b\u0001\u000b\u0001\f\u0001P\u0001\u0001\u0005\u0001"+
		"T\b\u0001\n\u0001\f\u0001W\t\u0001\u0003\u0001Y\b\u0001\u0001\u0002\u0004"+
		"\u0002\\\b\u0002\u000b\u0002\f\u0002]\u0001\u0002\u0004\u0002a\b\u0002"+
		"\u000b\u0002\f\u0002b\u0001\u0002\u0001\u0002\u0004\u0002g\b\u0002\u000b"+
		"\u0002\f\u0002h\u0001\u0002\u0001\u0002\u0004\u0002m\b\u0002\u000b\u0002"+
		"\f\u0002n\u0003\u0002q\b\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0004\u0010\u00a1\b\u0010\u000b\u0010"+
		"\f\u0010\u00a2\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011\u0001\u0000"+
		"\u0005\u0002\u0000\t\t  \u0006\u0000bdfhjnptvxzz\u0006\u0000aaeeiioou"+
		"uyy\u0001\u000009\u0005\u0000()..09AZaz\u00b7\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0001"+
		"8\u0001\u0000\u0000\u0000\u0003X\u0001\u0000\u0000\u0000\u0005p\u0001"+
		"\u0000\u0000\u0000\u0007r\u0001\u0000\u0000\u0000\tt\u0001\u0000\u0000"+
		"\u0000\u000bv\u0001\u0000\u0000\u0000\rx\u0001\u0000\u0000\u0000\u000f"+
		"z\u0001\u0000\u0000\u0000\u0011|\u0001\u0000\u0000\u0000\u0013~\u0001"+
		"\u0000\u0000\u0000\u0015\u0080\u0001\u0000\u0000\u0000\u0017\u0082\u0001"+
		"\u0000\u0000\u0000\u0019\u0084\u0001\u0000\u0000\u0000\u001b\u0086\u0001"+
		"\u0000\u0000\u0000\u001d\u0088\u0001\u0000\u0000\u0000\u001f\u008a\u0001"+
		"\u0000\u0000\u0000!\u00a0\u0001\u0000\u0000\u0000#$\u0005\r\u0000\u0000"+
		"$&\u0005\n\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000"+
		"\u0000\'%\u0001\u0000\u0000\u0000\'(\u0001\u0000\u0000\u0000(9\u0001\u0000"+
		"\u0000\u0000)+\u0005\r\u0000\u0000*)\u0001\u0000\u0000\u0000+,\u0001\u0000"+
		"\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-9\u0001"+
		"\u0000\u0000\u0000.0\u0005\n\u0000\u0000/.\u0001\u0000\u0000\u000001\u0001"+
		"\u0000\u0000\u00001/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u0000"+
		"29\u0001\u0000\u0000\u000035\u0007\u0000\u0000\u000043\u0001\u0000\u0000"+
		"\u000056\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u000067\u0001\u0000"+
		"\u0000\u000079\u0001\u0000\u0000\u00008%\u0001\u0000\u0000\u00008*\u0001"+
		"\u0000\u0000\u00008/\u0001\u0000\u0000\u000084\u0001\u0000\u0000\u0000"+
		"9:\u0001\u0000\u0000\u0000:;\u0006\u0000\u0000\u0000;\u0002\u0001\u0000"+
		"\u0000\u0000<>\u0007\u0001\u0000\u0000=<\u0001\u0000\u0000\u0000>?\u0001"+
		"\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000"+
		"@D\u0001\u0000\u0000\u0000AC\u0007\u0002\u0000\u0000BA\u0001\u0000\u0000"+
		"\u0000CF\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DE\u0001\u0000"+
		"\u0000\u0000EJ\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000GI\u0007"+
		"\u0001\u0000\u0000HG\u0001\u0000\u0000\u0000IL\u0001\u0000\u0000\u0000"+
		"JH\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KY\u0001\u0000\u0000"+
		"\u0000LJ\u0001\u0000\u0000\u0000MO\u0007\u0002\u0000\u0000NM\u0001\u0000"+
		"\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000QU\u0001\u0000\u0000\u0000RT\u0007\u0001\u0000\u0000"+
		"SR\u0001\u0000\u0000\u0000TW\u0001\u0000\u0000\u0000US\u0001\u0000\u0000"+
		"\u0000UV\u0001\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001\u0000"+
		"\u0000\u0000X=\u0001\u0000\u0000\u0000XN\u0001\u0000\u0000\u0000Y\u0004"+
		"\u0001\u0000\u0000\u0000Z\\\u0007\u0003\u0000\u0000[Z\u0001\u0000\u0000"+
		"\u0000\\]\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000]^\u0001\u0000"+
		"\u0000\u0000^q\u0001\u0000\u0000\u0000_a\u0007\u0003\u0000\u0000`_\u0001"+
		"\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000"+
		"bc\u0001\u0000\u0000\u0000cd\u0001\u0000\u0000\u0000df\t\u0000\u0000\u0000"+
		"eg\u0007\u0003\u0000\u0000fe\u0001\u0000\u0000\u0000gh\u0001\u0000\u0000"+
		"\u0000hf\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000iq\u0001\u0000"+
		"\u0000\u0000jl\u0005.\u0000\u0000km\u0007\u0003\u0000\u0000lk\u0001\u0000"+
		"\u0000\u0000mn\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000no\u0001"+
		"\u0000\u0000\u0000oq\u0001\u0000\u0000\u0000p[\u0001\u0000\u0000\u0000"+
		"p`\u0001\u0000\u0000\u0000pj\u0001\u0000\u0000\u0000q\u0006\u0001\u0000"+
		"\u0000\u0000rs\u0005{\u0000\u0000s\b\u0001\u0000\u0000\u0000tu\u0005}"+
		"\u0000\u0000u\n\u0001\u0000\u0000\u0000vw\u0005(\u0000\u0000w\f\u0001"+
		"\u0000\u0000\u0000xy\u0005)\u0000\u0000y\u000e\u0001\u0000\u0000\u0000"+
		"z{\u0005<\u0000\u0000{\u0010\u0001\u0000\u0000\u0000|}\u0005>\u0000\u0000"+
		"}\u0012\u0001\u0000\u0000\u0000~\u007f\u0005[\u0000\u0000\u007f\u0014"+
		"\u0001\u0000\u0000\u0000\u0080\u0081\u0005]\u0000\u0000\u0081\u0016\u0001"+
		"\u0000\u0000\u0000\u0082\u0083\u0005_\u0000\u0000\u0083\u0018\u0001\u0000"+
		"\u0000\u0000\u0084\u0085\u0005.\u0000\u0000\u0085\u001a\u0001\u0000\u0000"+
		"\u0000\u0086\u0087\u0005^\u0000\u0000\u0087\u001c\u0001\u0000\u0000\u0000"+
		"\u0088\u0089\t\u0000\u0000\u0000\u0089\u001e\u0001\u0000\u0000\u0000\u008a"+
		"\u008b\u0005P\u0000\u0000\u008b\u008c\u0005I\u0000\u0000\u008c\u008d\u0005"+
		"T\u0000\u0000\u008d\u008e\u0005C\u0000\u0000\u008e\u008f\u0005H\u0000"+
		"\u0000\u008f\u0090\u0005_\u0000\u0000\u0090\u0091\u0005S\u0000\u0000\u0091"+
		"\u0092\u0005P\u0000\u0000\u0092\u0093\u0005E\u0000\u0000\u0093\u0094\u0005"+
		"C\u0000\u0000\u0094\u0095\u0005I\u0000\u0000\u0095\u0096\u0005F\u0000"+
		"\u0000\u0096\u0097\u0005I\u0000\u0000\u0097\u0098\u0005C\u0000\u0000\u0098"+
		"\u0099\u0005A\u0000\u0000\u0099\u009a\u0005T\u0000\u0000\u009a\u009b\u0005"+
		"I\u0000\u0000\u009b\u009c\u0005O\u0000\u0000\u009c\u009d\u0005N\u0000"+
		"\u0000\u009d\u009e\u0005:\u0000\u0000\u009e \u0001\u0000\u0000\u0000\u009f"+
		"\u00a1\u0007\u0004\u0000\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a1"+
		"\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a3\u0001\u0000\u0000\u0000\u00a3\"\u0001\u0000\u0000\u0000\u0012\u0000"+
		"\',168?DJPUX]bhnp\u00a2\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}