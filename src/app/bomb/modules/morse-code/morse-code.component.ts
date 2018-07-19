import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { morseCodeTable, radioFrequencies } from './morse-code.data';

@Component({
    selector: 'app-morse-code',
    templateUrl: './morse-code.component.html',
    styleUrls: ['./morse-code.component.css']
})
export class MorseCodeComponent implements BombModuleInterface {
    public name: string = 'morse-code';
    public word: string = "";
    public frequency: number = null;
    public morseCodeBuffer: string = "";
    public morseCodeFormatting = morseCodeFormatting;

    constructor() { }

    // send a more code
    public sendMorse(morse: string): void {
        if(morse == '.' || morse == '-') {
            this.morseCodeBuffer += morse;
        // if a space was found, compute the associated
        // letter with that sequence
        } else if(morse == ' ') {
            // ignore transmit with empty buffer
            if(this.morseCodeBuffer.length <= 0) {
                return;
            }
            var letter: string = morseCodeTable[this.morseCodeBuffer];
            this.morseCodeBuffer = ""; // clear the buffer
            // if invalid letter, dont bother refetching frequency
            if(!letter) {
                this.word += "?";
            // if a valid letter, update word and get
            // updated frequency
            } else {
                this.word += letter;
                this.checkFrequency();
            }
        }
    }

    // recheck the frequency
    private checkFrequency(): void {
        let frequency: number = radioFrequencies[this.word];
        if(!frequency) this.frequency = null;
        else           this.frequency = frequency;
    }

    // remove a morse code character
    public removeMorse(index: number): void {
        this.morseCodeBuffer = this.spliceString(this.morseCodeBuffer, index, 1);
        // no need to recalculate since only care when
        // finishing a letter
    }

    // remove letter from the code
    public removeLetter(index: number): void {
        this.word = this.spliceString(this.word, index, 1);
        this.checkFrequency();
    }

    // splice the string
    private spliceString(str, index, count, add="") {
        return str.slice(0,index)+add+str.slice(index+count);
    }
}

const morseCodeFormatting = {
    '.': 'btn-danger',
    '-': 'btn-primary',
}
