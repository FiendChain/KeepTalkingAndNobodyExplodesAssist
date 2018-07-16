import { Component } from "@angular/core";
import { BombService } from "./bomb.service";
import { BombLayout, BombLayoutInterface } from "./bomb-layout.component";

@Component({
    selector: 'bomb-component',
    templateUrl: './bomb.component.html'
})
export class BombComponent {
    public bombLayout: BombLayoutInterface = BombLayout;
    public totalBatteries: number = 0;

    constructor(
        public service: BombService,
    ) {
        this.service.totalBatteries.subscribe((totalBatteries) => {
            this.totalBatteries = totalBatteries;
        })
    }

    counter(i: number) {
        return new Array(i);
    }
}