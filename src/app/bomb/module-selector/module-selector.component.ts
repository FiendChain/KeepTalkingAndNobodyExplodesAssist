import { Component, ViewChild, ComponentFactoryResolver, OnInit } from "@angular/core";
import { BombModuleContainer } from "./module-container.directive";
import { ButtonComponent } from "../modules/button/button.component";
import { BombService } from "../bomb.service";
import { ComplicatedWiresComponent } from "../modules/complicated-wires/complicated-wires.component";
import { MazeComponent } from "../modules/maze/maze.component";
import { MemoryComponent } from "../modules/memory/memory.component";
import { MorseCodeComponent } from "../modules/morse-code/morse-code.component";
import { PasswordComponent } from "../modules/password/password.component";
import { SimonSaysComponent } from "../modules/simon-says/simon-says.component";
import { WhoFirstComponent } from "../modules/who-first/who-first.component";
import { WireSequenceComponent } from "../modules/wire-sequence/wire-sequence.component";
import { CapacitorComponent } from "../needy-modules/capacitor/capacitor.component";
import { GasComponent } from "../needy-modules/gas/gas.component";
import { KnobComponent } from "../needy-modules/knob/knob.component";

@Component({
    selector: 'bomb-module-selector',
    templateUrl: './module-selector.component.html',
})
export class BombModuleSelector implements OnInit {
    @ViewChild(BombModuleContainer) module: BombModuleContainer;
    private static options: Map<string, any> = new Map<string, any>()
        .set("buttons", ButtonComponent)
        .set("complicated-wires", ComplicatedWiresComponent)
        .set("maze", MazeComponent)
        .set("memory", MemoryComponent)
        .set("morse-code", MorseCodeComponent)
        .set("password", PasswordComponent)
        .set("simon-says", SimonSaysComponent)
        .set("who-first", WhoFirstComponent)
        .set("wire-sequence", WireSequenceComponent)
        .set("capacitor", CapacitorComponent)
        .set("gas", GasComponent)
        .set("knob", KnobComponent);

    public static optionNames: string[] = Array.from(BombModuleSelector.options.keys());

    private moduleInstance: any;

    constructor(
        private componentFactorResolver: ComponentFactoryResolver,
        private bombService: BombService,
    ) {
        this.bombService.addModule(this);
    }

    ngOnInit(): void {
        this.loadModule();
    }

    public getModule(): any {
        return this.moduleInstance;
    }

    public getOptions(): string[] {
        return BombModuleSelector.optionNames;
    }

    private loadModule(option?: string): void {
        if(BombModuleSelector.options.has(option)) {
            this.loadComponent(BombModuleSelector.options.get(option));
        } else {
            this.loadComponent(ButtonComponent);
        }  
    }

    private loadComponent(component): void {
        let componentFactory = this.componentFactorResolver.resolveComponentFactory(component);
        let viewRefContainer = this.module.viewContainerRef;
        viewRefContainer.clear();
        let componentRef = viewRefContainer.createComponent(componentFactory);
        this.moduleInstance = componentRef.instance;
    }
}