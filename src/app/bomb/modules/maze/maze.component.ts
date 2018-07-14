import { Component, OnInit } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})
export class MazeComponent implements OnInit, BombModuleInterface {
  public name: string = 'maze';

  constructor() { }

  ngOnInit() {
  }

}
