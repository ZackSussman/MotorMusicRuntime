lexer grammar MotorMusicLexer;

channels { WS_CHANNEL }

WS: ('\r\n'+ | '\r'+ | '\n'+ | [ \t]+) -> channel(WS_CHANNEL);

SYLLABLE : SHASHAVIC_SYLLABLE | DEFAULT_SYLLABLE | TWELVE_TET_SYLLABLE;

fragment DEFAULT_SYLLABLE : [qtplkjgfdszxcvbnmhrw]+[aeiuyo]*[qtplkjgfdszxcvbnmhrw]* | [aeiuyo]+[qtplkjgfdszxcvbnmhrw]*;
fragment TWELVE_TET_SYLLABLE : [A-G][#b]?[0-8]?;
fragment SHASHAVIC_SYLLABLE : [A-Z][a-z]+;

NUMBER : [0-9]+[.][0-9]+ | [.][0-9]+ | [0-9]+;

LCURLY : '{';
RCURLY : '}';
LPAREN : '(';
RPAREN : ')';
LANGLE : '<';
RANGLE : '>';
LSQBRACKET : '[';
RSQBRACKET : ']';
UNDERSCORE : '_';
DOT: '.';
CARROT : '^';
AMPERSAND : '&';

UNRECOGNIZED : .;