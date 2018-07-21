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
    constructor() {}

    // serial number
    private _serialSubject = new BehaviorSubject<string>("");
    private _serial: string = "";
    private _serialTimeout: any;

    get serial$(): Observable<string> {
        return this._serialSubject.asObservable();
    }

    set serial(serial: string) {
        clearTimeout(this._serialTimeout);
        this._serialTimeout = setTimeout(() => {
            this._serial = serial;
            this._serialSubject.next(this._serial);
        }, 500);
    }

    // add modules
    private _modules: BombModuleSelector[] = [];

    public addModule(bombModule: BombModuleSelector): void {
        this._modules.push(bombModule);
    }

    // total batteries
    private _batteries: string[] = [];
    private _batteriesSubject = new BehaviorSubject<string[]>([]);

    get batteries$(): Observable<string[]> {
        return this._batteriesSubject.asObservable();
    }

    public addBattery(battery: string): void {
        this._batteries.push(battery);
        this._batteriesSubject.next(this._batteries);
    }

    public removeBattery(index: number): void {
        this._batteries.splice(index, 1);
        this._batteriesSubject.next(this._batteries);
    }

    // total strikes
    private _totalStrikes: number = 0;
    private _totalStrikesSubject = new BehaviorSubject<number>(0);

    get totalStrikes$(): Observable<number> {
        return this._totalStrikesSubject.asObservable();
    }

    set totalStrikes(totalStrikes: number) {
        this._totalStrikes = totalStrikes;
        this._totalStrikesSubject.next(this._totalStrikes);
    }

    // lit indicators
    private _litIndicators: string[] = [];
    private _litIndicatorsSubject = new BehaviorSubject<string[]>([]);

    get litIndicators$(): Observable<string[]> {
        return this._litIndicatorsSubject.asObservable();
    }

    public addLitIndicator(name: string): void {
        if(this._litIndicators.length < maxIndicators) {
            this._litIndicators.push(name);
            this._litIndicatorsSubject.next(this._litIndicators);
        }
    }

    public removeLitIndicator(index: number): void {
        this._litIndicators.splice(index, 1);
        this._litIndicatorsSubject.next(this._litIndicators);
    }

    // ports
    private _ports: string[] = [];
    private _portsSubject = new BehaviorSubject<string[]>([]);

    get ports$(): Observable<string[]> {
        return this._portsSubject.asObservable();
    }

    public addPort(name: string): void {
        // if too many ports
        if(this._ports.length < maxPorts) {
            this._ports.push(name);
            this._portsSubject.next(this._ports);
        }
    }

    public removePort(index: number): void {
        this._ports.splice(index, 1);
        this._portsSubject.next(this._ports);
    }
}