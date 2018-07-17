// complex wire rule
import { WireConnection } from '../../wire-component/wire.model';

// complex wire component
export interface ComplicatedWireConnection {
    led: boolean;
    wire: WireConnection;
    star: boolean;
}

// rules can be represented as a tree
const rules = [
    // (!b !r) (!b r) (b! r) (b r)
    [
        [["C", "S"], ["S", "S"]], // !s !l
        [["D", "B"], ["P", "S"]], // !s l  
    ],[
        [["C", "C"], ["D", "P"]], // s !l
        [["B", "B"], ["P", "D"]], // s l
    ],
];

function getRuleEndpoints(wire: ComplicatedWireConnection): string {
    // get colour rules
    let wireColour: string = wire.wire.getColour().toLowerCase();
    let wireStripeColour: string = null;
    if(wire.wire.stripped) wireStripeColour = wire.wire.getStripeColour().toLowerCase();
    let hasRed: boolean = wireColour == "red" || wireStripeColour == "red";
    let hasBlue: boolean = wireColour == "blue" || wireStripeColour == "blue";
    // get rule via internal array treeing
    var result: string = rules
        [Number(wire.star)]
        [Number(wire.led)]
        [Number(hasBlue)]
        [Number(hasRed)];
    return result;
}

export function checkCut(
    wire: ComplicatedWireConnection,
    lastDigitSerialEven: boolean,
    hasParallelPort: boolean,
    totalBatteries: number): void {
    // if wire isnt connect dont do any checks
    if(!wire.wire.isConnected()) {
        return;
    }
    // get the rule set
    let rule: string = getRuleEndpoints(wire);
    // if c, always cut
    if(rule == "C") {
        wire.wire.cut = true;
    // do not cut
    } else if(rule == "D") {
        wire.wire.cut = false;
    // cut if last digit of serial is even and S
    } else if(rule == "S" && lastDigitSerialEven) {
        wire.wire.cut = true;
    // cut wire if P and has parallel port
    } else if(rule == "P" && hasParallelPort) {
        wire.wire.cut = true;
    // cut wire if B and has 2 or more batteries
    } else if(rule == "B" && totalBatteries >= 2) {
        wire.wire.cut = true;
    // otherwise dont cut
    } else {
        wire.wire.cut = false;
    }
}
