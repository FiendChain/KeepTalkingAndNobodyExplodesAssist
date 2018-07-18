import { WireConnection } from '../../wire-component/wire.model';
import { rules, maxWirePerColour } from './wire-sequence.rules';

// wire sequence class
export class WireSequenceConnection extends WireConnection {
    public colours: string[] = [
        "Black",
        "Blue",
        "Red",
    ];

    constructor(
        public id: number,
        public symbol?: string, // end letter for the wire
    ) {
        super();
    }

    public isAssigned(): boolean {
        if(!this.symbol) return false;
        return true;
    }
}

// performs cuts on a list of wires
export function checkCuts(wiresList: WireSequenceConnection[]): void {
    // get wire count
    let wireCount = getWireCount(wiresList);
    // go through each colour available
    for(let colour in wireCount) {
        // get wires for that colour
        let wires = wireCount[colour];
        let rule = rules[colour];
        // check if the symbol is in the rule set
        wires.forEach((wire, index) => {
            // if wire index is outside of rule, ignore
            if(index >= maxWirePerColour) return;
            // otherwise, search through symbols and check whether to cut
            let cutSymbols = rule[index];
            for(let symbol of cutSymbols) {
                if(symbol == wire.symbol) {
                    wire.cut = true;
                    return;
                }
            }
            wire.cut = false;   // dont cut
        });
    }
}

// get wire counts
function getWireCount(wires: WireSequenceConnection[]): WireCount {
    var wireCount: WireCount = {
        black: [],
        blue: [], 
        red: [],
    }
    for(let wire of wires) {
        // only check if wire is connected and assigned
        if(wire.isConnected() && wire.isAssigned()) {
            let colour = wire.getColour().toLowerCase();
            var list = wireCount[colour];
            if(list) list.push(wire);
        }
    }

    return wireCount;
}

interface WireCount {
    [colour: string]: WireSequenceConnection[];
    black: WireSequenceConnection[];
    blue: WireSequenceConnection[];
    red: WireSequenceConnection[];
}

