import { Component } from "@angular/core";
import { KeypadState, getPossibleFutureOptions, getSequence } from "./keypad.parser";
import { keypadSymbols } from "./keypad.data";
import { BombModuleInterface } from "../../bomb-module.interface";

@Component({
    selector: 'app-keypad',
    templateUrl: './keypad.component.html',
    styleUrls: [
        './keypad.component.css'
    ],
})
export class KeypadComponent implements BombModuleInterface {
    public name: string = 'keypad';
    public keypad: KeypadState = [];
    public options: string[] = [];
    public sequence: KeypadState = null;

    constructor() {
        this.initKeypad();
        this.initOptions();
    }

    private initKeypad(totalButtons: number = 4): void {
        for(var i = 0; i < totalButtons; i++) {
            this.keypad.push(null);
        }
    }

    private initOptions(): void {
        this.options = [];
        for(let key in keypadSymbols) {
            this.options.push(key);
        }
    }

    // for each symbol change
    public setKeypad(index: number, symbol: string): void {
        this.keypad[index] = symbol;
        // refetch options asynchronously
        setTimeout(() => {
            this.options = getPossibleFutureOptions(this.keypad);
        }, 0);
        // check whether to get sequence
        var isAllSelected: boolean = true;
        for(let symbol of this.keypad) {
            if(!symbol) {
                isAllSelected = false;
                break;
            }
        }
        // if not all selected, empty the list
        // otherwise, get the sequence
        if(isAllSelected) {
            this.checkSequence();
        } else {
            this.sequence = null;
        }
    }

    // check sequence without any blocking behaviour
    // timeout places function callback into the callback queue 
    // doesnt reduce fps when updating
    private checkSequence(): void {
        setTimeout(() => {
            this.sequence = getSequence(this.keypad);
        }, 0);
    }
}