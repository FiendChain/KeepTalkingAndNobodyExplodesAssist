import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BombService } from "./bomb.service";
import { BombComponent } from './bomb.component';

import { ButtonComponent } from './modules/button/button.component';
import { ComplicatedWiresComponent } from './modules/complicated-wires/complicated-wires.component';
import { MazeComponent } from './modules/maze/maze.component';
import { MemoryComponent } from './modules/memory/memory.component';
import { MorseCodeComponent } from './modules/morse-code/morse-code.component';
import { PasswordComponent } from './modules/password/password.component';
import { SimonSaysComponent } from './modules/simon-says/simon-says.component';
import { WhoFirstComponent } from './modules/who-first/who-first.component';
import { WireSequenceComponent } from './modules/wire-sequence/wire-sequence.component';
import { WiresComponent } from './modules/wires/wires.component';

import { CapacitorComponent } from './needy-modules/capacitor/capacitor.component';
import { GasComponent } from './needy-modules/gas/gas.component';
import { KnobComponent } from './needy-modules/knob/knob.component';

import { FormsModule } from '@angular/forms';
import { BombModuleSelector } from './module-selector/module-selector.component';
import { BombModuleContainer } from './module-selector/module-container.directive';
import { BombModuleInterface } from './bomb-module.interface';

@NgModule({
    exports: [
        BombComponent,
    ],
    declarations: [
        BombComponent,
        // module selector
        BombModuleSelector,
        BombModuleContainer,
        // regular modules
        ButtonComponent,
        WiresComponent,
        SimonSaysComponent,
        MorseCodeComponent,
        MemoryComponent,
        WhoFirstComponent,
        ComplicatedWiresComponent,
        WireSequenceComponent,
        MazeComponent,
        PasswordComponent,
        // needy modules
        GasComponent,
        CapacitorComponent,
        KnobComponent,
    ],
    entryComponents: [
        // regular modules
        ButtonComponent,
        WiresComponent,
        SimonSaysComponent,
        MorseCodeComponent,
        MemoryComponent,
        WhoFirstComponent,
        ComplicatedWiresComponent,
        WireSequenceComponent,
        MazeComponent,
        PasswordComponent,
        // needy modules
        GasComponent,
        CapacitorComponent,
        KnobComponent,
    ],
    providers: [
        BombService,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    bootstrap: [
        BombComponent,
    ]
})
export class BombModule { }
