import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { retrievePasswords, WordCombinations } from './password.parser';

const maxLetters: number = 5;

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements BombModuleInterface {
    public name: string = 'password';
    public combos: WordCombinations = [];
    public possiblePasswords: string[] = [];

    private recheckTimeout: any;

    constructor() { 
        this.initCombos();
    }

    // create combo list
    private initCombos(): void {
        for(var i = 0; i < maxLetters; i++) {
            this.combos.push([]);
        }
    }

    // add letter to the current column
    public addLetter(column: number, letter: string): void {
        let letters: string[] = this.combos[column];
        if(letters == undefined) return;    // if improper index access
        // otherwise, push and recheck combinations
        letters.push(letter);
        this.recheckPasswords();
    }

    public removeLetter(column: number, index: number): void {
        let letters: string[] = this.combos[column];
        if(letters == undefined) return;
        letters.splice(index, 1); //remove item and recheck
        this.recheckPasswords();
    }

    // refetch the possible passwords
    // if more rechecks are made before 500ms, 
    // delay for 500ms more for further changes, before undergoing
    // intensive rechecking of possible passwords
    private recheckPasswords(): void {
        clearTimeout(this.recheckTimeout);
        this.recheckTimeout = setTimeout(() => {
            this.possiblePasswords = retrievePasswords(this.combos);
        }, 500);
        
    }

}
