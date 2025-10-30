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
		AMPERSAND=15, UNRECOGNIZED=16;
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
			"WS", "SYLLABLE", "DEFAULT_SYLLABLE", "TWELVE_TET_SYLLABLE", "NUMBER", 
			"LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", "RANGLE", "LSQBRACKET", 
			"RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", "AMPERSAND", "UNRECOGNIZED"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'{'", "'}'", "'('", "')'", "'<'", "'>'", "'['", 
			"']'", "'_'", "'.'", "'^'", "'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "SYLLABLE", "NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", 
			"LANGLE", "RANGLE", "LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", 
			"CARROT", "AMPERSAND", "UNRECOGNIZED"
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
		"\u0004\u0000\u0010\u0099\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0001\u0000\u0001\u0000\u0004\u0000(\b\u0000\u000b\u0000\f\u0000)\u0001"+
		"\u0000\u0004\u0000-\b\u0000\u000b\u0000\f\u0000.\u0001\u0000\u0004\u0000"+
		"2\b\u0000\u000b\u0000\f\u00003\u0001\u0000\u0004\u00007\b\u0000\u000b"+
		"\u0000\f\u00008\u0003\u0000;\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0003\u0001A\b\u0001\u0001\u0002\u0004\u0002D\b\u0002\u000b"+
		"\u0002\f\u0002E\u0001\u0002\u0005\u0002I\b\u0002\n\u0002\f\u0002L\t\u0002"+
		"\u0001\u0002\u0005\u0002O\b\u0002\n\u0002\f\u0002R\t\u0002\u0001\u0002"+
		"\u0004\u0002U\b\u0002\u000b\u0002\f\u0002V\u0001\u0002\u0005\u0002Z\b"+
		"\u0002\n\u0002\f\u0002]\t\u0002\u0003\u0002_\b\u0002\u0001\u0003\u0001"+
		"\u0003\u0003\u0003c\b\u0003\u0001\u0003\u0003\u0003f\b\u0003\u0001\u0004"+
		"\u0004\u0004i\b\u0004\u000b\u0004\f\u0004j\u0001\u0004\u0001\u0004\u0004"+
		"\u0004o\b\u0004\u000b\u0004\f\u0004p\u0001\u0004\u0001\u0004\u0004\u0004"+
		"u\b\u0004\u000b\u0004\f\u0004v\u0001\u0004\u0004\u0004z\b\u0004\u000b"+
		"\u0004\f\u0004{\u0003\u0004~\b\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0000"+
		"\u0007\u0000\t\u0003\u000b\u0004\r\u0005\u000f\u0006\u0011\u0007\u0013"+
		"\b\u0015\t\u0017\n\u0019\u000b\u001b\f\u001d\r\u001f\u000e!\u000f#\u0010"+
		"\u0001\u0000\b\u0002\u0000\t\t  \u0006\u0000bdfhjnptvxzz\u0006\u0000a"+
		"aeeiioouuyy\u0001\u0000AG\u0002\u0000##bb\u0001\u000008\u0001\u000009"+
		"\u0001\u0000..\u00ac\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0001"+
		":\u0001\u0000\u0000\u0000\u0003@\u0001\u0000\u0000\u0000\u0005^\u0001"+
		"\u0000\u0000\u0000\u0007`\u0001\u0000\u0000\u0000\t}\u0001\u0000\u0000"+
		"\u0000\u000b\u007f\u0001\u0000\u0000\u0000\r\u0081\u0001\u0000\u0000\u0000"+
		"\u000f\u0083\u0001\u0000\u0000\u0000\u0011\u0085\u0001\u0000\u0000\u0000"+
		"\u0013\u0087\u0001\u0000\u0000\u0000\u0015\u0089\u0001\u0000\u0000\u0000"+
		"\u0017\u008b\u0001\u0000\u0000\u0000\u0019\u008d\u0001\u0000\u0000\u0000"+
		"\u001b\u008f\u0001\u0000\u0000\u0000\u001d\u0091\u0001\u0000\u0000\u0000"+
		"\u001f\u0093\u0001\u0000\u0000\u0000!\u0095\u0001\u0000\u0000\u0000#\u0097"+
		"\u0001\u0000\u0000\u0000%&\u0005\r\u0000\u0000&(\u0005\n\u0000\u0000\'"+
		"%\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000"+
		"\u0000)*\u0001\u0000\u0000\u0000*;\u0001\u0000\u0000\u0000+-\u0005\r\u0000"+
		"\u0000,+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000.,\u0001\u0000"+
		"\u0000\u0000./\u0001\u0000\u0000\u0000/;\u0001\u0000\u0000\u000002\u0005"+
		"\n\u0000\u000010\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u000031\u0001"+
		"\u0000\u0000\u000034\u0001\u0000\u0000\u00004;\u0001\u0000\u0000\u0000"+
		"57\u0007\u0000\u0000\u000065\u0001\u0000\u0000\u000078\u0001\u0000\u0000"+
		"\u000086\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009;\u0001\u0000"+
		"\u0000\u0000:\'\u0001\u0000\u0000\u0000:,\u0001\u0000\u0000\u0000:1\u0001"+
		"\u0000\u0000\u0000:6\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000"+
		"<=\u0006\u0000\u0000\u0000=\u0002\u0001\u0000\u0000\u0000>A\u0003\u0005"+
		"\u0002\u0000?A\u0003\u0007\u0003\u0000@>\u0001\u0000\u0000\u0000@?\u0001"+
		"\u0000\u0000\u0000A\u0004\u0001\u0000\u0000\u0000BD\u0007\u0001\u0000"+
		"\u0000CB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EC\u0001\u0000"+
		"\u0000\u0000EF\u0001\u0000\u0000\u0000FJ\u0001\u0000\u0000\u0000GI\u0007"+
		"\u0002\u0000\u0000HG\u0001\u0000\u0000\u0000IL\u0001\u0000\u0000\u0000"+
		"JH\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KP\u0001\u0000\u0000"+
		"\u0000LJ\u0001\u0000\u0000\u0000MO\u0007\u0001\u0000\u0000NM\u0001\u0000"+
		"\u0000\u0000OR\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000Q_\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000"+
		"SU\u0007\u0002\u0000\u0000TS\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000"+
		"\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000W[\u0001\u0000"+
		"\u0000\u0000XZ\u0007\u0001\u0000\u0000YX\u0001\u0000\u0000\u0000Z]\u0001"+
		"\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000"+
		"\\_\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000^C\u0001\u0000\u0000"+
		"\u0000^T\u0001\u0000\u0000\u0000_\u0006\u0001\u0000\u0000\u0000`b\u0007"+
		"\u0003\u0000\u0000ac\u0007\u0004\u0000\u0000ba\u0001\u0000\u0000\u0000"+
		"bc\u0001\u0000\u0000\u0000ce\u0001\u0000\u0000\u0000df\u0007\u0005\u0000"+
		"\u0000ed\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000f\b\u0001\u0000"+
		"\u0000\u0000gi\u0007\u0006\u0000\u0000hg\u0001\u0000\u0000\u0000ij\u0001"+
		"\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000"+
		"kl\u0001\u0000\u0000\u0000ln\u0007\u0007\u0000\u0000mo\u0007\u0006\u0000"+
		"\u0000nm\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pn\u0001\u0000"+
		"\u0000\u0000pq\u0001\u0000\u0000\u0000q~\u0001\u0000\u0000\u0000rt\u0007"+
		"\u0007\u0000\u0000su\u0007\u0006\u0000\u0000ts\u0001\u0000\u0000\u0000"+
		"uv\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000"+
		"\u0000w~\u0001\u0000\u0000\u0000xz\u0007\u0006\u0000\u0000yx\u0001\u0000"+
		"\u0000\u0000z{\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000{|\u0001"+
		"\u0000\u0000\u0000|~\u0001\u0000\u0000\u0000}h\u0001\u0000\u0000\u0000"+
		"}r\u0001\u0000\u0000\u0000}y\u0001\u0000\u0000\u0000~\n\u0001\u0000\u0000"+
		"\u0000\u007f\u0080\u0005{\u0000\u0000\u0080\f\u0001\u0000\u0000\u0000"+
		"\u0081\u0082\u0005}\u0000\u0000\u0082\u000e\u0001\u0000\u0000\u0000\u0083"+
		"\u0084\u0005(\u0000\u0000\u0084\u0010\u0001\u0000\u0000\u0000\u0085\u0086"+
		"\u0005)\u0000\u0000\u0086\u0012\u0001\u0000\u0000\u0000\u0087\u0088\u0005"+
		"<\u0000\u0000\u0088\u0014\u0001\u0000\u0000\u0000\u0089\u008a\u0005>\u0000"+
		"\u0000\u008a\u0016\u0001\u0000\u0000\u0000\u008b\u008c\u0005[\u0000\u0000"+
		"\u008c\u0018\u0001\u0000\u0000\u0000\u008d\u008e\u0005]\u0000\u0000\u008e"+
		"\u001a\u0001\u0000\u0000\u0000\u008f\u0090\u0005_\u0000\u0000\u0090\u001c"+
		"\u0001\u0000\u0000\u0000\u0091\u0092\u0005.\u0000\u0000\u0092\u001e\u0001"+
		"\u0000\u0000\u0000\u0093\u0094\u0005^\u0000\u0000\u0094 \u0001\u0000\u0000"+
		"\u0000\u0095\u0096\u0005&\u0000\u0000\u0096\"\u0001\u0000\u0000\u0000"+
		"\u0097\u0098\t\u0000\u0000\u0000\u0098$\u0001\u0000\u0000\u0000\u0014"+
		"\u0000).38:@EJPV[^bejpv{}\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}