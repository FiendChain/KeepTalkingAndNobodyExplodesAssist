import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
    selector: 'app-maze',
    templateUrl: './maze.component.html',
    styleUrls: ['./maze.component.css']
})
export class MazeComponent implements BombModuleInterface {
    public name: string = 'maze';

    constructor() { }

}
