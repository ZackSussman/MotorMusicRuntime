
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
import MotorMusicParserListener from "../../../../antlr/generated/MotorMusicParserListener";
//                                      context for {|}  context for (|)
import { EmptyContext, DirectionSpecContext, TimeTaggedEmptyContext, SingleMotionSpecUpContext,
         SyllableGroupContext, SyllableGroupSingleContext, SyllableGroupMultiContext, TimeTaggedSyllableGroupContext, 
        SingleMotionSpecDownContext, TowardsPrefixMotionSpecContext, AwayPrefixMotionSpecContext, Motion_spec_listContext, EndAwayFromMotionSpecContext, EndTowardsMotionSpecContext
} from "../../../../antlr/generated/MotorMusicParser";
import { TerminalNode } from "antlr4";


type range = [number, number, number, number];


//represents a location within a direction specification
export class DirectionSpecLocation {
    section : number //tells you the index of which section of the direction specification
    amount : number //ranges from 0 to 1. Is the percent through the repective section of the gesture
    constructor(section : number, amount : number) {
        this.section = section;
        this.amount = amount;
    }
}


//Stores all the info that is needed for the coloring of a particular set of braces
export class DirectionSpecAnimationInfo {
    openParenRange : range;
    closeParenRange : range;
    directionIndicatorRanges : range[]; //the ranges of the up and down arrows
    depth : number; //the depth taken with respect to its type of brace, should match that given by the motorMusicTokensProvider
    currentLocation : DirectionSpecLocation //determines where we are within the direction specification, used by the js to decide the color intensity 
    startsWithTowards : boolean; //used to indicate whether the initial segment of direction staorts with towards or away from

    //in the last phase, this is used to find our accuminfo to construct the gestureLocation
    ctx : DirectionSpecContext;

    constructor(openParenRange : range , closeParenRange : range , directionIndicatorRanges : range[], depth : number, startsWithTowards : boolean, ctx : DirectionSpecContext) {
        this.openParenRange = openParenRange;
        this.closeParenRange = closeParenRange;
        this.directionIndicatorRanges = directionIndicatorRanges;
        this.startsWithTowards = startsWithTowards;
        this.depth = depth;
        this.ctx = ctx;
    }
}

//the object stores the info that is needed by the JS to perform its animation
export class AnimationInfo {
    currentSyllableGroupSyllableRanges : range[]; //array of ranges for the syllables to light up for the current syllable group 
    currentSyllableGroupAmpersandRanges : range[]; //ranges for the ampersands in the current syllable group
    //note we need it to be an array so we can potentially have information for a syllable as well as a number in front of it 
    currentSyllableLocation : number; //from 0 to 1, tells us how far along the syllable we are 
    //all sets of braces that the current scope lies within are stored between the following field
    parensInfo : DirectionSpecAnimationInfo[];
    constructor(syllableGroupSyllableRanges : range[], syllableGroupAmpersandRanges : range[], syllableLocation : number, p : DirectionSpecAnimationInfo[]) {
        this.currentSyllableGroupSyllableRanges = syllableGroupSyllableRanges;
        this.currentSyllableGroupAmpersandRanges = syllableGroupAmpersandRanges;
        this.currentSyllableLocation = syllableLocation;
        this.parensInfo = p;
    }
}


//above the beleow line = classes forming sutff we will pass to the JS
//------------------------------------------------------------------ 
//below the above line = classes forming data we store here to help form the data above the line

//data we wish to accumulate for each brace during our parse tree
//we use this data to compute the DirectionSpecLocation
export class BraceAccumData {
    depth : number 
    sectionStartIndices : number[] //the indices of the first syllable of each section of the brace (in ascending order). 
    //tacked onto the very end of it we will also save the index of the first syllable outside of the brace. This will be used to determine the length of the final section in a clean way. 
    startsWithTowards : boolean;
    constructor(depth : number, startsWithTowards : boolean) {
        this.depth = depth;
        this.sectionStartIndices = [];
        this.startsWithTowards = startsWithTowards;
    }

    toString() {
        return ("midIndices: " + this.sectionStartIndices + "\n lastSyllable: ");
    }
}

//data for each syllable that we will accumulate in their order as we parse
//note that this can also represent the data for a syllable group where that syllable group is just an underscore
//in this case, the syllableRanges array will contain just the range for that underscore
class SyllableGroupData {
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

/*
export enum BraceType {
    Bracket,
    Paren
}
*/

//walk the parse tree and conglomerate enough data to be able to efficiently construct an AnimationInfo object for a given elapsed time 
export class AnimationListener extends MotorMusicParserListener {

    timePerPulse : number;
    orderedSyllableGroupData : SyllableGroupData[] //respects the order of syllables in the code - for each syllable, we store its range 
   
    //map a syllable range to the set of direction specifications that it lies within
    parensInfo : Map <range, DirectionSpecAnimationInfo[]>;

    //store the set of current braces that are in scope
    currentParensInScope : DirectionSpecContext[];

    //keep track of the depths for each brace type
    parensAccumData : Map<DirectionSpecContext, BraceAccumData>;


    //syllableLength is the amount of time in seconds per syllable
    constructor(syllableLength : number) {
        super();
        this.timePerPulse = syllableLength;
        this.orderedSyllableGroupData = [];
        this.parensInfo = new Map();
        this.parensInfo = new Map();
        this.parensAccumData = new Map();
        this.currentParensInScope = []; 
    }

    terminalNodeToRange(n : TerminalNode) : range {
        return [n.symbol.line, n.symbol.column + 1, n.symbol.line, n.symbol.column + n.getText().length + 1];
    }

    private getDirectionSymbolRangesFromDirectionSpecAnimationInfoContext(ctx : DirectionSpecContext) : range[] {
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
        const parensInfosForThisSyllable = [];
        for (let parensContext of this.currentParensInScope) {
            parensInfosForThisSyllable.push(new DirectionSpecAnimationInfo(
                this.terminalNodeToRange(parensContext.LPAREN()),
                this.terminalNodeToRange(parensContext.RPAREN()),
                this.getDirectionSymbolRangesFromDirectionSpecAnimationInfoContext(parensContext),
                this.parensAccumData.get(parensContext).depth,
                parensContext._motion_spec instanceof SingleMotionSpecDownContext
                                        ||
                parensContext._motion_spec instanceof TowardsPrefixMotionSpecContext
                                        || 
                parensContext._motion_spec instanceof EndAwayFromMotionSpecContext
                ,
                parensContext
            ));
        }
        this.parensInfo.set(syllableRange, parensInfosForThisSyllable);
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
        this.orderedSyllableGroupData.push(new SyllableGroupData(1, [], undefined, [])); //undefined because there is no time tag
    }
    enterTimeTaggedSyllableGroup = (ctx: TimeTaggedSyllableGroupContext) => {
        //prepare for the next syllable group
        this.orderedSyllableGroupData.push(new SyllableGroupData(this.numberTokenToNumber(ctx.NUMBER()), [], this.terminalNodeToRange(ctx.NUMBER()), []));
    }
    enterEmpty = (ctx : EmptyContext) => {
        let underscoreRange = this.terminalNodeToRange(ctx.UNDERSCORE());
        this.orderedSyllableGroupData.push(new SyllableGroupData(1, [underscoreRange], undefined, [])); //duration is 1 because it is an empty syllable
        this.updateBracesInfosForSyllableRange(underscoreRange);
    }
    enterTimeTaggedEmpty = (ctx: TimeTaggedEmptyContext) => {
        let underscoreRange = this.terminalNodeToRange(ctx.UNDERSCORE());
        this.orderedSyllableGroupData.push(new SyllableGroupData(this.numberTokenToNumber(ctx.NUMBER()), [underscoreRange], this.terminalNodeToRange(ctx.NUMBER()), []));
        this.updateBracesInfosForSyllableRange(underscoreRange);
    }
    private processSyllable(syllable : TerminalNode) {
        let thisSyllableRange : range = this.terminalNodeToRange(syllable);
        this.orderedSyllableGroupData.at(-1).syllableRanges.push(thisSyllableRange);
        this.updateBracesInfosForSyllableRange(thisSyllableRange);
    }
    private processAmpersand(ampersand : TerminalNode) {
        this.orderedSyllableGroupData.at(-1).ampersandRanges.push(this.terminalNodeToRange(ampersand));
    }
    enterSyllableGroupSingle = (ctx: SyllableGroupSingleContext) => {
        this.processSyllable(ctx.SYLLABLE());
    }
    enterSyllableGroupMulti = (ctx: SyllableGroupMultiContext) => {
        this.processSyllable(ctx.SYLLABLE());
        this.processAmpersand(ctx.AMPERSAND());
    }

    enterDirectionSpec = (ctx : DirectionSpecContext) => {
        let startsWithTowards : boolean = 
         ctx._motion_spec instanceof SingleMotionSpecDownContext
                                        ||
         ctx._motion_spec instanceof TowardsPrefixMotionSpecContext
                                        || 
         ctx._motion_spec instanceof EndAwayFromMotionSpecContext

        this.currentParensInScope.push(ctx);
        this.parensAccumData.set(ctx, new BraceAccumData(this.currentParensInScope.length - 1, startsWithTowards));
        this.parensAccumData.get(ctx).sectionStartIndices.push(this.orderedSyllableGroupData.length);   
    }

    exitDirectionSpec = (ctx : DirectionSpecContext) => {
        let dataToUpdate = this.parensAccumData.get(ctx);
        dataToUpdate.sectionStartIndices.push(this.orderedSyllableGroupData.length);
        this.currentParensInScope.pop();
    }

    visitTerminal = (t : TerminalNode) => {
        if (t.getText() == "." || t.getText() == "^") {
            //find the most recent brace context and update the appropriate BraceAccumData
            this.parensAccumData.get(this.currentParensInScope.at(-1)).sectionStartIndices.push(this.orderedSyllableGroupData.length);        
        }
    }


    //find the syllable we would be within during this elapsed time
    private elapsedTimeToSyllableGroupIndex(elapsedTime : number) {
        let simulatedTimeToStartOfThisSyllableGroup = 0;
        let currentSyllableGroupIndex = 0;
        let timeForSyllableGroup = (i : number) => this.timePerPulse * this.orderedSyllableGroupData[i].duration;
        while (simulatedTimeToStartOfThisSyllableGroup + timeForSyllableGroup(currentSyllableGroupIndex) < elapsedTime) {
            simulatedTimeToStartOfThisSyllableGroup += timeForSyllableGroup(currentSyllableGroupIndex);
            currentSyllableGroupIndex += 1;
            if (currentSyllableGroupIndex >= this.orderedSyllableGroupData.length) {
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
            let change = this.orderedSyllableGroupData[i + startSyllableGroupIndex].duration * this.timePerPulse;
            timeLength += change
        }
        return timeLength;
    }


    public getAnimationInfoForTime(elapsedTime : number) : AnimationInfo {

        let thisSyllableGroupIndex = this.elapsedTimeToSyllableGroupIndex(elapsedTime);
        if  (thisSyllableGroupIndex >= this.orderedSyllableGroupData.length) {
            return undefined;
        }
        let currentSyllableGroup = this.orderedSyllableGroupData[thisSyllableGroupIndex];
        
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

            return new DirectionSpecLocation(sectionIndex, totalTimeSoFarWithinThisSection/totalTimeWithinThisSection);
            
        }
    
        //guarntee: there is at least one syllable in the syllable group and all the syllables in the group point to the same set of parenAnimationInfos
        let parensAnimationInfos = this.parensInfo.get(currentSyllableGroup.syllableRanges[0]);

        parensAnimationInfos.forEach(i => {
            i.currentLocation = locationFromAccData(this.parensAccumData.get(i.ctx), this);
        })

        let currentSyllableGroupRanges = currentSyllableGroup.syllableRanges;
        if (currentSyllableGroup.numberRange != undefined) {
            currentSyllableGroupRanges.push(currentSyllableGroup.numberRange);
        }
        return new AnimationInfo(currentSyllableGroupRanges, currentSyllableGroup.ampersandRanges, syllableLocation, parensAnimationInfos);
    }
	
}