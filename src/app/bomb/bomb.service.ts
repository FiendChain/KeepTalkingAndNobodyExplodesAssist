import { Injectable, Component, ComponentFactoryResolver } from "@angular/core";
import { BombModuleSelector } from "./module-selector/module-selector.component";

// this will contain base information about the bomb
// will contain list of components that were selected
// used as the central repository of data
// bomb modules can access the list of other components, if needed

@Injectable()
export class BombService {
    private modules: BombModuleSelector[] = [];
    public serial: string;
    public total_batteries: number = 0;

    constructor() {}

    public addModule(bombModule: BombModuleSelector): void {
        this.modules.push(bombModule);
    }

    public getModules(): any[] {
        var modules: any[] = [];
        for(let bombModule of this.modules) {
            modules.push(bombModule.getModule());
        }
        return modules;
    }
}