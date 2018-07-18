import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

import { displayOptions, labelOptions } from './who-first.rules';
import { getButtonPress } from './who-first.rule-checker';

@Component({
    selector: 'app-who-first',
    templateUrl: './who-first.component.html',
    styleUrls: ['./who-first.component.css']
})
export class WhoFirstComponent implements BombModuleInterface {
    public name: string = 'who-first';
    public displayOptions = displayOptions;
    public labelOptions = labelOptions;

    public display: string;
    public labels: string[] = [];
    private pressIndex: number = null;

    constructor() { 
        this.initLabels();
    }

    private initLabels(totalLabels: number = 6): void {
        for(var i = 0; i < totalLabels; i++) {
            this.labels.push(null);
        }
    }

    public setDisplay(label: string): void {
        this.display = label;
        this.updateDecision();
    }

    public setLabel(index: number, label: string): void {
        this.labels[index] = label;
        this.updateDecision();
    }

    // update decision
    private updateDecision(): void {
        this.pressIndex = getButtonPress(this.display, this.labels);
    }

    // if the correct one to press
    public checkIfPress(index: number): boolean {
        if(this.pressIndex == null) return false;
        if(this.pressIndex == index) return true;
        return false;
    }

}
