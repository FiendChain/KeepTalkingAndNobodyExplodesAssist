import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
    selector: 'app-complicated-wires',
    templateUrl: './complicated-wires.component.html',
    styleUrls: ['./complicated-wires.component.css']
})
export class ComplicatedWiresComponent implements OnInit, BombModuleInterface {
    public name: string = "complicated-wires";

    constructor() { }

    ngOnInit() {}

}
