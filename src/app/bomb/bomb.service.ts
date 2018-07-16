import { Injectable } from "@angular/core";
import { BombModuleSelector } from "./module-selector/module-selector.component";
import { BombModuleInterface } from "./bomb-module.interface";
import { BehaviorSubject } from "../../../node_modules/rxjs";

// this will contain base information about the bomb
// will contain list of components that were selected
// used as the central repository of data
// bomb modules can access the list of other components, if needed

@Injectable()
export class BombService {
    private modules: BombModuleSelector[] = [];
    public serial = new BehaviorSubject<string>("");
    public totalBatteries = new BehaviorSubject<number>(0);
    public totalStrikes = new BehaviorSubject<number>(0);
    public litIndicator = new BehaviorSubject<string>("");

    constructor() {}

    public addModule(bombModule: BombModuleSelector): void {
        this.modules.push(bombModule);
    }

    public getModules(): BombModuleInterface[] {
        var modules: BombModuleInterface[] = [];
        for(let bombModule of this.modules) {
            var actualBombModule: BombModuleInterface = bombModule.getModule();
            if(actualBombModule) {
                modules.push(actualBombModule);    
            }
        }
        return modules;
    }
}