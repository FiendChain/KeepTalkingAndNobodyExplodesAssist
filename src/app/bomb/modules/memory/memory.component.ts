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
    // current button config
    public buttons: Array<number> = [1,2,3,4];
    // the inputs for each stage
    public inputs: Array<number> = [];
    // data for each stage
    public outputs: Array<number> = [];
    public positions: Array<number> = [];
    public stages: Array<Array<number>> = []; // order of buttons for each stage

    public currentStage: number = 1;
    public maxStages: number = 5;
    public buttonFormatting = buttonFormatting;

    constructor() {}

    // add input
    public addInput(input: number): void {
        if(this.inputs.length < 5) {
            this.inputs.push(input);
            this.stages.push(this.buttons.slice(0)); // add to history
            let output = this.calculateOutput(input);
            this.addOutput(output);
            this.currentStage++;
        }
    }

    public addOutput(output: number): void {
        this.outputs.push(output);
        let buttons = this.stages[this.currentStage-1];
        buttons.forEach((value, index) => {
            if(value == output) {
                this.positions.push(index+1);
            }
        });
    }

    public removeIndex(index: number): void {
        this.inputs.splice(index, 1);
        this.stages.splice(index, 1);
        this.recomputeOutput();
    }

    // set value of buttons
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
        this.positions = [];
        this.currentStage = 1;
        this.inputs.forEach((input, index) => {
            let output = this.calculateOutput(input);
            this.addOutput(output);
            this.currentStage++;
        });
    }

    public calculateOutput(input: number, stage: number = this.currentStage): number {
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
            if(input == 2) return this.getStagePosition(1);
            if(input == 3) return this.getButton(1);
            if(input == 4) return this.getStagePosition(1);
            break;
        // stage 3
        case 3:
            if(input == 1) return this.getStageValue(2);
            if(input == 2) return this.getStageValue(1);
            if(input == 3) return this.getButton(3);
            if(input == 4) return 4;
            break; 
        // stage 4
        case 4:
            if(input == 1) return this.getStagePosition(1);
            if(input == 2) return this.getButton(1);
            if(input == 3) return this.getStagePosition(2);
            if(input == 4) return this.getStagePosition(2);
            break;
        case 5:
            if(input == 1) return this.getStageValue(1);
            if(input == 2) return this.getStageValue(2);
            if(input == 3) return this.getStageValue(4);
            if(input == 4) return this.getStageValue(3);
            break;
        default:
            throw `There is no stage ${stage} for memory game`;
        }
    }

    // get value of button from current stage
    private getButton(position: number): number {
        let buttons = this.stages[this.currentStage-1];
        if(position <= 0 || position > buttons.length) {
            throw "Out of index error for buttons";
        } else {
            return buttons[position-1];
        }
    }

    // get position from previous stage
    private getStagePosition(position: number): number {
        let index: number = this.positions[position-1];
        return this.getButton(index);
    }

    // get value of button from a stage
    private getStageValue(stage: number): number {
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
