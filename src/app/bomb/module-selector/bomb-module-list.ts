// display modules
import { TimerComponent } from "../modules/timer/timer.component";
// regular modules
import { ButtonComponent } from "../modules/button/button.component";
import { ComplicatedWiresComponent } from "../modules/complicated-wires/complicated-wires.component";
import { KeypadComponent } from "../modules/keypad/keypad.component";
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
import { Component } from "../../../../node_modules/@angular/compiler/src/core";

// module list
export const bombModules = new Map<string, Component & BombModuleInterface>()
    // Name of module in dropdown menu, Component 
    .set("Button", ButtonComponent)
    .set("Complicated Wires", ComplicatedWiresComponent)
    .set("Keypad", KeypadComponent)
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

// dependency list
export const bombModuleDependencies = new Map<string, string[]>()
    .set("Button", ["Total batteries", "Lit Indicators"])
    .set("Wires", ["If last digit of serial is odd"])
    .set("Simon Says", ["If serial has vowels", "Total strikes"])
    .set("Complicated Wires", ["If last digit of serial is even", "If there is a parallel port", "Total batteries"]);

// possible names for dropdown list
export var bombModuleNames: string[] = Array.from(bombModules.keys());