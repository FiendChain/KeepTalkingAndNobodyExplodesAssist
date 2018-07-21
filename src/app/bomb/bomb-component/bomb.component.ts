import { Component } from "@angular/core";
import { BombService } from "../bomb.service";
import { BombLayout, BombLayoutInterface } from "./bomb-layout.component";
import { litIndicatorList, maxIndicators } from "./litIndicators.data";
import { portsList, maxPorts } from "./ports.data";
import { batteriesList, maxBatteries } from "./batteries.data";

@Component({
    selector: 'bomb-component',
    templateUrl: './bomb.component.html',
    styleUrls: [
        './bomb.component.css',
    ],
})
export class BombComponent {
    public bombLayout: BombLayoutInterface = BombLayout;

    public maxBatteries = maxBatteries;
    public batteryOptions = batteriesList;

    public maxPorts = maxPorts;
    public portOptions = portsList;

    public maxIndicators = maxIndicators;
    public litIndicatorOptions = litIndicatorList;


    constructor(
        public service: BombService,
    ) {}
}