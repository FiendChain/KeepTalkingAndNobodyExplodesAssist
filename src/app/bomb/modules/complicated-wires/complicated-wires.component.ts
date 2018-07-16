import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';
import { WireConnection } from '../../wire-component/wire.model';

@Component({
    selector: 'app-complicated-wires',
    templateUrl: './complicated-wires.component.html',
    styleUrls: ['./complicated-wires.component.css']
})
export class ComplicatedWiresComponent implements OnInit, BombModuleInterface {
    public name: string = "complicated-wires";
    public wires: WireConnection[] = [];

    constructor(
        public service: BombService,
    ) { 
        for(var i = 0; i < 6; i++) {
            let wire = new WireConnection();
            wire.vertical = true;
            this.wires.push(wire);
        }
    }

    ngOnInit() {}

}
