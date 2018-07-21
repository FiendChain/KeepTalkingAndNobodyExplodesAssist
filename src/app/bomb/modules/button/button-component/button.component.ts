import { Component, Input, Output, EventEmitter } from "@angular/core"
import { SquareButton, colourClasses } from "./button.model";
import { StripLED } from "../strip-component/strip.model";

@Component({
    selector: 'square-button',
    templateUrl: './button.component.html',
    styleUrls: [
        './button.component.css',
    ],
})
export class SquareButtonComponent {
    // objects
    @Input('button') button: SquareButton = new SquareButton();
    @Input('stripLED') stripLED: StripLED = new StripLED();
    // help text
    @Input('buttonAction') buttonAction: string;
    @Input('stripAction') stripAction: string;
    // change emitter
    @Output('onChange') onChange = new EventEmitter<SquareButton|StripLED>();

    // get class for selector
    get selectorClass(): any {
        return colourClasses[this.button.colour];
    }

    public indicateChange(object: SquareButton | StripLED): void {
        this.onChange.emit(object);
    }
}