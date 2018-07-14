import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-wires',
  templateUrl: './wires.component.html',
  styleUrls: ['./wires.component.css']
})
export class WiresComponent implements OnInit, BombModuleInterface {
  public name: string = 'wires';

  constructor() { }

  ngOnInit() {
  }

}
