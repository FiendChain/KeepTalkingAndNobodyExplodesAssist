import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StripLedComponent } from "./strip-component/strip.component";
import { ButtonComponent } from "./button.component";
import { SquareButtonComponent } from "./button-component/button.component";

@NgModule({
    imports: [
        BrowserModule,
        NgbModule,
    ],
    exports: [
        ButtonComponent,
    ],
    declarations: [
        StripLedComponent,
        SquareButtonComponent,
        ButtonComponent,
    ],
    entryComponents: [
        ButtonComponent,
    ],
})
export class BombButtonModule {}