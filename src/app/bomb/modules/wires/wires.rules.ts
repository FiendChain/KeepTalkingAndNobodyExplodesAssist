import { WireConnection } from '../../wire-component/wire.model';

export function checkWires(wires: WireConnection[], lastDigitOdd: boolean): void {
    var totalWires: number = 0;
    var colourCount: ColourCount = {
        Black: [],
        Blue: [],
        Red: [],
        White: [],
        Yellow: [],
    };
    // get wire counts
    for(let wire of wires) {
        if(wire.isConnected()) {
            totalWires++;
            let count = colourCount[wire.getColour()]
            if(count) count.push(wire);
        }
        wire.cut = false;
    }
    // perform rule checks
    switch(totalWires) {
    // 3 wires
    case 3:
        // if no read wires, cut second wire
        if(colourCount.Red.length == 0) {
            cutWire(2, wires);
        // if last wire is white, cut last wire
        } else if(getWire(6, wires).getColour() == 'White') {
            cutWire(6, wires);
        // if more than one blue wire, cut the last blue wire
        } else if(colourCount.Blue.length > 1) {
            cutWire(-1, colourCount.Blue);
        // cut the last wire
        } else {
            cutWire(6, wires);
        }
        break;
    // 4 wires
    case 4:
        // if more than one red wire and last digit of serial is odd
        // cut last red wire
        if(colourCount.Red.length > 1 && lastDigitOdd) {
            cutWire(-1, colourCount.Red);
        // if last wire is yellow and no red wires
        // cut the first wire
        } else if(getWire(6, wires).getColour() == 'Yellow' &&
                  colourCount.Red.length == 0) {
            cutWire(1, wires);
        // if only one blue wire, cut first wire
        } else if(colourCount.Blue.length == 1) {
            cutWire(1, wires);
        // if more than one yellow wire, cut last wire
        } else if(colourCount.Yellow.length > 1) {
            cutWire(6, wires);
        // cut first wire
        } else {
            cutWire(2, wires);
        }
        break;
    // 5 wires
    case 5:
        // if last wire is black, and last digit of serial is odd
        // cut fourth wire
        if(getWire(-1, wires).getColour() == 'Black' && lastDigitOdd) {
            cutWire(4, wires);
        // if there is only one red wire and more than one yellow wire
        // cut the first wire
        } else if(colourCount.Red.length == 1 && colourCount.Yellow.length > 1) {
            cutWire(1, wires);
        // if no black wires, cut the second wire
        } else if(colourCount.Black.length == 0) {
            cutWire(2, wires);
        // cut the first wire
        } else {
            cutWire(1, wires);
        }
        break;
    // 6 wires
    case 6:
        // no yellow wires and last digit is odd
        // cut third wire
        if(colourCount.Yellow.length == 0 && lastDigitOdd) {
            cutWire(3, wires);
        // if only one yellow wire and more than one white
        // cut fourth wire
        } else if(colourCount.Yellow.length == 0 && 
                  colourCount.White.length > 1) {
            cutWire(4, wires);
        // if no red wires, cut last wire
        } else if(colourCount.Red.length == 0) {
            cutWire(-1, wires);
        // cut fourth wire
        } else {
            cutWire(4, wires);
        }
        break;
    }
}

function getWire(n: number, list: WireConnection[]): WireConnection {
    if(list.length <= 0) {
        return null;
    }
    if(n == -1) {
        return list[list.length-1];
    }
    if(n <= 0 || n > list.length) {
        return null;
    }
    return list[n-1];
}

function cutWire(n: number, list: WireConnection[]): void {
    let wire = getWire(n, list);
    if(wire) wire.cut = true;
}

interface ColourCount {
    Black: WireConnection[];
    Blue:  WireConnection[];
    Red:  WireConnection[];
    White:  WireConnection[];
    Yellow:  WireConnection[];
}