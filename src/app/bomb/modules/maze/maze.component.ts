import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

import { Location } from "./maze.data";
import { getImageFile } from "./maze.checker";

@Component({
    selector: 'app-maze',
    templateUrl: './maze.component.html',
    styleUrls: ['./maze.component.css']
})
export class MazeComponent implements BombModuleInterface {
    public name: string = 'maze';
    // locations of the two end points
    public start: Location = {x:null, y:null};
    public end: Location = {x:null, y:null};
    // location of the player if necessary
    public player: Location = {x:null, y:null};
    // the filepath to the maze
    public mazeFilename: string = null; // a maze hasnt been found yet
    // override position of least updated position
    private updateStart: boolean = false;

    constructor() { }

    public setPosition(column: number, row: number): void {
        // if the start has already been updated
        // update the end position
        if(!this.updateStart) {
            this.end.x = column; 
            this.end.y = row;    
        } else {
            this.start.x = column;
            this.start.y = row;
        }
        // switch which one to update next
        this.updateStart = !this.updateStart;
        // update maze
        this.updateMaze();
    }

    public checkPosition(column: number, row: number): boolean {
        if(this.start.x == column && this.start.y == row) return true;
        if(this.end.x == column && this.end.y == row) return true;
        return false;
    }

    public updateMaze(): void {
        setTimeout(() => {
            this.mazeFilename = getImageFile(this.start, this.end);
            console.log(this.mazeFilename);
        }, 0);
    }



}
