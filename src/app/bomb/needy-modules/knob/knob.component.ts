import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { LedState, totalKnobs } from './knob-positions.data';
import { getPossibleMoves } from './knob-position.checker';

@Component({
    selector: 'app-knob',
    templateUrl: './knob.component.html',
    styleUrls: ['./knob.component.css']
})
export class KnobComponent implements BombModuleInterface {
    public name: string = 'knob';
    public ledState: LedState = [];
    public possibleMoves: string[] = [];

    constructor() { 
        this.initLedState();
    }

    private initLedState(): void {
        for(var i = 0; i < totalKnobs; i++) {
            this.ledState.push(false);
        }
    }

    public getLed(index: number): boolean {
        return <boolean>this.ledState[index];
    }

    public toggleLed(index: number): void {
        this.ledState[index] = !this.ledState[index];
        this.recheckPositions();
    }

    public recheckPositions(): void {
        setTimeout(() => {
            this.possibleMoves = getPossibleMoves(this.ledState);
        }, 0);
        
    }

}
