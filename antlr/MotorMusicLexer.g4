lexer grammar MotorMusicLexer;

channels { WS_CHANNEL }

WS: ('\r\n'+ | '\r'+ | '\n'+ | [ \t]+) -> channel(WS_CHANNEL);

SYLLABLE : DEFAULT_SYLLABLE | TWELVE_TET_SYLLABLE;

fragment DEFAULT_SYLLABLE : [qtplkjgfdszxcvbnmhrw]+[aeiuyo]*[qtplkjgfdszxcvbnmhrw]* | [aeiuyo]+[qtplkjgfdszxcvbnmhrw]*;
fragment TWELVE_TET_SYLLABLE : [A-G][#b]?[0-8]?;

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

PITCH_SPECIFICATION: 'PITCH_SPECIFICATION:' -> pushMode(PITCH_SPEC_MODE);

mode PITCH_SPEC_MODE;

PITCH_SPEC_WS: [ \t]+ -> channel(WS_CHANNEL);
PITCH_SPECIFICATION_VALUE: [a-zA-Z0-9().]+;
PITCH_SPEC_NEWLINE: [\r\n]+ -> popMode, channel(WS_CHANNEL);
