import { Component, Input, Output, EventEmitter } from "@angular/core";
import { WireConnection } from "./wire.model";

const colourList: string[] = [
    "Blue",
    "Red",
    "Yellow",
    "White",
    "Black",
]

@Component({
    selector: 'wire-component',
    templateUrl: './wire.component.html',
    styleUrls: [
        './wire.component.css',
    ]
})
export class WireComponent {
    @Input('wire') wire: WireConnection;
    @Input('enableStrippedToggle') enableStrippedToggle: boolean = true;
    @Output('onChange') onChange = new EventEmitter<WireConnection>();

    public colours = colourList;

    public indicateUpdate(): void {
        this.onChange.emit(this.wire);
    }
}