lexer grammar MotorMusicLexer;

channels { WS_CHANNEL }

WS: ('\r\n'+ | '\r'+ | '\n'+ | [ \t]+) -> channel(WS_CHANNEL);


FN : 'fn';

IDENT : ([qtplkjgfdszxcvbnmhrwaeiou] | [QTPLKJGFDSZXCVBNMHRWAEIOU])+;

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
MID : '|';
EQUALS : '=';
COLON : ':';
DASH : '-';
COMMA : ',';
SEMICOLON : ';';
EXCLAMATION : '!';

UNRECOGNIZED : .;