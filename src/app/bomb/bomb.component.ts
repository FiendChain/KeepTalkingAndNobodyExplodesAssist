import { Component, Input } from "@angular/core";
import { BombService } from "./bomb.service";

@Component({
    selector: 'bomb-component',
    templateUrl: './bomb.component.html'
})
export class BombComponent {
    @Input('columns') columns: number = 3;
    @Input('rows') rows: number = 2;

    constructor(
        public service: BombService,
    ) {}

    counter(i: number) {
        return new Array(i);
    }
}