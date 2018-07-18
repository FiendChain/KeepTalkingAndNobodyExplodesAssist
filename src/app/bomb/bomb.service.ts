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
    // observables to listen to
    private serialSubject = new BehaviorSubject<string>("");
    private modulesSubject = new BehaviorSubject<BombModuleInterface[]>([]);
    private totalBatteriesSubject = new BehaviorSubject<number>(0);
    private totalStrikesSubject = new BehaviorSubject<number>(0);
    private litIndicatorsSubject = new BehaviorSubject<string[]>([]);
    private portsSubject = new BehaviorSubject<string[]>([]);

    // internal bomb data
    private modules: BombModuleSelector[] = [];
    private serial: string = "";
    private totalBatteries: number = 0;
    private totalStrikes: number = 0;
    private litIndicators: string[] = [];
    private ports: string[] = [];

    // timeouts to prevent too many changes from happening
    private serialTimeout: any;

    constructor() {}

    // set and get serial number
    public getSerial(): Observable<string> {
        return this.serialSubject.asObservable();
    }

    public setSerial(serial: string): void {
        clearTimeout(this.serialTimeout);
        this.serialTimeout = setTimeout(() => {
            this.serial = serial;
            this.serialSubject.next(serial);
        }, 500);
    }

    // add and remove modules
    public addModule(bombModule: BombModuleSelector): void {
        this.modules.push(bombModule);
        // update the modules to subscribers
        var modules: BombModuleInterface[] = [];
        for(let module of this.modules) {
            modules.push(module.getModule());
        }
        this.modulesSubject.next(modules);
    }

    public getModules(): Observable<BombModuleInterface[]> {
        return this.modulesSubject.asObservable();
    }

    // total batteries subscriber
    public getTotalBatteries(): Observable<number> {
        return this.totalBatteriesSubject.asObservable();
    }

    public setTotalBatteries(totalBatteries: number): void {
        this.totalBatteries = totalBatteries;
        this.totalBatteriesSubject.next(totalBatteries);
    }

    // add total strikes subscriber
    public getTotalStrikes(): Observable<number> {
        return this.totalStrikesSubject.asObservable();
    }

    public setTotalStrikes(totalStrikes: number): void {
        this.totalStrikes = totalStrikes;
        this.totalStrikesSubject.next(totalStrikes);
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