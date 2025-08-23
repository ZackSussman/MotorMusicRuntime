parser grammar MotorMusicParser;

options {tokenVocab = MotorMusicLexer;}

compilationUnit:
      e = EOF #EmptyProgram
    | e = gesture EOF #NonEmptyProgramWithDefaultPitchSpecification
    | s = pitch_specification_statement e = gesture EOF #NonEmptyProgramWithPitchSpecification
;


pitch_specification_statement:
  PITCH_SPECIFICATION p = PITCH_SPECIFICATION_VALUE #PitchSpecificationStatement
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
    syllable = SYLLABLE #SyllableGroupSingle
  | top = SYLLABLE AMPERSAND rest = syllable_group #SyllableGroupMulti
;

gesture:
    UNDERSCORE #Empty
  | number = NUMBER UNDERSCORE #TimeTaggedEmpty
  | syllables = syllable_group #SyllableGroup
  | number = NUMBER syllables = syllable_group #TimeTaggedSyllableGroup
  | LPAREN motion_spec = motion_spec_list RPAREN #DirectionSpec
  | syllables = syllable_group LCURLY motion_spec = motion_spec_list RCURLY #Containment
  | number = NUMBER syllables = syllable_group LCURLY motion_spec = motion_spec_list RCURLY #TimeTaggedContainment
;
