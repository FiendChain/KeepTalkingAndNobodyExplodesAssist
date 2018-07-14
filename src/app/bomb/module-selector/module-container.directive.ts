import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[bomb-module-container]',
})
export class BombModuleContainer {
    constructor(
        public viewContainerRef: ViewContainerRef,
    ) {}
}