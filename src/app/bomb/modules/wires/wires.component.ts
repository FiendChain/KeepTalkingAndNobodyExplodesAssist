import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';

import { WireConnection } from '../../wire-component/wire.model';

@Component({
    selector: 'app-wires',
    templateUrl: './wires.component.html',
    styleUrls: ['./wires.component.css']
})
export class WiresComponent implements OnInit, BombModuleInterface {
    public name: string = 'wires';
    public wires: WireConnection[] = [];

    constructor(
        public service: BombService,
    ) { 
        for(var i = 0; i < 6; i++) {
            var connection = new WireConnection();
            this.wires.push(connection);
        }
    }

    ngOnInit() {}

}


