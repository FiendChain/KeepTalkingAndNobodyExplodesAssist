import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-morse-code',
  templateUrl: './morse-code.component.html',
  styleUrls: ['./morse-code.component.css']
})
export class MorseCodeComponent implements OnInit, BombModuleInterface {
  public name: string = 'morse-code';

  constructor() { }

  ngOnInit() {
  }

}
