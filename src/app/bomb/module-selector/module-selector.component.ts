import { Component, ViewChild, ComponentFactoryResolver, OnInit, Input } from "@angular/core";
// regular modules
import { BombModuleContainer } from "./module-container.directive";
import { BombService } from "../bomb.service";
import { BombModuleInterface } from "../bomb-module.interface";
import { bombModules, bombModuleNames, bombModuleDependencies } from "./bomb-module-list";

@Component({
    selector: 'bomb-module-selector',
    templateUrl: './module-selector.component.html',
    styleUrls: [
        './module-selector.component.css',
    ],
})
export class BombModuleSelector implements OnInit {
    @Input('module-name') moduleName: string;

    @ViewChild(BombModuleContainer) private moduleContainer: BombModuleContainer;
    private _module: BombModuleInterface;
    private _dependencies: string[];

    constructor(
        private componentFactorResolver: ComponentFactoryResolver,
        private bombService: BombService,
    ) {
        this.bombService.addModule(this);
    }

    ngOnInit(): void {
        this.loadModule(this.moduleName);
    }

    set module(component: BombModuleInterface) {
        // if null module
        if(!component) {
            this.moduleContainer.viewContainerRef.clear();
            this._module = undefined;
            this._dependencies = undefined;
        } else {
            let componentFactory = this.componentFactorResolver.resolveComponentFactory(<any>component);
            let viewRefContainer = this.moduleContainer.viewContainerRef;
            viewRefContainer.clear();
            let componentRef = viewRefContainer.createComponent(componentFactory);
            this._module = <BombModuleInterface>componentRef.instance;
        }
    }

    get module(): BombModuleInterface {
        return this._module;
    }

    set dependencies(dependencies: string[]) {
        this._dependencies = dependencies;
    }

    get dependencies(): string[] {
        return this._dependencies;
    }

    get options(): string[] {
        return bombModuleNames;
    }
    
    public loadModule(name?: string): void {
        this.moduleName = name;
        if(!name) {
            this.module = undefined;
        } else if(bombModules.has(name)) {
            this.module = bombModules.get(name);
            this._dependencies = bombModuleDependencies.get(name);
        } else {
            this.module = undefined;
        }  
    }
}