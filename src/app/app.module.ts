import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BombModule } from './bomb/bomb.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BombModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
