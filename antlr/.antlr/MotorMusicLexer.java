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
			"WS", "SYLLABLE", "DEFAULT_SYLLABLE", "TWELVE_TET_SYLLABLE", "SHASHAVIC_SYLLABLE", 
			"NUMBER", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", "RANGLE", 
			"LSQBRACKET", "RSQBRACKET", "UNDERSCORE", "DOT", "CARROT", "AMPERSAND", 
			"UNRECOGNIZED"
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
		"\u0004\u0000\u0010\u00a2\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0004\u0000*\b\u0000"+
		"\u000b\u0000\f\u0000+\u0001\u0000\u0004\u0000/\b\u0000\u000b\u0000\f\u0000"+
		"0\u0001\u0000\u0004\u00004\b\u0000\u000b\u0000\f\u00005\u0001\u0000\u0004"+
		"\u00009\b\u0000\u000b\u0000\f\u0000:\u0003\u0000=\b\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001D\b\u0001"+
		"\u0001\u0002\u0004\u0002G\b\u0002\u000b\u0002\f\u0002H\u0001\u0002\u0005"+
		"\u0002L\b\u0002\n\u0002\f\u0002O\t\u0002\u0001\u0002\u0005\u0002R\b\u0002"+
		"\n\u0002\f\u0002U\t\u0002\u0001\u0002\u0004\u0002X\b\u0002\u000b\u0002"+
		"\f\u0002Y\u0001\u0002\u0005\u0002]\b\u0002\n\u0002\f\u0002`\t\u0002\u0003"+
		"\u0002b\b\u0002\u0001\u0003\u0001\u0003\u0003\u0003f\b\u0003\u0001\u0003"+
		"\u0003\u0003i\b\u0003\u0001\u0004\u0001\u0004\u0004\u0004m\b\u0004\u000b"+
		"\u0004\f\u0004n\u0001\u0005\u0004\u0005r\b\u0005\u000b\u0005\f\u0005s"+
		"\u0001\u0005\u0001\u0005\u0004\u0005x\b\u0005\u000b\u0005\f\u0005y\u0001"+
		"\u0005\u0001\u0005\u0004\u0005~\b\u0005\u000b\u0005\f\u0005\u007f\u0001"+
		"\u0005\u0004\u0005\u0083\b\u0005\u000b\u0005\f\u0005\u0084\u0003\u0005"+
		"\u0087\b\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0000\u0000\u0013\u0001\u0001\u0003\u0002\u0005\u0000\u0007\u0000\t\u0000"+
		"\u000b\u0003\r\u0004\u000f\u0005\u0011\u0006\u0013\u0007\u0015\b\u0017"+
		"\t\u0019\n\u001b\u000b\u001d\f\u001f\r!\u000e#\u000f%\u0010\u0001\u0000"+
		"\n\u0002\u0000\t\t  \u0006\u0000bdfhjnptvxzz\u0006\u0000aaeeiioouuyy\u0001"+
		"\u0000AG\u0002\u0000##bb\u0001\u000008\u0001\u0000AZ\u0001\u0000az\u0001"+
		"\u000009\u0001\u0000..\u00b6\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000"+
		"\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0001<\u0001\u0000\u0000\u0000\u0003C\u0001\u0000\u0000\u0000\u0005"+
		"a\u0001\u0000\u0000\u0000\u0007c\u0001\u0000\u0000\u0000\tj\u0001\u0000"+
		"\u0000\u0000\u000b\u0086\u0001\u0000\u0000\u0000\r\u0088\u0001\u0000\u0000"+
		"\u0000\u000f\u008a\u0001\u0000\u0000\u0000\u0011\u008c\u0001\u0000\u0000"+
		"\u0000\u0013\u008e\u0001\u0000\u0000\u0000\u0015\u0090\u0001\u0000\u0000"+
		"\u0000\u0017\u0092\u0001\u0000\u0000\u0000\u0019\u0094\u0001\u0000\u0000"+
		"\u0000\u001b\u0096\u0001\u0000\u0000\u0000\u001d\u0098\u0001\u0000\u0000"+
		"\u0000\u001f\u009a\u0001\u0000\u0000\u0000!\u009c\u0001\u0000\u0000\u0000"+
		"#\u009e\u0001\u0000\u0000\u0000%\u00a0\u0001\u0000\u0000\u0000\'(\u0005"+
		"\r\u0000\u0000(*\u0005\n\u0000\u0000)\'\u0001\u0000\u0000\u0000*+\u0001"+
		"\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000"+
		",=\u0001\u0000\u0000\u0000-/\u0005\r\u0000\u0000.-\u0001\u0000\u0000\u0000"+
		"/0\u0001\u0000\u0000\u00000.\u0001\u0000\u0000\u000001\u0001\u0000\u0000"+
		"\u00001=\u0001\u0000\u0000\u000024\u0005\n\u0000\u000032\u0001\u0000\u0000"+
		"\u000045\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000"+
		"\u0000\u00006=\u0001\u0000\u0000\u000079\u0007\u0000\u0000\u000087\u0001"+
		"\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000"+
		":;\u0001\u0000\u0000\u0000;=\u0001\u0000\u0000\u0000<)\u0001\u0000\u0000"+
		"\u0000<.\u0001\u0000\u0000\u0000<3\u0001\u0000\u0000\u0000<8\u0001\u0000"+
		"\u0000\u0000=>\u0001\u0000\u0000\u0000>?\u0006\u0000\u0000\u0000?\u0002"+
		"\u0001\u0000\u0000\u0000@D\u0003\u0005\u0002\u0000AD\u0003\u0007\u0003"+
		"\u0000BD\u0003\t\u0004\u0000C@\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000"+
		"\u0000CB\u0001\u0000\u0000\u0000D\u0004\u0001\u0000\u0000\u0000EG\u0007"+
		"\u0001\u0000\u0000FE\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"HF\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IM\u0001\u0000\u0000"+
		"\u0000JL\u0007\u0002\u0000\u0000KJ\u0001\u0000\u0000\u0000LO\u0001\u0000"+
		"\u0000\u0000MK\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NS\u0001"+
		"\u0000\u0000\u0000OM\u0001\u0000\u0000\u0000PR\u0007\u0001\u0000\u0000"+
		"QP\u0001\u0000\u0000\u0000RU\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000"+
		"\u0000ST\u0001\u0000\u0000\u0000Tb\u0001\u0000\u0000\u0000US\u0001\u0000"+
		"\u0000\u0000VX\u0007\u0002\u0000\u0000WV\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000"+
		"Z^\u0001\u0000\u0000\u0000[]\u0007\u0001\u0000\u0000\\[\u0001\u0000\u0000"+
		"\u0000]`\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000"+
		"\u0000\u0000_b\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000aF\u0001"+
		"\u0000\u0000\u0000aW\u0001\u0000\u0000\u0000b\u0006\u0001\u0000\u0000"+
		"\u0000ce\u0007\u0003\u0000\u0000df\u0007\u0004\u0000\u0000ed\u0001\u0000"+
		"\u0000\u0000ef\u0001\u0000\u0000\u0000fh\u0001\u0000\u0000\u0000gi\u0007"+
		"\u0005\u0000\u0000hg\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000"+
		"i\b\u0001\u0000\u0000\u0000jl\u0007\u0006\u0000\u0000km\u0007\u0007\u0000"+
		"\u0000lk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000nl\u0001\u0000"+
		"\u0000\u0000no\u0001\u0000\u0000\u0000o\n\u0001\u0000\u0000\u0000pr\u0007"+
		"\b\u0000\u0000qp\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000sq\u0001"+
		"\u0000\u0000\u0000st\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000"+
		"uw\u0007\t\u0000\u0000vx\u0007\b\u0000\u0000wv\u0001\u0000\u0000\u0000"+
		"xy\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000"+
		"\u0000z\u0087\u0001\u0000\u0000\u0000{}\u0007\t\u0000\u0000|~\u0007\b"+
		"\u0000\u0000}|\u0001\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000"+
		"\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080"+
		"\u0087\u0001\u0000\u0000\u0000\u0081\u0083\u0007\b\u0000\u0000\u0082\u0081"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0082"+
		"\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0087"+
		"\u0001\u0000\u0000\u0000\u0086q\u0001\u0000\u0000\u0000\u0086{\u0001\u0000"+
		"\u0000\u0000\u0086\u0082\u0001\u0000\u0000\u0000\u0087\f\u0001\u0000\u0000"+
		"\u0000\u0088\u0089\u0005{\u0000\u0000\u0089\u000e\u0001\u0000\u0000\u0000"+
		"\u008a\u008b\u0005}\u0000\u0000\u008b\u0010\u0001\u0000\u0000\u0000\u008c"+
		"\u008d\u0005(\u0000\u0000\u008d\u0012\u0001\u0000\u0000\u0000\u008e\u008f"+
		"\u0005)\u0000\u0000\u008f\u0014\u0001\u0000\u0000\u0000\u0090\u0091\u0005"+
		"<\u0000\u0000\u0091\u0016\u0001\u0000\u0000\u0000\u0092\u0093\u0005>\u0000"+
		"\u0000\u0093\u0018\u0001\u0000\u0000\u0000\u0094\u0095\u0005[\u0000\u0000"+
		"\u0095\u001a\u0001\u0000\u0000\u0000\u0096\u0097\u0005]\u0000\u0000\u0097"+
		"\u001c\u0001\u0000\u0000\u0000\u0098\u0099\u0005_\u0000\u0000\u0099\u001e"+
		"\u0001\u0000\u0000\u0000\u009a\u009b\u0005.\u0000\u0000\u009b \u0001\u0000"+
		"\u0000\u0000\u009c\u009d\u0005^\u0000\u0000\u009d\"\u0001\u0000\u0000"+
		"\u0000\u009e\u009f\u0005&\u0000\u0000\u009f$\u0001\u0000\u0000\u0000\u00a0"+
		"\u00a1\t\u0000\u0000\u0000\u00a1&\u0001\u0000\u0000\u0000\u0015\u0000"+
		"+05:<CHMSY^aehnsy\u007f\u0084\u0086\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}