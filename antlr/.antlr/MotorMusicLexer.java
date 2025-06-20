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
		UNRECOGNIZED=15;
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
			"UNRECOGNIZED"
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
			"CARROT", "UNRECOGNIZED"
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
		"\u0004\u0000\u000f\u0086\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0001\u0000\u0001\u0000\u0004\u0000\"\b\u0000\u000b\u0000\f\u0000#\u0001"+
		"\u0000\u0004\u0000\'\b\u0000\u000b\u0000\f\u0000(\u0001\u0000\u0004\u0000"+
		",\b\u0000\u000b\u0000\f\u0000-\u0001\u0000\u0004\u00001\b\u0000\u000b"+
		"\u0000\f\u00002\u0003\u00005\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0004\u0001:\b\u0001\u000b\u0001\f\u0001;\u0001\u0001\u0005\u0001?\b"+
		"\u0001\n\u0001\f\u0001B\t\u0001\u0001\u0001\u0005\u0001E\b\u0001\n\u0001"+
		"\f\u0001H\t\u0001\u0001\u0001\u0004\u0001K\b\u0001\u000b\u0001\f\u0001"+
		"L\u0001\u0001\u0005\u0001P\b\u0001\n\u0001\f\u0001S\t\u0001\u0003\u0001"+
		"U\b\u0001\u0001\u0002\u0004\u0002X\b\u0002\u000b\u0002\f\u0002Y\u0001"+
		"\u0002\u0004\u0002]\b\u0002\u000b\u0002\f\u0002^\u0001\u0002\u0001\u0002"+
		"\u0004\u0002c\b\u0002\u000b\u0002\f\u0002d\u0001\u0002\u0001\u0002\u0004"+
		"\u0002i\b\u0002\u000b\u0002\f\u0002j\u0003\u0002m\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0000\u0000\u000f\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u0001\u0000\u0004\u0002"+
		"\u0000\t\t  \u0006\u0000bdfhjnptvxzz\u0006\u0000aaeeiioouuyy\u0001\u0000"+
		"09\u0098\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u00014\u0001\u0000\u0000\u0000\u0003T\u0001"+
		"\u0000\u0000\u0000\u0005l\u0001\u0000\u0000\u0000\u0007n\u0001\u0000\u0000"+
		"\u0000\tp\u0001\u0000\u0000\u0000\u000br\u0001\u0000\u0000\u0000\rt\u0001"+
		"\u0000\u0000\u0000\u000fv\u0001\u0000\u0000\u0000\u0011x\u0001\u0000\u0000"+
		"\u0000\u0013z\u0001\u0000\u0000\u0000\u0015|\u0001\u0000\u0000\u0000\u0017"+
		"~\u0001\u0000\u0000\u0000\u0019\u0080\u0001\u0000\u0000\u0000\u001b\u0082"+
		"\u0001\u0000\u0000\u0000\u001d\u0084\u0001\u0000\u0000\u0000\u001f \u0005"+
		"\r\u0000\u0000 \"\u0005\n\u0000\u0000!\u001f\u0001\u0000\u0000\u0000\""+
		"#\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000"+
		"\u0000$5\u0001\u0000\u0000\u0000%\'\u0005\r\u0000\u0000&%\u0001\u0000"+
		"\u0000\u0000\'(\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000()\u0001"+
		"\u0000\u0000\u0000)5\u0001\u0000\u0000\u0000*,\u0005\n\u0000\u0000+*\u0001"+
		"\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000"+
		"-.\u0001\u0000\u0000\u0000.5\u0001\u0000\u0000\u0000/1\u0007\u0000\u0000"+
		"\u00000/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000020\u0001\u0000"+
		"\u0000\u000023\u0001\u0000\u0000\u000035\u0001\u0000\u0000\u00004!\u0001"+
		"\u0000\u0000\u00004&\u0001\u0000\u0000\u00004+\u0001\u0000\u0000\u0000"+
		"40\u0001\u0000\u0000\u000056\u0001\u0000\u0000\u000067\u0006\u0000\u0000"+
		"\u00007\u0002\u0001\u0000\u0000\u00008:\u0007\u0001\u0000\u000098\u0001"+
		"\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000"+
		";<\u0001\u0000\u0000\u0000<@\u0001\u0000\u0000\u0000=?\u0007\u0002\u0000"+
		"\u0000>=\u0001\u0000\u0000\u0000?B\u0001\u0000\u0000\u0000@>\u0001\u0000"+
		"\u0000\u0000@A\u0001\u0000\u0000\u0000AF\u0001\u0000\u0000\u0000B@\u0001"+
		"\u0000\u0000\u0000CE\u0007\u0001\u0000\u0000DC\u0001\u0000\u0000\u0000"+
		"EH\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000"+
		"\u0000GU\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IK\u0007\u0002"+
		"\u0000\u0000JI\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000LJ\u0001"+
		"\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000MQ\u0001\u0000\u0000\u0000"+
		"NP\u0007\u0001\u0000\u0000ON\u0001\u0000\u0000\u0000PS\u0001\u0000\u0000"+
		"\u0000QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000RU\u0001\u0000"+
		"\u0000\u0000SQ\u0001\u0000\u0000\u0000T9\u0001\u0000\u0000\u0000TJ\u0001"+
		"\u0000\u0000\u0000U\u0004\u0001\u0000\u0000\u0000VX\u0007\u0003\u0000"+
		"\u0000WV\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000YW\u0001\u0000"+
		"\u0000\u0000YZ\u0001\u0000\u0000\u0000Zm\u0001\u0000\u0000\u0000[]\u0007"+
		"\u0003\u0000\u0000\\[\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000"+
		"^\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000"+
		"\u0000`b\t\u0000\u0000\u0000ac\u0007\u0003\u0000\u0000ba\u0001\u0000\u0000"+
		"\u0000cd\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000"+
		"\u0000\u0000em\u0001\u0000\u0000\u0000fh\u0005.\u0000\u0000gi\u0007\u0003"+
		"\u0000\u0000hg\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jh\u0001"+
		"\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000km\u0001\u0000\u0000\u0000"+
		"lW\u0001\u0000\u0000\u0000l\\\u0001\u0000\u0000\u0000lf\u0001\u0000\u0000"+
		"\u0000m\u0006\u0001\u0000\u0000\u0000no\u0005{\u0000\u0000o\b\u0001\u0000"+
		"\u0000\u0000pq\u0005}\u0000\u0000q\n\u0001\u0000\u0000\u0000rs\u0005("+
		"\u0000\u0000s\f\u0001\u0000\u0000\u0000tu\u0005)\u0000\u0000u\u000e\u0001"+
		"\u0000\u0000\u0000vw\u0005<\u0000\u0000w\u0010\u0001\u0000\u0000\u0000"+
		"xy\u0005>\u0000\u0000y\u0012\u0001\u0000\u0000\u0000z{\u0005[\u0000\u0000"+
		"{\u0014\u0001\u0000\u0000\u0000|}\u0005]\u0000\u0000}\u0016\u0001\u0000"+
		"\u0000\u0000~\u007f\u0005_\u0000\u0000\u007f\u0018\u0001\u0000\u0000\u0000"+
		"\u0080\u0081\u0005.\u0000\u0000\u0081\u001a\u0001\u0000\u0000\u0000\u0082"+
		"\u0083\u0005^\u0000\u0000\u0083\u001c\u0001\u0000\u0000\u0000\u0084\u0085"+
		"\t\u0000\u0000\u0000\u0085\u001e\u0001\u0000\u0000\u0000\u0011\u0000#"+
		"(-24;@FLQTY^djl\u0001\u0000\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}