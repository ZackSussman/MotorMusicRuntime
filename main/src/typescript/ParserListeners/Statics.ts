
import {Error} from "../Compile";
import {ParserRuleContext, TerminalNode} from "antlr4";
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { ContainmentContext, DirectionSpecContext,TimeTaggedSyllableGroupContext} from "../../../../antlr/generated/MotorMusicParser";


//we have to check that the parse tree actually encompasses the entire code
export class MotorMusicParserStaticAnalysisListener extends MotorMusicParserListener {

    errors : Error[] = [];

	parsedText : string

	programText : string

	mostRecentDirectionPerBraceStructure : string[]

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


	enterTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
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
	
}