import { Component } from '@angular/core';
import { BombService } from '../../bomb.service';
import { BombModuleInterface } from '../../bomb-module.interface';

import { StripLED } from './strip-component/strip.model';
import { SquareButton } from './button-component/button.model';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements BombModuleInterface {
    public name: string = 'button';

    public button = new SquareButton(); // square button
    public stripLED = new StripLED();   // strip led
    public buttonAction: string = "";
    public stripAction: string = "";

    public totalBatteries: number;
    public litIndicators: string[] = [];

    constructor(
        public service: BombService,
    ) {
        this.service.getTotalBatteries().subscribe((totalBatteries) => {
            this.totalBatteries = totalBatteries;
            this.getInstructions();
        })
        this.service.getLitIndicators().subscribe((litIndicators) => {
            this.litIndicators = litIndicators;
            this.getInstructions();
        })
    }

    public getInstructions(object?: SquareButton|StripLED): void {
        const useStripMsg: string = "Hold button and refer to led strip"; 
        const immediateReleaseMessage: string = "Press and immediately release the button";
        var useStrip: boolean = false;
        // if blue and abort, refer to strip
        if(this.button.getColour() == 'Blue' &&
           this.button.getText() == "Abort") {
            useStrip = true;
        // if more than one battery and says Detonate
        // press and immediately hold button
        } else if(this.totalBatteries > 1 &&
                  this.button.getText() == "Detonate") {
            this.buttonAction = immediateReleaseMessage;
        // if button is white and lit indicator is CAR
        // refer to strip
        } else if(this.checkIfIndicatorExists("CAR") &&
                  this.button.getColour() == "White") {
            useStrip = true;
        // if more than 2 batteries and lit indicator with FRK
        // immediate release the button
        } else if(this.checkIfIndicatorExists("FRK") &&
                  this.totalBatteries > 2) {
            this.buttonAction = immediateReleaseMessage;
        // if button is yellow, refer to strip
        } else if(this.button.getColour() == "Yellow") {
            useStrip = true;
        // if button is red and button says Hold, press and immediately release
        } else if(this.button.getColour() == "Red" &&
                  this.button.getText() == "Hold") {
            this.buttonAction = immediateReleaseMessage;
        // if none apply, refer to strip
        } else {
            useStrip = true;
        }

        // if no need to use strip
        if(!useStrip) {
            this.stripAction = "";
        } else {
            // set message
            this.buttonAction = useStripMsg;
            // get the strip message
            switch(this.stripLED.getColour()) {
            case "Blue":
                this.stripAction = this.getStripAction(4);
                break;
            case "White":
                this.stripAction = this.getStripAction(1);
                break;
            case "Yellow":
                this.stripAction = this.getStripAction(5);
                break;
            default:
                this.stripAction = this.getStripAction(1);
            }
        }
    }

    private checkIfIndicatorExists(text: string): boolean {
        for(let indicator of this.litIndicators) {
            if(indicator == text) return true;
        }
        return false;
    }

    private getStripAction(n: number): string {
        return `Release when countdown timer has a ${n} in any position`;
    }
}