import { Component } from '@angular/core';
import { BombService } from '../../bomb.service';
import { BombModuleInterface } from '../../bomb-module.interface';

import { StripLED } from './strip-component/strip.model';
import { SquareButton } from './button-component/button.model';
import { getInstructions, ButtonInstructions } from './button.rules';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements BombModuleInterface {
    public name: string = 'button';

    public button = new SquareButton(); // square button
    public stripLED = new StripLED();   // strip led
    public buttonAction: string;
    public stripAction: string;

    public totalBatteries: number;
    public litIndicators: string[] = [];

    constructor(
        public service: BombService,
    ) {
        this.service.batteries$.subscribe((batteries) => {
            this.totalBatteries = batteries.length;
            this.updateInstructions();
        })
        this.service.litIndicators$.subscribe((litIndicators) => {
            this.litIndicators = litIndicators;
            this.updateInstructions();
        })
    }

    private updateInstructions(): void {
        let instructions: ButtonInstructions = getInstructions(this.button, this.stripLED, this.totalBatteries, this.litIndicators);
        this.buttonAction = instructions.buttonAction;
        this.stripAction = instructions.stripAction;
    }
}