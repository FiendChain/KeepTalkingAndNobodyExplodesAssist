import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';
import { serialDoesntHaveVowels, serialHasVowels } from './simon-says.mappings';

@Component({
    selector: 'app-simon-says',
    templateUrl: './simon-says.component.html',
    styleUrls: ['./simon-says.component.css']
})
export class SimonSaysComponent implements BombModuleInterface {
    public name: string = 'simon-says';
    public inputSequence: string[] = [];
    public outputSequence: string[] = [];

    private serialHasVowel: boolean;
    private totalStrikes: number;

    constructor(
        public service: BombService,
    ) { 
        // register for serial changes
        this.service.serial.subscribe((serial) => {
            this.serialHasVowel = this.checkSerialHasVowel(serial);
            this.recomputeOutputSequence();
        });
        // register for changes to total strikes
        this.service.totalStrikes.subscribe((totalStrikes) => {
            this.totalStrikes = totalStrikes;
            this.recomputeOutputSequence();
        });
    }

    // add colour to input sequence
    public addSequence(colour: string): void {
        const maxLength: number = 6;
        if(this.inputSequence.length >= maxLength) {
            let alertMsg = `Max sequence of ${maxLength} has been reached!\n`
                          +`Click on input sequence to remove a colour.`;
            alert(alertMsg);
        } else {
            this.inputSequence.push(colour);
            this.outputSequence.push(this.getOutputColour(colour));
        }
    }

    // remove colour from input sequence
    public removeInput(index: number): void {
        this.inputSequence.splice(index, 1);
        this.outputSequence.splice(index, 1);
    }

    // get output colour for input colour
    private getOutputColour(colour: string): string {
        if(this.serialHasVowel) {
            return serialHasVowels[this.totalStrikes][colour];
        } else {
            return serialDoesntHaveVowels[this.totalStrikes][colour];
        }
    }

    // recompute the output sequence
    private recomputeOutputSequence(): void {
        this.outputSequence = [];
        for(let colour of this.inputSequence) {
            let outputColour = this.getOutputColour(colour);
            this.outputSequence.push(outputColour);
        }
    }

    // check if a serial has a vowel
    private checkSerialHasVowel(serial: string): boolean {
        if(!serial) return false;
        // check if any letter is a vowel
        const vowelList: string[] = ['a', 'e', 'i', 'o', 'u'];
        for(let letter of serial) {
            for(let vowel of vowelList) {
                if(letter.toLowerCase() == vowel) {
                    return true;
                }
            }
        }
        // other no vowels
        return false;
    }




}
