import { Injectable } from "@angular/core";
import { BombModuleSelector } from "./module-selector/module-selector.component";
import { BombModuleInterface } from "./bomb-module.interface";
import { BehaviorSubject, Observable } from "rxjs"
import { maxPorts } from "./bomb-component/ports.data";
import { maxIndicators } from "./bomb-component/litIndicators.data";

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
    private litIndicatorsSubject = new BehaviorSubject<string[]>([]);
    private portsSubject = new BehaviorSubject<string[]>([]);

    private litIndicators: string[] = [];
    private ports: string[] = [];

    constructor() {}

    // add and remove modules
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

    // modify lit indicators
    public getLitIndicators(): Observable<string[]> {
        return this.litIndicatorsSubject.asObservable();
    }

    public addLitIndicator(name: string): void {
        // if too maany lit indicators show alert
        if(this.litIndicators.length < maxIndicators) {
            this.litIndicators.push(name);
            this.litIndicatorsSubject.next(this.litIndicators);
        }
    }

    public removeLitIndicator(index: number): void {
        this.litIndicators.splice(index, 1);
        this.litIndicatorsSubject.next(this.litIndicators);
    }

    // modify ports
    public getPorts(): Observable<string[]> {
        return this.portsSubject.asObservable();
    }

    public addPort(name: string): void {
        // if too many ports
        if(this.ports.length < maxPorts) {
            this.ports.push(name);
            this.portsSubject.next(this.ports);
        }
    }

    public removePort(index: number): void {
        this.ports.splice(index, 1);
        this.portsSubject.next(this.ports);
    }
}