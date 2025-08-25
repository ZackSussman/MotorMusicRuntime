
import {Error} from "../Compile";
import {ParserRuleContext, TerminalNode} from "antlr4";
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { ContainmentContext, DirectionSpecContext, NonEmptyProgramWithDefaultPitchSpecificationContext, NonEmptyProgramWithPitchSpecificationContext, PitchSpecificationStatementContext, SyllableGroupMultiContext, SyllableGroupSingleContext, TimeTaggedSyllableGroupContext} from "../../../../antlr/generated/MotorMusicParser";

import { resolvePitchSpecificationString, PitchSpecification, } from "../SoundSpecification/PitchSpecifications";
import { resolve } from "path";

//we have to check that the parse tree actually encompasses the entire code
export class MotorMusicParserStaticAnalysisListener extends MotorMusicParserListener {

    errors : Error[] = [];

	parsedText : string

	programText : string

	mostRecentDirectionPerBraceStructure : string[]

	pitchSpecification : PitchSpecification = resolvePitchSpecificationString("Default()");

    constructor(programText) {
        super();
        this.errors = [];
		this.parsedText = "";
		this.programText = programText
		this.mostRecentDirectionPerBraceStructure = [];
    }

	private addError(message : string, ctx : ParserRuleContext) {
		let error = new Error(ctx.start.line, ctx.stop.line, ctx.start.column + 1, ctx.stop.column + 1, message);
		if (!(this.errors.includes(error))) {
			this.errors.push(error);
		}
	}

	private addErrorForTerminalNode(message : string, terminalNode : TerminalNode) {
		let error = new Error(terminalNode.symbol.line, terminalNode.symbol.line, terminalNode.symbol.column + 1, terminalNode.symbol.column + 1 + terminalNode.symbol.text.length, message);
		if (!(this.errors.includes(error))) {
			this.errors.push(error);
		}
	}


	private processSyllable (syllable : string, ctx : ParserRuleContext) {
		if (!this.pitchSpecification) {
			return; //this means the pitch specification was invalid and we already have an error for that 
		}
		if (!this.pitchSpecification.validateSyllable(syllable)) {
			this.addError("Invalid syllable for pitch specification: " + syllable, ctx);
		}
	}

	enterSyllableGroupSingle = (ctx: SyllableGroupSingleContext) => {
		this.processSyllable(ctx.SYLLABLE().getText(), ctx);
	}

	enterSyllableGroupMulti = (ctx: SyllableGroupMultiContext) => {
		this.processSyllable(ctx.SYLLABLE().getText(), ctx);
	}

	enterTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
		if (!this.pitchSpecification) {
			return;
		}
		let time = Number(ctx.NUMBER().getText());
		if (time == 0) {
			this.addError("Time scales must be non-zero", ctx);
		}
	}


	visitTerminal(node: TerminalNode): void {

		function checkChar(this_ : MotorMusicParserStaticAnalysisListener, symbol : string) {
			if (this_.mostRecentDirectionPerBraceStructure.at(-1) === symbol) {
				this_.addErrorForTerminalNode("Duplicate direction specifier", node);
			}
			else {
				this_.mostRecentDirectionPerBraceStructure[this_.mostRecentDirectionPerBraceStructure.length - 1] = symbol;
			}
		}
		let text = node.getText();
		if (text === "^" || text === ".") 
			checkChar(this, text);

	}

	enterDirectionSpec = (_: DirectionSpecContext) => {
		this.mostRecentDirectionPerBraceStructure.push("unknown");
	}

	enterContainment = (_: ContainmentContext) => {
		this.mostRecentDirectionPerBraceStructure.push("unknown");
	}

	exitContainment = (_: ContainmentContext) => {
		this.mostRecentDirectionPerBraceStructure.pop();
	}

	exitDirectionSpec = (_ : DirectionSpecContext) => {
		this.mostRecentDirectionPerBraceStructure.pop();
	}

	enterNonEmptyProgramWithDefaultPitchSpecification = (_ : NonEmptyProgramWithDefaultPitchSpecificationContext) => {
		this.pitchSpecification = resolvePitchSpecificationString("Default()");
	}

	
	enterNonEmptyProgramWithPitchSpecification = (ctx: NonEmptyProgramWithPitchSpecificationContext) => {
		let pitchSpecificationContext = (ctx.pitch_specification_statement() as PitchSpecificationStatementContext).PITCH_SPECIFICATION_VALUE()
		let pitchSpecificationText = pitchSpecificationContext.getText();
		try {
			this.pitchSpecification = resolvePitchSpecificationString(pitchSpecificationText);
		} catch (e) {
			this.addErrorForTerminalNode("Failed to resolve pitch specification: " + e.message, pitchSpecificationContext);
		}
	}
	
}