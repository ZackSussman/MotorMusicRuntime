/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import {CharStream, Token} from "antlr4"
import MotorMusicLexer from "../../../antlr/generated/MotorMusicLexer"
import { PreColoringProcessedSyllableGroupData, ContainingSyllableGroupData } from "./ParserListeners/SyllableGroupProcess";
export function createLexer(input: string) {
    const chars = new CharStream(input);
    const lexer = new MotorMusicLexer(chars);
    return lexer;
}

export function lex(input: string) : Token[] {
    return createLexer(input).getAllTokens()
}


import {CommonTokenStream, ErrorListener} from 'antlr4'
import MotorMusicParser from "../../../antlr/generated/MotorMusicParser"

class ConsoleErrorListener extends ErrorListener<Token> {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.log("ERROR " + msg);
    }
}


function createParserFromLexer(lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new MotorMusicParser(tokens);
}


export class ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
    constructor(startLine: number, endLine: number, startCol: number, endCol: number, message: string) {
        this.startLine = startLine;
        this.endLine = endLine;
        this.startCol = startCol;
        this.endCol = endCol;
        this.message = message;
    }
}

export class CollectorErrorListener extends ErrorListener<Token> {
    private errors : ParserError[] = []
    constructor(errors: ParserError[]) {
        super()
        this.errors = errors
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        var endColumn = column + 1;
        if (offendingSymbol._text !== null) {
            endColumn = column + offendingSymbol._text.length;
        }
        this.errors.push(new ParserError(line, line, column, endColumn, msg));
    }
}



type animationFunction = (elapsedTime : number) => AnimationInfo



function parse(input : string, errors : ParserError[]) {
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ConsoleErrorListener());
    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new CollectorErrorListener(errors));
    return parser.compilationUnit();
}

//We can hink of compilation as the process which morphs the code into the user experience 
//this function is essentially the high level view of that entire process
import {ParseTreeWalker} from "antlr4";
import {MotorMusicParserStaticAnalysisListener} from "./ParserListeners/Statics";
import {AnimationListener, AnimationInfo} from "./ParserListeners/Animations";
import { ProgramColoringListener } from "./ParserListeners/Coloring";
import { PrepareProcessedSyllableGroupDataListener } from "./ParserListeners/SyllableGroupProcess";
//import {AudioGeneratorListener} from "./ParserListeners/AudioGeneratorListener";
import {audioStream} from "./audio/Audio";
import {range} from "./ParserListeners/ParserListenerUtils";


function makeProcessForSyllableTime(globalRuntimeData) {
    function process(input : string) : 
        [Map<range, string>, animationFunction, audioStream , ParserError[]] 
        {
        let errors : ParserError[] = [];
        let tree = parse(input, errors)
        let staticAnalysisListener = new MotorMusicParserStaticAnalysisListener();
        ParseTreeWalker.DEFAULT.walk(staticAnalysisListener, tree);
        errors = errors.concat(staticAnalysisListener.errors);
        if (errors.length === 0) {

            
            let prepareProcessedSyllableGroupDataListener = new PrepareProcessedSyllableGroupDataListener();
            ParseTreeWalker.DEFAULT.walk(prepareProcessedSyllableGroupDataListener, tree);

            let colorMapBuilder = new ProgramColoringListener(prepareProcessedSyllableGroupDataListener.syllableGroupMap, prepareProcessedSyllableGroupDataListener.containmentGroupMap);
            ParseTreeWalker.DEFAULT.walk(colorMapBuilder, tree);

            
            let animationListener = new AnimationListener(globalRuntimeData.syllableTime, prepareProcessedSyllableGroupDataListener.syllableGroupMap, prepareProcessedSyllableGroupDataListener.containmentGroupMap);
            ParseTreeWalker.DEFAULT.walk(animationListener, tree);
            function packageGetAnimationInfo(x : number) {
                return animationListener.getAnimationInfoForTime(x);
            }
    
            /*
            let audioGeneratorListener = new AudioGeneratorListener(globalRuntimeData.syllableTime, animationListener.bracesAccumData, prepareProcessedSyllableGroupDataListener.containmentGroupMap);
            ParseTreeWalker.DEFAULT.walk(audioGeneratorListener, tree);
            */

       

            return [colorMapBuilder.buildColorMap(), packageGetAnimationInfo, undefined , errors];
        }
        return [undefined, undefined, undefined, errors];
    }
    return process
}



export function initializeGlobalRuntime(globalRuntimeData) {
    return {
        process: makeProcessForSyllableTime(globalRuntimeData)
    };
}
