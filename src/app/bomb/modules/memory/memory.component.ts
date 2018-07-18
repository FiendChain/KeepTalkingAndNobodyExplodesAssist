import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { ClassFormatting } from '../../item-list-component/item-list.component';

const buttonFormatting: ClassFormatting = {
    1: 'background-blue',
    2: 'background-green',
    3: 'background-red',
    4: 'background-yellow',
};

const buttonDropdownFormatting: ClassFormatting = {
    1: 'btn-primary',
    2: 'btn-success',
    3: 'btn-danger',
    4: 'btn-warning',
};

@Component({
    selector: 'app-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements BombModuleInterface {
    public name: string = 'memory';
    public buttons: Array<number> = [1,2,3,4];
    public inputs: Array<number> = [];
    public outputs: Array<number> = [];
    public maxStages: number = 5;
    public buttonFormatting = buttonFormatting;

    constructor() {}

    public addInput(input: number): void {
        if(this.inputs.length < 5) {
            this.inputs.push(input);
            let output = this.calculateOutput(input, this.inputs.length);
            this.outputs.push(output);
        }
    }

    public removeIndex(index: number): void {
        this.inputs.splice(index, 1);
        this.recomputeOutput();
    }

    public setButton(index: number, newValue: number): void {
        let oldValue: number = this.buttons[index];
        // swap values
        for(var i = 0; i < this.buttons.length; i++) {
            if(this.buttons[i] == newValue) {
                this.buttons[i] = oldValue;
                break;
            }
        }
        this.buttons[index] = newValue;
    }

    // if input list was changed, recompute new output sequence
    private recomputeOutput(): void {
        this.outputs = [];
        this.inputs.forEach((input, index) => {
            let output = this.calculateOutput(input, index+1);
            this.outputs.push(output);
        });
    }

    public calculateOutput(input: number, stage: number): number {
        // validate input
        if(input <= 0 || input > 4) {
            throw "Invalid input for memory module";
        }
        switch(stage) {
        // stage 1
        case 1:
            if(input == 1) return this.getButton(2);
            if(input == 2) return this.getButton(2);
            if(input == 3) return this.getButton(3);
            if(input == 4) return this.getButton(4);
            break;
        // stage 2
        case 2:
            if(input == 1) return 4;
            if(input == 2) return this.getStage(1);
            if(input == 3) return this.getButton(1);
            if(input == 4) return this.getStage(1);
            break;
        // stage 3
        case 3:
            if(input == 1) return this.getStage(2);
            if(input == 2) return this.getStage(1);
            if(input == 3) return this.getButton(3);
            if(input == 4) return 4;
            break; 
        // stage 4
        case 4:
            if(input == 1) return this.getStage(1);
            if(input == 2) return this.getButton(1);
            if(input == 3) return this.getStage(2);
            if(input == 4) return this.getStage(2);
            break;
        case 5:
            if(input == 1) return this.getStage(1);
            if(input == 2) return this.getStage(2);
            if(input == 3) return this.getStage(4);
            if(input == 4) return this.getStage(3);
            break;
        default:
            throw `There is no stage ${stage} for memory game`;
        }
    }

    private getButton(position: number): number {
        if(position <= 0 || position > this.buttons.length) {
            throw "Out of index error for buttons";
        } else {
            return this.buttons[position-1];
        }
    }

    private getStage(stage: number): number {
        if(this.outputs.length+1 < stage) {
            throw "Cannot access stage ahead of output";
        }
        return this.outputs[stage-1];
    }

    public getClass(input: number): string {
        return buttonFormatting[input];
    }

    public getDropdownClass(input: number): string {
        return buttonDropdownFormatting[input];
    }
}
