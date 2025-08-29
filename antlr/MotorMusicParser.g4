parser grammar MotorMusicParser;

options {tokenVocab = MotorMusicLexer;}

compilationUnit:
      EOF #EmptyProgram
    | p = exp_or_gesture EOF #NonEmptyProgram
;


raised_gesture_list:
    top = gesture #RaisedSingle
  | top = gesture rest = raised_gesture_list #RaisedMulti
;

motion_spec_list:
     top = raised_gesture_list DOT  #SingleMotionSpecDown
  |  top = raised_gesture_list CARROT #SingleMotionSpecUp
  | top = raised_gesture_list DOT rest = motion_spec_list #TowardsPrefixMotionSpec
  | top = raised_gesture_list CARROT rest = motion_spec_list #AwayPrefixMotionSpec
  | top = raised_gesture_list DOT rest = raised_gesture_list #EndAwayFromMotionSpec
  | top = raised_gesture_list CARROT rest = raised_gesture_list #EndTowardsMotionSpec
;

syllable_group:
    syllable = exp #SyllableGroupSingle
  | top = exp AMPERSAND rest = syllable_group #SyllableGroupMulti
;

gesture:
    UNDERSCORE #Empty
  | number = exp UNDERSCORE #TimeTaggedEmpty
  | syllables = syllable_group #SyllableGroup
  | number = exp syllables = syllable_group #TimeTaggedSyllableGroup
  | LPAREN motion_spec = motion_spec_list RPAREN #DirectionSpec
  | syllables = syllable_group LCURLY motion_spec = motion_spec_list RCURLY #Containment
;


input_type:
  builtin = IDENT #BuiltInInputType
 | LPAREN literal = type RPAREN #WrappedInputType
;

type:
   builtin = IDENT #BuiltIn
  | inType = input_type DASH RANGLE outType = type #FunctionType
;

  



exp:
   symbol = IDENT #IdentExp
  | number = NUMBER #NumberExp
  | func = exp LPAREN arg = exp_or_gesture RPAREN #Eval
  | FN decl_name = IDENT LPAREN argName = IDENT COLON inTyp = type RPAREN COLON outType = type EQUALS RANGLE out = exp_or_gesture SEMICOLON in = exp_or_gesture #Decl
  | FN LPAREN arg = IDENT COLON inTyp = type RPAREN COLON outType = type EQUALS RANGLE out = exp_or_gesture #AnomDecl
  | LPAREN within = exp_or_gesture RPAREN #WrappedExp;

 
 exp_or_gesture:
    e = exp #ExpExpOrGesture
  | g = gesture #GestureExpOrGesture;