
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import { TerminalNode } from "antlr4";
import {range, serializeRange, terminalNodeToRange, getAllDirectionSpecifierRangesFromMotionSpecListContext} from "./ParserListenerUtils";
import {DirectionSpecContext, EmptyContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedEmptyContext, TimeTaggedSyllableGroupContext, NonEmptyProgramWithPitchSpecificationContext, PitchSpecificationStatementContext, SyllableGroupContext, ContainmentContext} from "../../../../antlr/generated/MotorMusicParser";
import { PreColoringProcessedSyllableGroupData, ContainingSyllableGroupData } from "./SyllableGroupProcess";

//Here is where we dynamically decide the actual colors for all the tokens


//data for a set of Braces that we care about 
//a brace is either a Paren () or a Containment {}
class BraceData {
    braceBasedRanges : range[]; //The ranges corresponding to this set of Braces. This includes all direction specifiers, the (, and the )
    depth: number; //at what depth does this Brace sit relative to top level? 

    //the ranges of all the syllables which live at the IMMEDIATE enclosed level of this Brace
    //organized by groups
    //[[group one ranges], [group two ranges], ...]
    immediateSyllableGroupBasedRanges : range[][] 
    immediateAmpersandRanges : range[] //the ranges of all the ampersands binding syllables (or containments) together in the Brace

    constructor(r : range[], d : number) {
        this.braceBasedRanges = r;
        this.depth = d;
        this.immediateSyllableGroupBasedRanges = [];
        this.immediateAmpersandRanges = [];
    } 
}

class BraceFreeSyllableGroupData {
    syllableRanges : range[]; //the _ or syllables as well as any time tag 
    ampersandRanges : range[];

    constructor(syllableRanges : range[], ampersandRanges : range[]) {
        this.syllableRanges = syllableRanges;
        this.ampersandRanges = ampersandRanges;
    }
}

//this class walks the parse tree to build a map which stores for each range corresponding to all elements of the program 
//and their respective static colors
export class ProgramColoringListener extends MotorMusicParserListener {

    //data we need to construct--------------------------------------------
    finalizedData : BraceData[]; 

    //in the case that the program consists of just one syllable (no parens), or a single containment, we store the 
    //syllable group data outside of any parens here
    braceFreeSyllableGroupData : BraceFreeSyllableGroupData;

    //the current stack of Braces - when Braces leave and enter, we make the necessary updates
    //only on exit of a Brace can we transfer some of the finalized data to the finalizedData as they are finalized
    currentBracesInScope : BraceData[]

    //the maximum depth obtained through the entire program
    maxDepth : number;

    pitchSpecificationRanges : range[];
    //--------------------------------------------------------------


    //data we are given------------------------------------------------
    //computed by a previous pass through the parse tree by the PrepareProcessedSyllableGroupDataListener
    syllableGroupData : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>;
    containingSyllableGroupData : Map<ContainmentContext, ContainingSyllableGroupData>;
    //--------------------------------------------------------------

    constructor(syllableGroupData : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>, containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>) {
        super();
        this.currentBracesInScope = [];
        this.finalizedData = [];
        this.maxDepth = -1;
        this.pitchSpecificationRanges = [];
        this.syllableGroupData = syllableGroupData;
        this.containingSyllableGroupData = containmentGroupData;
    }

    private getRangesFromDirectionSpecCtx(ctx : DirectionSpecContext) {
        let res = [];
        res.push(terminalNodeToRange(ctx.LPAREN()));
        res.push(terminalNodeToRange(ctx.RPAREN()));
        return res.concat(getAllDirectionSpecifierRangesFromMotionSpecListContext(ctx._motion_spec));
    }

    private getRangesFromContainmentCtx(ctx : ContainmentContext) {
        let res = [];
        res.push(terminalNodeToRange(ctx.LCURLY()));
        res.push(terminalNodeToRange(ctx.RCURLY()));
        return res.concat(getAllDirectionSpecifierRangesFromMotionSpecListContext(ctx._motion_spec));
    }

    enterPitchSpecificationStatement =  (ctx: PitchSpecificationStatementContext) => {
        this.pitchSpecificationRanges.push(terminalNodeToRange(ctx.PITCH_SPECIFICATION_VALUE()));
        this.pitchSpecificationRanges.push(terminalNodeToRange(ctx.PITCH_SPECIFICATION()));
    }
   

    enterDirectionSpec = (ctx : DirectionSpecContext) => {
        let currentDepth = this.currentBracesInScope.length;
        //need to construct the initial Brace data for this ctx. The maxDepth won't be finalized until we push the Brace
        this.currentBracesInScope.push(new BraceData(
            this.getRangesFromDirectionSpecCtx(ctx),
            currentDepth
        ));
        if (currentDepth + 1 > this.maxDepth) {
            this.maxDepth = currentDepth + 1;
        }
    }
    
    exitDirectionSpec = (_ : DirectionSpecContext) => {
        this.finalizedData.push(this.currentBracesInScope.pop());
    }
    exitContainment = (_ : ContainmentContext) => {
        this.finalizedData.push(this.currentBracesInScope.pop());
    }


    private processSyllableGroupData (data : PreColoringProcessedSyllableGroupData) {
        if (this.currentBracesInScope.length === 0) {
            //we are not in any braces, so this syllable group is the entire program 
            this.braceFreeSyllableGroupData = new BraceFreeSyllableGroupData(data.syllableRanges, data.ampersandRanges);
        }
        else {
            this.currentBracesInScope.at(-1).immediateSyllableGroupBasedRanges.push(data.syllableRanges);
            for (let range of data.ampersandRanges) {
                this.currentBracesInScope.at(-1).immediateAmpersandRanges.push(range);
            }
        }
    }

    enterSyllableGroup = (ctx : SyllableGroupContext) => {
        this.processSyllableGroupData(this.syllableGroupData.get(ctx));
    }
    enterTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
        this.processSyllableGroupData(this.syllableGroupData.get(ctx));
    }


    enterContainment =  (ctx: ContainmentContext) => {
        let containmentData = this.containingSyllableGroupData.get(ctx);
        if (this.currentBracesInScope.length === 0) {
            //we are not in any braces, so this containment is on the outside of the whole program
            this.braceFreeSyllableGroupData = new BraceFreeSyllableGroupData(containmentData.syllableRanges, containmentData.ampersandRanges);
            return;
        }
        
        //first push all of the data for the containment group into the current brace in scope
        this.currentBracesInScope.at(-1).immediateSyllableGroupBasedRanges.push(containmentData.syllableRanges);
        for (let range of containmentData.ampersandRanges) {
            this.currentBracesInScope.at(-1).immediateAmpersandRanges.push(range);
        }
        //next, we need to push a new BraceData for this containment
        let currentDepth = this.currentBracesInScope.length;
        this.currentBracesInScope.push(new BraceData(
            this.getRangesFromContainmentCtx(ctx),
            currentDepth
        ));
        if (currentDepth > this.maxDepth) {
            this.maxDepth = currentDepth;
        }
        
    }

    //treat empty as a syllable group with a single syllable of _
    enterEmpty = (ctx: EmptyContext) => {
        let underscoreRange = terminalNodeToRange(ctx.UNDERSCORE());
        if (this.currentBracesInScope.length === 0) {
            this.braceFreeSyllableGroupData = new BraceFreeSyllableGroupData([underscoreRange], []);
        }
        else {
            this.currentBracesInScope.at(-1).immediateSyllableGroupBasedRanges.push([underscoreRange]);
        }        
    }

    enterTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
        let underscoreRange = terminalNodeToRange(ctx.UNDERSCORE());
        let timeTagRange = terminalNodeToRange(ctx.NUMBER());
        if (this.currentBracesInScope.length === 0) {
            this.braceFreeSyllableGroupData = new BraceFreeSyllableGroupData([timeTagRange, underscoreRange], []);
        }
        else {
            this.currentBracesInScope.at(-1).immediateSyllableGroupBasedRanges.push([timeTagRange, underscoreRange]);
        }
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

    private brightenColor(hex: string, amount: number = 30): string {
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

        for (let braceData of this.finalizedData) { 
            //maxDepth starts at 0 
            //console.log("p depth is " + parenData.depth);
            //console.log("max depth is " + this.maxDepth + 1);
            let thisBraceColor = this.getDistinctColor(braceData.depth, this.maxDepth + 1);
            for (let range of braceData.braceBasedRanges) {                                             
                res.set(serializeRange(range), thisBraceColor);
            }
            for (let group of braceData.immediateSyllableGroupBasedRanges) {
                for (let range of group) {
                    res.set(serializeRange(range), this.brightenColor(thisBraceColor));
                }
            }
            for (let ampersandRange of braceData.immediateAmpersandRanges) {
                res.set(serializeRange(ampersandRange), this.darkenColor(thisBraceColor));
            }
                                                                           
        }
      
        if (this.braceFreeSyllableGroupData != undefined) {
            let colorToUse = this.getDistinctColor(0, 1);
            for (let range of this.braceFreeSyllableGroupData.syllableRanges) {
                res.set(serializeRange(range), this.brightenColor(colorToUse));
            }
            for (let range of this.braceFreeSyllableGroupData.ampersandRanges) {
                console.log("darkening color for ampersand single object data");
                res.set(serializeRange(range), this.darkenColor(colorToUse));
            }
        }
      
        
        return res;
    }
}