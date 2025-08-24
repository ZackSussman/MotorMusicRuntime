
import { ContainmentContext, SyllableGroupContext, SyllableGroupMultiContext, SyllableGroupSingleContext, TimeTaggedContainmentContext, TimeTaggedEmptyContext, TimeTaggedSyllableGroupContext } from "../../../../antlr/generated/MotorMusicParser";
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
import {range, serializeRange, terminalNodeToRange, getAllDirectionSpecifierRangesFromMotionSpecListContext} from "./ParserListenerUtils";
//the purpose of this parser is to run an initial phase through the code to create a map that will help 
//downstream parser listeners to more easily perform their tasks 

export class PreColoringProcessedSyllableGroupData {
    //ranges of all the syllables and ampersands in the group
    syllableRanges : range[]; //includes time tags
    ampersandRanges : range[];
    syllables : string[]; //the actual syllables

    constructor() {
        this.syllableRanges = [];
        this.ampersandRanges = [];
    }
}

//specifically for a syllable group that is the header of a containment
export class ContainingSyllableGroupData extends PreColoringProcessedSyllableGroupData {
    length : number; //relative to the unit pulse, this length is computed from the contained code 
    constructor() {
        super();
        this.length = 0;
    }
}

export class PrepareProcessedSyllableGroupDataListener extends MotorMusicParserListener {
    //downstream parser listeners will use these maps to look up syllable group data
    syllableGroupMap : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>;
    containmentGroupMap : Map<ContainmentContext, ContainingSyllableGroupData>;


    //the stack of syllable group types that we are currently processing
    containmentGroupContexts : ContainmentContext[];

    currentSyllableGroupContext : SyllableGroupContext;

    areCurrentSyllablesFromAContainmentGroup : boolean;

    constructor() {
        super();
        this.syllableGroupMap = new Map();
        this.containmentGroupMap = new Map();
        this.containmentGroupContexts = [];
        this.currentSyllableGroupContext = null;
        this.areCurrentSyllablesFromAContainmentGroup = false;
    }

    enterSyllableGroup = (ctx : SyllableGroupContext) => {
        if (!this.areCurrentSyllablesFromAContainmentGroup) {
            this.syllableGroupMap.set(ctx, new PreColoringProcessedSyllableGroupData());
            this.currentSyllableGroupContext = ctx;
            if (this.containmentGroupContexts.length > 0) {
                this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).length += 1;
            }
        
        }
    }
    
    enterTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
        this.syllableGroupMap.set(ctx, new PreColoringProcessedSyllableGroupData());
        this.currentSyllableGroupContext = ctx;
        if (this.containmentGroupContexts.length > 0) {
            this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).length += Number(ctx.NUMBER().getText());
        }
        this.syllableGroupMap.get(ctx).syllableRanges.push(terminalNodeToRange(ctx.NUMBER()));
    }
    enterContainment = (ctx : ContainmentContext) => {
        this.containmentGroupMap.set(ctx, new ContainingSyllableGroupData());
        this.containmentGroupContexts.push(ctx);
        this.areCurrentSyllablesFromAContainmentGroup = true;
    }
    exitContainment = (_ : ContainmentContext) => {
        this.containmentGroupContexts.pop();
    }

    enterSyllableGroupSingle =  (ctx: SyllableGroupSingleContext) => {
        if (!this.areCurrentSyllablesFromAContainmentGroup) {
            this.syllableGroupMap.get(this.currentSyllableGroupContext).syllableRanges.push(terminalNodeToRange(ctx.SYLLABLE()));
        }
        else {
            this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).syllableRanges.push(terminalNodeToRange(ctx.SYLLABLE()));
            this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).syllables.push(ctx.SYLLABLE().getText());
        }

        //the very last syllable in the containment group is always the 'SyllableGroupSingle', so at this point we are done processing the containment syllable group
        if (this.areCurrentSyllablesFromAContainmentGroup) { 
            this.areCurrentSyllablesFromAContainmentGroup = false; 
        }
    }

    enterSyllableGroupMulti =  (ctx: SyllableGroupMultiContext) => {
        if (!this.areCurrentSyllablesFromAContainmentGroup) {
            this.syllableGroupMap.get(this.currentSyllableGroupContext).syllableRanges.push(terminalNodeToRange(ctx.SYLLABLE()));
            this.syllableGroupMap.get(this.currentSyllableGroupContext).ampersandRanges.push(terminalNodeToRange(ctx.AMPERSAND()));
        }
        else {
            this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).syllableRanges.push(terminalNodeToRange(ctx.SYLLABLE()));
            this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).ampersandRanges.push(terminalNodeToRange(ctx.AMPERSAND()));
            this.containmentGroupMap.get(this.containmentGroupContexts.at(-1)).syllables.push(ctx.SYLLABLE().getText());
        }
    }

  

}