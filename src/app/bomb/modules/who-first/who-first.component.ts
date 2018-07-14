import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-who-first',
  templateUrl: './who-first.component.html',
  styleUrls: ['./who-first.component.css']
})
export class WhoFirstComponent implements OnInit, BombModuleInterface {
  public name: string = 'who-first';

  constructor() { }

  ngOnInit() {
  }

}
