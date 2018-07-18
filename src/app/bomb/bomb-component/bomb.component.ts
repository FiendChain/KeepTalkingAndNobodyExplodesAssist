import { Component } from "@angular/core";
import { BombService } from "../bomb.service";
import { BombLayout, BombLayoutInterface } from "./bomb-layout.component";
import { litIndicatorList, maxIndicators } from "./litIndicators.data";
import { portsList, maxPorts } from "./ports.data";

@Component({
    selector: 'bomb-component',
    templateUrl: './bomb.component.html',
    styleUrls: [
        './bomb.component.css',
    ],
})
export class BombComponent {
    public bombLayout: BombLayoutInterface = BombLayout;
    public totalBatteries: number = 0;
    public litIndicators: string[] = [];
    public ports: string[] = [];

    public maxPorts = maxPorts;
    public maxIndicators = maxIndicators;

    public litIndicatorOptions = litIndicatorList;
    public portOptions = portsList;

    constructor(
        public service: BombService,
    ) {
        this.service.getTotalBatteries().subscribe((totalBatteries) => {
            this.totalBatteries = totalBatteries;
        });
        this.service.getLitIndicators().subscribe((litIndicators) => {
            this.litIndicators = litIndicators;
        });
        this.service.getPorts().subscribe((ports) => {
            this.ports = ports;
        });
    }
}