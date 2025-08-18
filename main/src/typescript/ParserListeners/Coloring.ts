
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { TerminalNode } from "antlr4";
import {range, serializeRange, terminalNodeToRange, getAllDirectionSpecifierRangesFromMotionSpecListContext} from "./ParserListenerUtils";
import {DirectionSpecContext, EmptyContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedEmptyContext, TimeTaggedSyllableGroupContext, NonEmptyProgramWithPitchSpecificationContext, PitchSpecificationStatementContext, SyllableGroupContext} from "../../../../antlr/generated/MotorMusicParser";


//Here is where we dynamically decide the actual colors for all the tokens


//data for a set of Parens that we care about 
class ParenData {
    ParenBasedRanges : range[]; //The ranges corresponding to this set of Parens. This includes all direction specifiers, the (, and the )
    depth: number; //at what depth does this Paren sit relative to top level? 
   
    //the ranges of all the syllables which live at the IMMEDIATE enclosed level of this Paren
    //organized by groups
    //[[group one ranges], [group two ranges], ...]
    immediateSyllableBasedRanges : range[][] 

    ampersandRanges : range[] //the ranges of all the ampersands binding syllables toegther in the Paren
    constructor(r : range[], d : number) {
        this.ParenBasedRanges = r;
        this.depth = d;
        this.immediateSyllableBasedRanges = [];
        this.ampersandRanges = [];
    } 
}

class SingleObjectData {
    syllableRanges : range[]; //the _ or syllables as well as any time tag 
    ampersandRanges : range[];

    constructor(syllableRanges : range[], ampersandRanges : range[]) {
        this.syllableRanges = syllableRanges;
        this.ampersandRanges = ampersandRanges;
    }
}

//this class walks the parse tree to build a map which stores for each range corresponding to a Paren, what color should be used 
//for that range 
export class ParenColoringListener extends MotorMusicParserListener {

    finalizedData : ParenData[]; 

    //in the case that the program consists of just one syllable (no parens), we store the relevant data herer
    singleObjectData : SingleObjectData;

    //the current stack of Parens - when Parens leave and enter, we make the necessary updates
    //only on exit of a Paren can we transfer some of the finalized data to the finalizedData as they are finalized
    currentParensInScope : ParenData[]

    //the maximum depth obtained through the entire program
    maxDepth : number;

    pitchSpecificationRanges : range[] = [];


    constructor() {
        super();
        this.currentParensInScope = [];
        this.finalizedData = [];
        this.maxDepth = -1;
    }

    private getRangesFromCtx(ctx : DirectionSpecContext) {
        let res = [];
        res.push(terminalNodeToRange(ctx.LPAREN()));
        res.push(terminalNodeToRange(ctx.RPAREN()));
        return res.concat(getAllDirectionSpecifierRangesFromMotionSpecListContext(ctx._motion_spec));
    }

    enterPitchSpecificationStatement =  (ctx: PitchSpecificationStatementContext) => {
        this.pitchSpecificationRanges.push(terminalNodeToRange(ctx.PITCH_SPECIFICATION_VALUE()));
        this.pitchSpecificationRanges.push(terminalNodeToRange(ctx.PITCH_SPECIFICATION()));
    }
    
   

    enterDirectionSpec = (ctx : DirectionSpecContext) => {
        let currentDepth = this.currentParensInScope.length;
        //need to construct the initial Paren data for this ctx. The maxDepth won't be finalized until we push the Paren
        this.currentParensInScope.push(new ParenData(
            this.getRangesFromCtx(ctx),
            currentDepth
        ));
        if (currentDepth + 1 > this.maxDepth) {
            this.maxDepth = currentDepth + 1;
        }
    }
    
    exitDirectionSpec = (_ : DirectionSpecContext) => {
        this.finalizedData.push(this.currentParensInScope.pop());
    }

    processSyllable(syllable : TerminalNode) {
        let syllableRange = terminalNodeToRange(syllable);
        if (this.currentParensInScope.length > 0) {
            let currentParen = this.currentParensInScope.at(-1);
            let immediateSyllableBasedRangesToWorkWith =  currentParen.immediateSyllableBasedRanges;
            immediateSyllableBasedRangesToWorkWith.at(-1).push(syllableRange);
        }
        else {
            if (this.singleObjectData === undefined) {
                this.singleObjectData = new SingleObjectData([syllableRange], []);
            }
            else {
                this.singleObjectData.syllableRanges.push(syllableRange);
            }
        }
    }

    processAmpersand(ampersand : TerminalNode) {
        let ampersandRange = terminalNodeToRange(ampersand);
        if (this.currentParensInScope.length > 0) {
            let currentParen = this.currentParensInScope.at(-1);
            currentParen.ampersandRanges.push(ampersandRange);
        }
        else {
            //we must already have single object data at this point due to the parsing
            this.singleObjectData.ampersandRanges.push(ampersandRange);
        }
    }

    enterSyllableGroupSingle = (ctx: SyllableGroupSingleContext) => {
       this.processSyllable(ctx.SYLLABLE());
    }

    enterSyllableGroupMulti = (ctx: SyllableGroupMultiContext) => {
        this.processSyllable(ctx.SYLLABLE());
        this.processAmpersand(ctx.AMPERSAND());
    }

    enterSyllableGroup =  (ctx: SyllableGroupContext) => {
        //prepare for the upcoming syllable group
        this.currentParensInScope.at(-1).immediateSyllableBasedRanges.push([]);
    }

    enterTimeTaggedSyllableGroup =  (ctx: TimeTaggedSyllableGroupContext) => {
        //prepare for the upcoming syllable group
        this.currentParensInScope.at(-1).immediateSyllableBasedRanges.push([]);
        //start it off by treating the timetag as a syllable
        this.processSyllable(ctx.NUMBER());
    }



    //treat empty as a syllable group with a single syllable of _

    enterEmpty = (ctx: EmptyContext) => {
        this.currentParensInScope.at(-1).immediateSyllableBasedRanges.push([]);
        this.processSyllable(ctx.UNDERSCORE());
    }
    enterTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
        this.currentParensInScope.at(-1).immediateSyllableBasedRanges.push([]);
        this.processSyllable(ctx.NUMBER());
        this.processSyllable(ctx.UNDERSCORE());
    }


private getDistinctColor(level: number, numColors: number): string {
    if (numColors <= 0) throw new Error("numColors must be > 0");
    if (level < 0 || level >= numColors) throw new Error("level must be in [0, numColors)");

    const coolStart = 180;
    const coolEnd = 300;
    const hueRange = coolEnd - coolStart;

    let hue: number;
    if (numColors === 1) {
        hue = (coolStart + coolEnd) / 2; // just the middle hue to avoid division by 0
    } else {
        hue = coolStart + (hueRange * level) / (numColors - 1);
    }

    const saturation = 70;
    const lightness = 60;

    return this.hslToHex(hue, saturation, lightness);
}

// Helper function: Convert HSL to HEX
private hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h < 60) [r, g, b] = [c, x, 0];
    else if (h < 120) [r, g, b] = [x, c, 0];
    else if (h < 180) [r, g, b] = [0, c, x];
    else if (h < 240) [r, g, b] = [0, x, c];
    else if (h < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    const toHex = (v: number) =>
        Math.round((v + m) * 255)
            .toString(16)
            .padStart(2, "0")
            .toUpperCase();

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

    private brightenColor(hex: string, amount: number = -30): string {
        // Remove the '#' if it exists
        hex = hex.replace(/^#/, "");
    
        // Parse r, g, b components
        const num = parseInt(hex, 16);
        let r = (num >> 16) & 0xff;
        let g = (num >> 8) & 0xff;
        let b = num & 0xff;
    
        // Increase each component, capped at 255
        r = Math.max(Math.min(255, r + amount), 0);
        g = Math.max(Math.min(255, g + amount), 0);
        b = Math.max(Math.min(255, b + amount), 0);
    
        // Convert back to hex
        const toHex = (value: number): string => value.toString(16).padStart(2, "0").toUpperCase();
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    private darkenColor(hex: string, amount: number = 30): string {
        // Remove the '#' if it exists
        hex = hex.replace(/^#/, "");
    
        // Parse r, g, b components
        const num = parseInt(hex, 16);
        let r = (num >> 16) & 0xff;
        let g = (num >> 8) & 0xff;
        let b = num & 0xff;
    
        // Decrease each component, capped at 0
        r = Math.max(0, r - amount);
        g = Math.max(0, g - amount);
        b = Math.max(0, b - amount);
    
        // Convert back to hex
        const toHex = (value: number): string => value.toString(16).padStart(2, "0").toUpperCase();
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    //call this after walking the parse tree to generate the colors 
    public buildColorMap() : Map<range, string>{
        let res = new Map();

        for (let range of this.pitchSpecificationRanges) {
            //set it to white for these
            res.set(serializeRange(range), "#FFFFFF"); //pitch specification is always at depth 0
        }

        for (let parenData of this.finalizedData) { 
            //maxDepth starts at 0 
            //console.log("p depth is " + parenData.depth);
            //console.log("max depth is " + this.maxDepth + 1);
            let thisParenColor = this.getDistinctColor(parenData.depth, this.maxDepth + 1);
            for (let range of parenData.ParenBasedRanges) {                                             
                res.set(serializeRange(range), thisParenColor);
            }
            for (let group of parenData.immediateSyllableBasedRanges) {
                for (let range of group) {
                    res.set(serializeRange(range), this.brightenColor(thisParenColor));
                }
            }
            for (let ampersandRange of parenData.ampersandRanges) {
                res.set(serializeRange(ampersandRange), this.darkenColor(thisParenColor));
            }
                                                                           
        }
      
        if (this.singleObjectData != undefined) {
            for (let range of this.singleObjectData.syllableRanges) {
                res.set(serializeRange(range), this.getDistinctColor(0, 1));
            }
        }
      
        
        return res;
    }
}