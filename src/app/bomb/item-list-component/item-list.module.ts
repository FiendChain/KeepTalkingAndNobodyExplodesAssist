import { NgModule } from "@angular/core";
import { ItemListComponent } from "./item-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
    exports: [
        ItemListComponent,
    ],
    declarations: [
        ItemListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
    ],
})
export class ItemListModule {}