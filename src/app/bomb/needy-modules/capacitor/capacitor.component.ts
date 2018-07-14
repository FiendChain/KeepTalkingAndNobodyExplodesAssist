import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-capacitor',
  templateUrl: './capacitor.component.html',
  styleUrls: ['./capacitor.component.css']
})
export class CapacitorComponent implements OnInit, BombModuleInterface {
  public name: string = 'capacitor';

  constructor() { }

  ngOnInit() {
  }

}
