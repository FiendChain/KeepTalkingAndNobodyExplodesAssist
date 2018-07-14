import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.css']
})
export class KnobComponent implements OnInit, BombModuleInterface {
  public name: string = 'knob';

  constructor() { }

  ngOnInit() {
  }

}
