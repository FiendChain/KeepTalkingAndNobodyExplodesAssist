import { Component, Input } from "../../../../node_modules/@angular/core";
import { WireConnection } from "./wire.model";

const colourList: string[] = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
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

    public colours = colourList;
}