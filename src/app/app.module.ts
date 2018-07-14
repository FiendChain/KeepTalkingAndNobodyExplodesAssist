import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './bomb/modules/button/button.component';
import { WiresComponent } from './bomb/modules/wires/wires.component';
import { SimonSaysComponent } from './bomb/modules/simon-says/simon-says.component';
import { MorseCodeComponent } from './bomb/modules/morse-code/morse-code.component';
import { MemoryComponent } from './bomb/modules/memory/memory.component';
import { WhoFirstComponent } from './bomb/modules/who-first/who-first.component';
import { ComplicatedWiresComponent } from './bomb/modules/complicated-wires/complicated-wires.component';
import { WireSequenceComponent } from './bomb/modules/wire-sequence/wire-sequence.component';
import { MazesComponent } from './bomb/modules/mazes/mazes.component';
import { PasswordsComponent } from './bomb/modules/passwords/passwords.component';
import { MazeComponent } from './bomb/modules/maze/maze.component';
import { PasswordComponent } from './bomb/modules/password/password.component';
import { GasComponent } from './bomb/needy-modules/gas/gas.component';
import { CapacitorComponent } from './bomb/needy-modules/capacitor/capacitor.component';
import { KnobComponent } from './bomb/needy-modules/knob/knob.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WiresComponent,
    SimonSaysComponent,
    MorseCodeComponent,
    MemoryComponent,
    WhoFirstComponent,
    ComplicatedWiresComponent,
    WireSequenceComponent,
    MazesComponent,
    PasswordsComponent,
    MazeComponent,
    PasswordComponent,
    GasComponent,
    CapacitorComponent,
    KnobComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
