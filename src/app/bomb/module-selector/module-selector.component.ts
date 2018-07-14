import { Component, ViewChild, ComponentFactoryResolver, OnInit, Input } from "@angular/core";
// regular modules
import { BombModuleContainer } from "./module-container.directive";
import { ButtonComponent } from "../modules/button/button.component";
import { BombService } from "../bomb.service";
import { BombModuleInterface } from "../bomb-module.interface";
import { bombModules, bombModuleNames } from "./bomb-module-list";

@Component({
    selector: 'bomb-module-selector',
    templateUrl: './module-selector.component.html',
})
export class BombModuleSelector implements OnInit {
    @Input('module-name') moduleName: string = bombModuleNames[0];

    @ViewChild(BombModuleContainer) module: BombModuleContainer;
    private moduleInstance: BombModuleInterface;

    constructor(
        private componentFactorResolver: ComponentFactoryResolver,
        private bombService: BombService,
    ) {
        this.bombService.addModule(this);
    }

    ngOnInit(): void {
        this.loadModule();
    }

    public getModule(): BombModuleInterface {
        return this.moduleInstance;
    }

    public getOptions(): string[] {
        return bombModuleNames;
    }

    public loadModule(): void {
        if(!this.moduleName) {
            this.module.viewContainerRef.clear();
        } else if(bombModules.has(this.moduleName)) {
            this.loadComponent(bombModules.get(this.moduleName));
        } else {
            this.loadComponent(ButtonComponent);
            this.moduleName = bombModuleNames[0];
        }  
    }

    private loadComponent(component): void {
        let componentFactory = this.componentFactorResolver.resolveComponentFactory(component);
        let viewRefContainer = this.module.viewContainerRef;
        viewRefContainer.clear();
        let componentRef = viewRefContainer.createComponent(componentFactory);
        this.moduleInstance = <BombModuleInterface>componentRef.instance;
    }
}