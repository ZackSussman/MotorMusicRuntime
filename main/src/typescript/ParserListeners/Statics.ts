
import {Error} from "../Compile";
import {ParserRuleContext} from "antlr4";
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { NonEmptyProgramWithDefaultPitchSpecificationContext, NonEmptyProgramWithPitchSpecificationContext, SyllableContext, TimeTaggedSyllableContext } from "../../../../antlr/generated/MotorMusicParser";

import { resolvePitchSpecificationString, PitchSpecification, } from "../SoundSpecification/PitchSpecifications";

//we have to check that the parse tree actually encompasses the entire code
export class MotorMusicParserStaticAnalysisListener extends MotorMusicParserListener {

    errors : Error[] = [];

	parsedText : string

	programText : string


	pitchSpecification : PitchSpecification

    constructor(programText) {
        super();
        this.errors = [];
		this.parsedText = "";
		this.programText = programText
    }

	private addError(message : string, ctx : ParserRuleContext) {
		let error = new Error(ctx.start.line, ctx.stop.line, ctx.start.column + 1, ctx.stop.column + 1, message);
		if (!(this.errors.includes(error))) {
			this.errors.push(error);
		}
	}

	enterTimeTaggedSyllable = (ctx: TimeTaggedSyllableContext) => {
		let time = Number(ctx.NUMBER().getText());
		if (time == 0) {
			this.addError("Time scales must be non-zero", ctx);
		}

		if (!this.pitchSpecification.validateSyllable(ctx.SYLLABLE().getText())) {
			this.addError("Invalid syllable for pitch specification: " + ctx.SYLLABLE().getText(), ctx);
		}
	}

	enterSyllable = (ctx: SyllableContext) => {
		if (!this.pitchSpecification.validateSyllable(ctx.SYLLABLE().getText())) {
			this.addError("Invalid syllable for pitch specification: " + ctx.SYLLABLE().getText(), ctx);
		}
	}

	enterNonEmptyProgramWithDefaultPitchSpecification = (_ : NonEmptyProgramWithDefaultPitchSpecificationContext) => {
		this.pitchSpecification = resolvePitchSpecificationString("PITCH_SPECIFICATION: new DefaultPitchSpecification()");
		
	}

	enterNonEmptyProgramWithPitchSpecification = (ctx: NonEmptyProgramWithPitchSpecificationContext) => {
		try {
			this.pitchSpecification = resolvePitchSpecificationString(ctx.PITCH_SPECIFICATION().getText());
		} catch (e) {
			this.addError("Failed to resolve pitch specification: " + e.message, ctx);
		}
	}
	
}