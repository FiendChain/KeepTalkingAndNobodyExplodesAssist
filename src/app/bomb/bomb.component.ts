import { Component, Input } from "@angular/core";
import { BombService } from "./bomb.service";
import { BombLayout, BombLayoutInterface } from "./bomb-layout.component";

@Component({
    selector: 'bomb-component',
    templateUrl: './bomb.component.html'
})
export class BombComponent {
    public bombLayout: BombLayoutInterface = BombLayout;

    constructor(
        public service: BombService,
    ) {}

    counter(i: number) {
        return new Array(i);
    }
}