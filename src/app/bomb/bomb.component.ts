import { Component } from "@angular/core";
import { BombService } from "./bomb.service";

@Component({
    selector: 'bomb-component',
    templateUrl: './bomb.component.html'
})
export class BombComponent {
    constructor(
        public service: BombService,
    ) {}

    private getComponents(): any[] {
        return this.service.components;
    }
}