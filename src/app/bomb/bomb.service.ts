import { Injectable, Component } from "@angular/core";

// this will contain base information about the bomb
// will contain list of components that were selected
// used as the central repository of data
// bomb modules can access the list of other components, if needed

@Injectable()
export class BombService {
    public components: any[] = [];
    public serial: string;
    public total_batteries: number = 0;

    public addComponent(): void {

    }

    public removeComponent(): void {

    }
}