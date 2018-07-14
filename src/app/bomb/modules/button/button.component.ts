import { Component, OnInit } from '@angular/core';
import { BombService } from '../../bomb.service';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, BombModuleInterface {
    public name: string = 'button';

    constructor(
        public service: BombService,
    ) { }

    ngOnInit() {
    }

}
