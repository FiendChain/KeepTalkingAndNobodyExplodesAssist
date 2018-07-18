import { Component } from '@angular/core';
import { WireSequenceConnection, checkCuts } from './wire-sequence.rule-checker';

@Component({
    selector: 'app-wire-sequence',
    templateUrl: './wire-sequence.component.html',
    styleUrls: ['./wire-sequence.component.css']
})
export class WireSequenceComponent {
    public name: string = 'wire-sequence';
    
    public wires: WireSequenceConnection[] = [];
    public symbols: string[] = ['A', 'B', 'C'];
    private currentPanel: number = 1;
    private maxPanels: number = 4;  // max panels

    constructor() { 
        this.createWires();
    }

    private createWires(n: number = 12): void {
        for(var i = 0; i < n; i++) {
            let wire = new WireSequenceConnection(i+1);
            this.wires.push(wire);
        }
    }

    public updateCuts(): void {
        checkCuts(this.wires);
    }

    public setPreviousPanel(): void {
        if(this.currentPanel > 1) {
            this.currentPanel--;
        }
    }

    public setNextPanel(): void {
        if(this.currentPanel < this.maxPanels) {
            this.currentPanel++;
        }
    }

    public getCurrentWires(): WireSequenceConnection[] {
        var index = (this.currentPanel-1)*3;
        return this.wires.slice(index, index+3);
    } 

    public getWireClass(symbol: string): string {
        var wireClass: string = wireClasses[symbol];
        if(!wireClass) wireClass = wireClasses.unknown;
        return wireClass;
    }
}

const wireClasses: WireClasses = {
    A: 'background-blue',
    B: 'background-red',
    C: 'background-green',
    unknown: 'background-grey',
}

interface WireClasses {
    [symbol: string]: string;
}


