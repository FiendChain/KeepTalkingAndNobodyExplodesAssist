import { Component, OnChanges } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';

import { WireConnection } from '../../wire-component/wire.model';

@Component({
    selector: 'app-wires',
    templateUrl: './wires.component.html',
    styleUrls: ['./wires.component.css']
})
export class WiresComponent implements OnChanges, BombModuleInterface {
    public name: string = 'wires';
    public wires: WireConnection[] = [];
    public serial: string;

    constructor(
        public service: BombService,
    ) { 
        for(var i = 0; i < 6; i++) {
            var connection = new WireConnection();
            this.wires.push(connection);
        }
        this.service.serial.subscribe((serial: string) => {
            this.serial = serial;
            this.checkWires();
        })
    }

    ngOnChanges(): void {
        console.log('listening to change!');
    }

    public checkWires(wire?: WireConnection): void {
        var totalWires: number = 0;
        var colourCount: ColourCount = {
            Black: [],
            Blue: [],
            Red: [],
            White: [],
            Yellow: [],
        };
        var lastDigitOdd = this.checkLastDigitSerialOdd();
        for(let wire of this.wires) {
            if(wire.isConnected()) {
                totalWires++;
                colourCount[wire.getColour()].push(wire);
            }
            wire.cut = false;
        }
        // perform rule checks
        switch(totalWires) {
        // 3 wires
        case 3:
            // if no read wires, cut second wire
            if(colourCount.Red.length == 0) {
                this.cutWire(2);
            // if last wire is white, cut last wire
            } else if(this.getWire(6).getColour() == 'White') {
                this.cutWire(6);
            // if more than one blue wire, cut the last blue wire
            } else if(colourCount.Blue.length > 1) {
                this.cutWire(-1, colourCount.Blue);
            // cut the last wire
            } else {
                this.cutWire(6);
            }
            break;
        // 4 wires
        case 4:
            // if more than one red wire and last digit of serial is odd
            // cut last red wire
            if(colourCount.Red.length > 1 && lastDigitOdd) {
                this.cutWire(-1, colourCount.Red);
            // if last wire is yellow and no red wires
            // cut the first wire
            } else if(this.getWire(6).getColour() == 'Yellow' &&
                      colourCount.Red.length == 0) {
                this.cutWire(1);
            // if only one blue wire, cut first wire
            } else if(colourCount.Blue.length == 1) {
                this.cutWire(1);
            // if more than one yellow wire, cut last wire
            } else if(colourCount.Yellow.length > 1) {
                this.cutWire(6);
            // cut first wire
            } else {
                this.cutWire(2);
            }
            break;
        // 5 wires
        case 5:
            // if last wire is black, and last digit of serial is odd
            // cut fourth wire
            if(this.getWire(-1).getColour() == 'Black' && lastDigitOdd) {
                this.cutWire(4);
            // if there is only one red wire and more than one yellow wire
            // cut the first wire
            } else if(colourCount.Red.length == 1 && colourCount.Yellow.length > 1) {
                this.cutWire(1);
            // if no black wires, cut the second wire
            } else if(colourCount.Black.length == 0) {
                this.cutWire(2);
            // cut the first wire
            } else {
                this.cutWire(1);
            }
            break;
        // 6 wires
        case 6:
            // no yellow wires and last digit is odd
            // cut third wire
            if(colourCount.Yellow.length == 0 && lastDigitOdd) {
                this.cutWire(3);
            // if only one yellow wire and more than one white
            // cut fourth wire
            } else if(colourCount.Yellow.length == 0 && 
                      colourCount.White.length > 1) {
                this.cutWire(4);
            // if no red wires, cut last wire
            } else if(colourCount.Red.length == 0) {
                this.cutWire(-1);
            // cut fourth wire
            } else {
                this.cutWire(4);
            }
            break;
        }
    }

    private checkLastDigitSerialOdd(): boolean {
        if(!this.serial) {
            return false;
        } else {
            if(this.serial.length <= 0) return false;
            // if serial is long enough, get number
            var lastDigit: string = this.serial[this.serial.length-1];
            var number: number = parseInt(lastDigit);
            // not a valid number
            if(isNaN(number)) return false;
            // if value number check if odd
            if(number % 2 != 0) return true;    // odd
            else                return false;   // even
        }
    }

    private getWire(n: number, list: WireConnection[] = this.wires): WireConnection {
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

    private cutWire(n: number, list: WireConnection[] = this.wires): void {
        let wire = this.getWire(n, list);
        if(wire) wire.cut = true;
    }

}

interface ColourCount {
    Black: WireConnection[];
    Blue:  WireConnection[];
    Red:  WireConnection[];
    White:  WireConnection[];
    Yellow:  WireConnection[];
}


