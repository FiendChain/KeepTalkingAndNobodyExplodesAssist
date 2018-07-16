import { Component, Input, Output, EventEmitter } from "@angular/core";
import { StripLED } from "./strip.model";

@Component({
    selector: 'strip-led',
    templateUrl: './strip.component.html',
    styleUrls: [
        './strip.component.css',
    ],
})
export class StripLedComponent {
    @Input('stripLED') stripLED: StripLED = new StripLED();
    @Output('onChange') onChange = new EventEmitter<StripLED>();

    public indicateChange(): void {
        this.onChange.emit(this.stripLED);
    }
}