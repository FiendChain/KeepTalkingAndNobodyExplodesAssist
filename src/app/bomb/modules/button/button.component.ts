import { Component, OnInit } from '@angular/core';
import { BombService } from '../../bomb.service';
import { BombModuleInterface } from '../../bomb-module.interface';

import { buttonTextList } from './button-list';
import { colourMappings, colourList, getColourClass } from '../../colour-mappings';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, BombModuleInterface {
    public name: string = 'button';

    public colours: string[] = colourList;
    // colour for button
    private colour: string;
    public colourClass: string;
    // colour for strip
    private stripColour: string;
    public stripColourClass: string;
    // button text
    public buttonTextOptions: string[] = buttonTextList;
    public buttonText: string;

    constructor(
        public service: BombService,
    ) {
        this.setColour();
        this.setButtonText(this.buttonTextOptions[0]);
    }

    ngOnInit() {}

    public setColour(colour?: string): void {
        if(colourMappings.has(colour)) {
            this.colourClass = getColourClass(colour);
            this.colour = colour;
        } else {
            this.colourClass = getColourClass(colourList[0]);
            this.colour = colourList[0];
        }
    }

    public getColour(): string {
        return this.colour;
    }

    public setButtonText(text: string): void {
        this.buttonText = text;
    }

    public setStripColour(colour?: string): void {
        if(colourMappings.has(colour)) {
            this.stripColourClass = getColourClass(colour);
            this.stripColour = colour;
        } else {
            this.stripColourClass = getColourClass(colourList[0]);
            this.stripColour = colourList[0];
        }
    }

    public getSelectorClasses(): any {
        var selectorClasses: any = {};
        colourMappings.forEach((colourClass: string, colour: string): void => {
            selectorClasses[`btn-outline-${colourClass}`] = this.colour == colour;
        });
        return selectorClasses;
    }
}
