import { NgModule } from "../../../../node_modules/@angular/core";
import { NgbModule } from "../../../../node_modules/@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "../../../../node_modules/@angular/platform-browser";
import { FormsModule } from "../../../../node_modules/@angular/forms";

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