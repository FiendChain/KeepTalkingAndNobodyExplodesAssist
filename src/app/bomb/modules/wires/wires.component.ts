import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';
import { BombService } from '../../bomb.service';

import { colourMappings, colourList, getColourClass, defaultColour } from '../../colour-mappings';

@Component({
    selector: 'app-wires',
    templateUrl: './wires.component.html',
    styleUrls: ['./wires.component.css']
})
export class WiresComponent implements OnInit, BombModuleInterface {
    public name: string = 'wires';

    public wires: WireConnection[] = [];
    public colours = colourList;

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

class WireConnection {
    public colours = colourList;
    public colourClass: string;

    constructor(
        private colour: string = defaultColour,
        public stripped: boolean = false,
    ) {
        this.setColour(colour);
    }

    public toggleStripped(): void {
        if(!this.stripped) this.stripped = true;
        else               this.stripped = false;
    }

    public setColour(colour?: string): void {
        this.colourClass = getColourClass(colour);
        this.colour = colour || defaultColour;
    }

    public getColour(): string {
        return this.colour;
    }

    public isConnected(): boolean {
        return (this.colour != "grey");
    }
}
