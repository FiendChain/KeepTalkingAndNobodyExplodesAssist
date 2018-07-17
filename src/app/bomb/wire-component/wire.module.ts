import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { WireComponent } from "./wire.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        WireComponent,
    ],
    exports: [
        WireComponent,
    ],
    entryComponents: [
        WireComponent,
    ],
})
export class WireConnectionModule {}