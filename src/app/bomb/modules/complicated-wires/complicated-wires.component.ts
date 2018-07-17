import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';
import { WireConnection } from '../../wire-component/wire.model';

import { ComplicatedWireConnection, checkCut } from './complicated-wires.model';

@Component({
    selector: 'app-complicated-wires',
    templateUrl: './complicated-wires.component.html',
    styleUrls: ['./complicated-wires.component.css']
})
export class ComplicatedWiresComponent implements BombModuleInterface {
    public name: string = "complicated-wires";
    public wires: ComplicatedWireConnection[] = [];

    private lastDigitSerialEven: boolean;
    private hasParallelPort: boolean;
    private totalBatteries: number;

    constructor(
        public service: BombService,
    ) { 
        this.createWires();
        this.subscribeService();
    }

    // create the wires
    private createWires(totalWires: number = 6): void {
        for(var i = 0; i < totalWires; i++) {
            let wire = new WireConnection();
            wire.vertical = true;
            let complicatedWire: ComplicatedWireConnection = {
                led: false,
                star: false,
                wire: wire,
            }
            this.wires.push(complicatedWire);
        }
    }

    // subscribe to the bomb server
    private subscribeService(): void {
        // change on total batteries
        this.service.totalBatteries.subscribe((totalBatteries) => {
            this.totalBatteries = totalBatteries;
            this.updateAllWires();
        });
        // change on serial
        this.service.serial.subscribe((serial) => {
            this.lastDigitSerialEven = this.checkLastDigitSerialEven(serial);
            this.updateAllWires();
        });
        // change on total parallel ports
        this.hasParallelPort = true;
    }

    // update all wires
    private updateAllWires(): void {
        for(let wire of this.wires) {
            this.updateWire(wire);
        }
    }

    // on wire update, recalculate
    public updateWire(wire: ComplicatedWireConnection): void {
        checkCut(
            wire, 
            this.lastDigitSerialEven, 
            this.hasParallelPort, 
            this.totalBatteries
        );
    }

    // check if last digit serial is even
    private checkLastDigitSerialEven(serial: string): boolean {
        if(!serial) {
            return false;
        } else {
            if(serial.length <= 0) return false;
            // if serial is long enough, get number
            var lastDigit: string = serial[serial.length-1];
            var number: number = parseInt(lastDigit);
            // not a valid number
            if(isNaN(number)) return false;
            // if value number check if event
            if(number % 2 == 0) return true;    // even
            else                return false;   // odd
        }
    }
}
