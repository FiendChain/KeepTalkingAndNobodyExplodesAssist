import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';

import { WireConnection } from '../../wire-component/wire.model';
import { checkWires } from './wires.rules';

@Component({
    selector: 'app-wires',
    templateUrl: './wires.component.html',
    styleUrls: ['./wires.component.css']
})
export class WiresComponent implements BombModuleInterface {
    public name: string = 'wires';
    public wires: WireConnection[] = [];
    public lastDigitSerialOdd: boolean;

    constructor(
        public service: BombService,
    ) { 
        this.createWires();
        this.subscribeService();
    }

    private createWires(totalWires: number = 6): void {
        for(var i = 0; i < totalWires; i++) {
            var connection = new WireConnection();
            this.wires.push(connection);
        }
    }

    private subscribeService(): void {
        this.service.serial$.subscribe((serial: string) => {
            this.lastDigitSerialOdd = this.checkLastDigitSerialOdd(serial);
            this.updateWires();
        });
    }

    public updateWires(): void {
        checkWires(this.wires, this.lastDigitSerialOdd);
    }

    private checkLastDigitSerialOdd(serial: string): boolean {
        if(!serial) {
            return false;
        } else {
            if(serial.length <= 0) return false;
            // if serial is long enough, get number
            var lastDigit: string = serial[serial.length-1];
            var number: number = parseInt(lastDigit);
            // not a valid number
            if(isNaN(number)) return false;
            // if value number check if odd
            if(number % 2 != 0) return true;    // odd
            else                return false;   // even
        }
    }

    

}




