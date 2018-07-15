// display modules
import { TimerComponent } from "../modules/timer/timer.component";
// regular modules
import { ButtonComponent } from "../modules/button/button.component";
import { ComplicatedWiresComponent } from "../modules/complicated-wires/complicated-wires.component";
import { MazeComponent } from "../modules/maze/maze.component";
import { MemoryComponent } from "../modules/memory/memory.component";
import { MorseCodeComponent } from "../modules/morse-code/morse-code.component";
import { PasswordComponent } from "../modules/password/password.component";
import { SimonSaysComponent } from "../modules/simon-says/simon-says.component";
import { WhoFirstComponent } from "../modules/who-first/who-first.component";
import { WiresComponent } from "../modules/wires/wires.component";
import { WireSequenceComponent } from "../modules/wire-sequence/wire-sequence.component";
// needy modules
import { CapacitorComponent } from "../needy-modules/capacitor/capacitor.component";
import { GasComponent } from "../needy-modules/gas/gas.component";
import { KnobComponent } from "../needy-modules/knob/knob.component";
import { BombModuleInterface } from "../bomb-module.interface";



// module list
export var bombModules: Map<string, any> = new Map<string, BombModuleInterface>()
    // Name of module in dropdown menu, Component 
    .set("Buttons", ButtonComponent)
    .set("Complicated Wires", ComplicatedWiresComponent)
    .set("Maze", MazeComponent)
    .set("Memory", MemoryComponent)
    .set("Morse Code", MorseCodeComponent)
    .set("Password", PasswordComponent)
    .set("Simon Says", SimonSaysComponent)
    .set("Timer", TimerComponent)   // timer
    .set("Who's First", WhoFirstComponent)
    .set("Wires", WiresComponent)
    .set("Wire Sequence", WireSequenceComponent)
    // needy modules
    .set("Capacitor", CapacitorComponent)
    .set("Gas", GasComponent)
    .set("Knobs", KnobComponent);

// possible names for dropdown list
export var bombModuleNames: string[] = Array.from(bombModules.keys());