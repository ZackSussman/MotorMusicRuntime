
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
//                                      context for {|}  context for (|)
import { EmptyContext, DirectionSpecContext, TimeTaggedEmptyContext, SingleMotionSpecUpContext,
         SyllableGroupContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedSyllableGroupContext, 
        SingleMotionSpecDownContext, TowardsPrefixMotionSpecContext, AwayPrefixMotionSpecContext, Motion_spec_listContext, EndAwayFromMotionSpecContext, EndTowardsMotionSpecContext,
        ContainmentContext
} from "../../../../antlr/generated/MotorMusicParser";
import { TerminalNode } from "antlr4";
import {ContainingSyllableGroupData, PreColoringProcessedSyllableGroupData} from "./SyllableGroupProcess";


type range = [number, number, number, number];


//represents a location within a direction specification
export class DirectionSpecLocation {
    section : number //tells you the index of which section of the direction specification
    amount : number //ranges from 0 to 1. Is the percent through the repective section of the gesture
    globalAmount : number //ranges from 0 to 1. Is the percent through the entire gesture, rather than just the section
    constructor(section : number, amount : number, globalAmount : number) {
        this.section = section;
        this.amount = amount;
        this.globalAmount = globalAmount;
    }
}

export class AnimationSyllableGroupInfo {
    syllableRanges : range[]; //the array of ranges for all syllables in the group, including time tags or underscores
    ampersandRanges : range[]; //the array of ranges for all ampersands in thes yllable group
    currentLocation: number;// from 0 to 1, tells us how far along the syllable group we are (0 = beginneng, 1 = end)
    constructor(syllableRanges : range[], ampersandRanges : range[], currentLocation : number) {
        this.syllableRanges = syllableRanges;
        this.ampersandRanges = ampersandRanges;
        this.currentLocation = currentLocation;
    }
}

//Stores all the info that is needed for the coloring of a particular set of braces
export class BraceAnimationInfo {
    openBraceRange : range;
    closeBraceRange : range;
    directionIndicatorRanges : range[]; //the ranges of the up and down arrows
    depth : number; //the depth taken with respect to its type of brace, should match that given by the motorMusicTokensProvider
    currentLocation : DirectionSpecLocation //determines where we are within the direction specification, used by the js to decide the color intensity
    startsWithTowards : boolean; //used to indicate whether the initial segment of direction starts with towards or away from

    containerSyllableGroup : ContainingSyllableGroupData; //if the brace is contained by a syllable group, we store the data for that group here

    //in the last phase, this is used to find our accuminfo to construct the gestureLocation
    ctx : DirectionSpecContext | ContainmentContext;

    constructor(openBraceRange : range , closeBraceRange : range , directionIndicatorRanges : range[], depth : number, startsWithTowards : boolean, ctx : DirectionSpecContext | ContainmentContext) {
        this.openBraceRange = openBraceRange;
        this.closeBraceRange = closeBraceRange;
        this.directionIndicatorRanges = directionIndicatorRanges;
        this.startsWithTowards = startsWithTowards;
        this.depth = depth;
        this.ctx = ctx;
    }
}



//the object stores the info that is needed by the JS to perform its animation
export class AnimationInfo {
    leafSyllableGroup : AnimationSyllableGroupInfo; //data for the leaf level syllable group that we have to animate
    //all sets of braces that the current scope lies within are stored between the following field
    bracesInfo : BraceAnimationInfo[];
    constructor(leafSyllableGroup : AnimationSyllableGroupInfo, bracesInfo : BraceAnimationInfo[]) {
        this.leafSyllableGroup = leafSyllableGroup;
        this.bracesInfo = bracesInfo;
    }
}


//above the below line = classes forming stuff we will pass to the JS
//------------------------------------------------------------------ 
//below the above line = classes forming data we store here to help form the data above the line

//data we wish to accumulate for each brace during our parse tree
//we use this data to compute the DirectionSpecLocation
export class BraceAccumData {
    depth : number 
    sectionStartIndices : number[] //the indices (relative to the leaf syllables) of the first syllable of each section of the brace (in ascending order). 
    //tacked onto the very end of it we will also save the index of the first syllable outside of the brace. This will be used to determine the length of the final section in a clean way. 
    startsWithTowards : boolean;

    //we may populate with this if the brace represents a containment structure
    containmentSyllableGroupData : ContainingSyllableGroupData;

    constructor(depth : number, startsWithTowards : boolean, containmentSyllableGroupData : ContainingSyllableGroupData) {
        this.depth = depth;
        this.sectionStartIndices = [];
        this.startsWithTowards = startsWithTowards;
        this.containmentSyllableGroupData = containmentSyllableGroupData;
    }

    toString() {
        return ("midIndices: " + this.sectionStartIndices + "\n lastSyllable: ");
    }
}

//data for each syllable that we will accumulate in their order as we parse
//note that this can also represent the data for a syllable group where that syllable group is just an underscore
//in this case, the syllableRanges array will contain just the range for that underscore
class AnimationSyllableGroupData {
    duration : number; //units of this are in pulses (so it's the number of pulses)
    syllableRanges : range[] //where are the syllables in the code 
    numberRange : range //range for the corresponding number, may be undefined if the syllable does not have a number 
    ampersandRanges : range[] //ranges for the ampersands in the syllable group, may be empty
    constructor(duration : number, syllableRanges : range[], numberRange : range, ampersandRanges : range[]) {
        this.duration = duration;
        this.syllableRanges = syllableRanges;
        this.numberRange = numberRange;
        this.ampersandRanges = ampersandRanges;
    }
};


//walk the parse tree and conglomerate enough data to be able to efficiently construct an AnimationInfo object for a given elapsed time 
export class AnimationListener extends MotorMusicParserListener {

    timePerPulse : number;
    orderedLeafSyllableGroupData : AnimationSyllableGroupData[] //respects the order of syllables in the code, skipping any container syllable groups
   
    //map a syllable range to the set of direction specifications that it lies within
    bracesInfo : Map <range, BraceAnimationInfo[]>;

    //store the set of current braces that are in scope
    currentBracesInScope : (DirectionSpecContext | ContainmentContext)[];

    //keep track of the depths for each brace type
    bracesAccumData : Map<DirectionSpecContext | ContainmentContext, BraceAccumData>;
   
    //helpful data that was given to us
    //---------------------------------------------------------------
    syllableGroupData : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>;
    containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>;
    
    isCurrentSyllableFromAContainmentGroup : boolean;

    //syllableLength is the amount of time in seconds per syllable
    constructor(syllableLength : number, syllableGroupData : Map<SyllableGroupContext, PreColoringProcessedSyllableGroupData>, containmentGroupData : Map<ContainmentContext, ContainingSyllableGroupData>) {
        super();
        this.timePerPulse = syllableLength;
        this.orderedLeafSyllableGroupData = [];
        this.bracesInfo = new Map();
        this.bracesInfo = new Map();
        this.bracesAccumData = new Map();
        this.currentBracesInScope = []; 
        this.syllableGroupData = syllableGroupData;
        this.containmentGroupData = containmentGroupData;
        this.isCurrentSyllableFromAContainmentGroup = false;
    }

    terminalNodeToRange(n : TerminalNode) : range {
        return [n.symbol.line, n.symbol.column + 1, n.symbol.line, n.symbol.column + n.getText().length + 1];
    }

    private getDirectionSymbolRangesFromBracesAnimationInfoContext(ctx : DirectionSpecContext | ContainmentContext) : range[] {
       let motionSpecListCtx : Motion_spec_listContext = ctx._motion_spec;
       function processMotionSpecListContext(this_ : AnimationListener, ctx : Motion_spec_listContext) : range[] {
            if (ctx instanceof SingleMotionSpecDownContext || ctx instanceof EndAwayFromMotionSpecContext ) {
               return [this_.terminalNodeToRange(ctx.DOT())];
            }
            else if (ctx instanceof SingleMotionSpecUpContext || ctx instanceof EndTowardsMotionSpecContext) {
                return [this_.terminalNodeToRange(ctx.CARROT())];
            }
            else if (ctx instanceof TowardsPrefixMotionSpecContext) {
                let res = processMotionSpecListContext(this_, ctx._rest); 
                res.push(this_.terminalNodeToRange(ctx.DOT()));
                return res;
            }
            else if (ctx instanceof AwayPrefixMotionSpecContext) {
                let res = processMotionSpecListContext(this_, ctx._rest);
                res.push(this_.terminalNodeToRange(ctx.CARROT()));
                return res;
            }
       }
       return processMotionSpecListContext(this, motionSpecListCtx);
    }


    //every time we come across a syllable, we must instantiate the braces info for that syllable
    private updateBracesInfosForSyllableRange(syllableRange : range) {
        const bracesInfosForThisSyllable = [];
      
        for (let braceContext of this.currentBracesInScope) {
            let leftBraceRange = braceContext instanceof DirectionSpecContext ? 
                                this.terminalNodeToRange(braceContext.LPAREN()) :
                                this.terminalNodeToRange(braceContext.LCURLY());
            let rightBraceRange = braceContext instanceof DirectionSpecContext ?
                                this.terminalNodeToRange(braceContext.RPAREN()) :
                                this.terminalNodeToRange(braceContext.RCURLY());
            bracesInfosForThisSyllable.push(new BraceAnimationInfo(
                leftBraceRange,
                rightBraceRange,
                this.getDirectionSymbolRangesFromBracesAnimationInfoContext(braceContext),
                this.bracesAccumData.get(braceContext).depth,
                braceContext._motion_spec instanceof SingleMotionSpecDownContext
                                        ||
                braceContext._motion_spec instanceof TowardsPrefixMotionSpecContext
                                        || 
                braceContext._motion_spec instanceof EndAwayFromMotionSpecContext
                ,
                braceContext
            ));
        }
        this.bracesInfo.set(syllableRange, bracesInfosForThisSyllable);
    }

    //convert a token containing a number to an actual number
    private numberTokenToNumber(token : TerminalNode ) {
        let res = Number(token.getText());
        if (Number.isNaN(res)) {
            throw new Error("Bad tokenizer...accepted a number token which is not a number: " + token.getText());
        }
        return res;
    }


    enterSyllableGroup = (_ : SyllableGroupContext) => {
        //prepare for the next syllable group
        this.orderedLeafSyllableGroupData.push(new AnimationSyllableGroupData(1, [], undefined, [])); //undefined because there is no time tag
    }
    enterTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
        //prepare for the next syllable group
        this.orderedLeafSyllableGroupData.push(new AnimationSyllableGroupData(this.numberTokenToNumber(ctx.NUMBER()), [], this.terminalNodeToRange(ctx.NUMBER()), []));
    }
    enterEmpty = (ctx : EmptyContext) => {
        let underscoreRange = this.terminalNodeToRange(ctx.UNDERSCORE());
        this.orderedLeafSyllableGroupData.push(new AnimationSyllableGroupData(1, [underscoreRange], undefined, [])); //duration is 1 because it is an empty syllable
        this.updateBracesInfosForSyllableRange(underscoreRange);
    }
    enterTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
        let underscoreRange = this.terminalNodeToRange(ctx.UNDERSCORE());
        this.orderedLeafSyllableGroupData.push(new AnimationSyllableGroupData(this.numberTokenToNumber(ctx.NUMBER()), [underscoreRange], this.terminalNodeToRange(ctx.NUMBER()), []));
        this.updateBracesInfosForSyllableRange(underscoreRange);
    }

    
    private processSyllable(syllable : TerminalNode) {
        let thisSyllableRange : range = this.terminalNodeToRange(syllable);
        this.orderedLeafSyllableGroupData.at(-1).syllableRanges.push(thisSyllableRange);
        this.updateBracesInfosForSyllableRange(thisSyllableRange);
    }
    private processAmpersand(ampersand : TerminalNode) {
        this.orderedLeafSyllableGroupData.at(-1).ampersandRanges.push(this.terminalNodeToRange(ampersand));
    }
    enterSyllableGroupSingle = (ctx: SyllableGroupSingleContext) => {
        if (!this.isCurrentSyllableFromAContainmentGroup) {
            this.processSyllable(ctx.SYLLABLE());
        }
        else {
            this.isCurrentSyllableFromAContainmentGroup = false; //end of containment group
        }
   
    }
    enterSyllableGroupMulti = (ctx: SyllableGroupMultiContext) => {
        if (!this.isCurrentSyllableFromAContainmentGroup) {
            this.processSyllable(ctx.SYLLABLE());
            this.processAmpersand(ctx.AMPERSAND());
        }
    }

    enterDirectionSpec = (ctx : DirectionSpecContext) => {
        let startsWithTowards : boolean = 
         ctx._motion_spec instanceof SingleMotionSpecDownContext
                                        ||
         ctx._motion_spec instanceof TowardsPrefixMotionSpecContext
                                        || 
         ctx._motion_spec instanceof EndAwayFromMotionSpecContext

        this.currentBracesInScope.push(ctx);
        this.bracesAccumData.set(ctx, new BraceAccumData(this.currentBracesInScope.length - 1, startsWithTowards, undefined));
        this.bracesAccumData.get(ctx).sectionStartIndices.push(this.orderedLeafSyllableGroupData.length);
    }

    enterContainment = (ctx : ContainmentContext) => {
        let startsWithTowards : boolean = 
         ctx._motion_spec instanceof SingleMotionSpecDownContext
                                        ||
         ctx._motion_spec instanceof TowardsPrefixMotionSpecContext
                                        || 
         ctx._motion_spec instanceof EndAwayFromMotionSpecContext
        this.currentBracesInScope.push(ctx);
        this.bracesAccumData.set(ctx, new BraceAccumData(this.currentBracesInScope.length -1, startsWithTowards, this.containmentGroupData.get(ctx)));
        this.bracesAccumData.get(ctx).sectionStartIndices.push(this.orderedLeafSyllableGroupData.length);
        this.isCurrentSyllableFromAContainmentGroup = true;
    }
 
    exitDirectionSpec = (ctx : DirectionSpecContext) => {
        let dataToUpdate = this.bracesAccumData.get(ctx);
        dataToUpdate.sectionStartIndices.push(this.orderedLeafSyllableGroupData.length);
        this.currentBracesInScope.pop();
    }

    exitContainment = (ctx : ContainmentContext) => {
        let dataToUpdate = this.bracesAccumData.get(ctx);
        dataToUpdate.sectionStartIndices.push(this.orderedLeafSyllableGroupData.length);
        this.currentBracesInScope.pop();
    }

    visitTerminal = (t : TerminalNode) => {
        if (t.getText() == "." || t.getText() == "^") {
            //find the most recent brace context and update the appropriate BraceAccumData
            this.bracesAccumData.get(this.currentBracesInScope.at(-1)).sectionStartIndices.push(this.orderedLeafSyllableGroupData.length);        
        }
    }


    //find the syllable we would be within during this elapsed time
    private elapsedTimeToLeafSyllableGroupIndex(elapsedTime : number) {
        let simulatedTimeToStartOfThisSyllableGroup = 0;
        let currentSyllableGroupIndex = 0;
        let timeForSyllableGroup = (i : number) => this.timePerPulse * this.orderedLeafSyllableGroupData[i].duration;
        while (simulatedTimeToStartOfThisSyllableGroup + timeForSyllableGroup(currentSyllableGroupIndex) < elapsedTime) {
            simulatedTimeToStartOfThisSyllableGroup += timeForSyllableGroup(currentSyllableGroupIndex);
            currentSyllableGroupIndex += 1;
            if (currentSyllableGroupIndex >= this.orderedLeafSyllableGroupData.length) {
                return currentSyllableGroupIndex;
            }
        }
        return currentSyllableGroupIndex;
    }


    //find the total duration that a range of syllables will take up 
    //if we need to make this function more efficient, we can save a lot of work by storing an accumulated time array
    //and just taking the difference between entries, but for now this should be fine
    private syllableGroupRangeToTimeLength(startSyllableGroupIndex : number, numSyllableGroupsInRange : number) {
        let timeLength = 0;
        for (let i = 0; i < numSyllableGroupsInRange; i++) {
            let change = this.orderedLeafSyllableGroupData[i + startSyllableGroupIndex].duration * this.timePerPulse;
            timeLength += change
        }
        return timeLength;
    }


    public getAnimationInfoForTime(elapsedTime : number) : AnimationInfo {

        let thisSyllableGroupIndex = this.elapsedTimeToLeafSyllableGroupIndex(elapsedTime);
        if  (thisSyllableGroupIndex >= this.orderedLeafSyllableGroupData.length) {
            return undefined;
        }
        let currentSyllableGroup = this.orderedLeafSyllableGroupData[thisSyllableGroupIndex];
        
        let currentTimeWithinThisSyllableGroup = (elapsedTime - this.syllableGroupRangeToTimeLength(0, thisSyllableGroupIndex));
        let totalTimeForThisSyllableGroup = (currentSyllableGroup.duration * this.timePerPulse);
        let syllableLocation = currentTimeWithinThisSyllableGroup / totalTimeForThisSyllableGroup;

         //given the acc data, determine the location within the gesture of the brace
        function locationFromAccData(accData : BraceAccumData, this_ : AnimationListener ) {
            //section is the index of which section of the brace we are in 
            let sectionIndex = accData.sectionStartIndices.findLastIndex((n : number) => n <= thisSyllableGroupIndex);
            if (sectionIndex < 0) {
                throw new Error("Invariant broken: syllable group index does not lie within syllable group start indices. Index is " + thisSyllableGroupIndex + ", indices are " + accData.sectionStartIndices);
            }
            //now we must compute the amount through that section that we are 
            let totalTimeWithinThisSection = this_.syllableGroupRangeToTimeLength(accData.sectionStartIndices[sectionIndex], accData.sectionStartIndices[sectionIndex + 1] - accData.sectionStartIndices[sectionIndex]);
            let totalTimeSoFarWithinThisSection = elapsedTime - this_.syllableGroupRangeToTimeLength(0, accData.sectionStartIndices[sectionIndex]);

            //compute the global amount 
            let braceStartIndex = accData.sectionStartIndices[0];
            let braceEndIndex = accData.sectionStartIndices.at(-1);
            let totalTimeWithinThisBrace = this_.syllableGroupRangeToTimeLength(braceStartIndex, braceEndIndex - braceStartIndex);
            let totalTimeUpToCurrentSection = this_.syllableGroupRangeToTimeLength(braceStartIndex, accData.sectionStartIndices[sectionIndex] - braceStartIndex);
            let totalTimeSoFarWithinThisBrace = totalTimeUpToCurrentSection + totalTimeSoFarWithinThisSection;
            let globalAmount = totalTimeSoFarWithinThisBrace / totalTimeWithinThisBrace;

            return new DirectionSpecLocation(sectionIndex, totalTimeSoFarWithinThisSection/totalTimeWithinThisSection, globalAmount);

        }

        //guarntee: there is at least one syllable in the syllable group and all the syllables in the group point to the same set of braceAnimationInfos
        let bracesAnimationInfos = this.bracesInfo.get(currentSyllableGroup.syllableRanges[0]);

        bracesAnimationInfos.forEach(i => {
            i.currentLocation = locationFromAccData(this.bracesAccumData.get(i.ctx), this);
            i.containerSyllableGroup = i.ctx instanceof ContainmentContext ? 
                        this.bracesAccumData.get(i.ctx).containmentSyllableGroupData
                     : 
                     undefined;  
        });

        let currentSyllableGroupRanges = currentSyllableGroup.syllableRanges;
        if (currentSyllableGroup.numberRange != undefined) {
            currentSyllableGroupRanges.push(currentSyllableGroup.numberRange);
        }
        let syllableGroupAnimationInfo = new AnimationSyllableGroupInfo(currentSyllableGroupRanges, currentSyllableGroup.ampersandRanges, syllableLocation);
        return new AnimationInfo(syllableGroupAnimationInfo, bracesAnimationInfos);
    }
	
}