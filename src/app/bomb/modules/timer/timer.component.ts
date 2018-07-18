import { Component } from '@angular/core';
import { BombService } from '../../bomb.service';
import { BombTimer, BombTimerDigit } from './bomb-timer';
import { BombModuleInterface } from '../../bomb-module.interface';



@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements BombModuleInterface {
    public name: string = 'timer';

    public timer: BombTimer = new BombTimer([
        new BombTimerDigit(60, 5, "m"),
        new BombTimerDigit(60, 0, "s"),
    ]);

    public totalStrikes: number = 0;

    constructor(
        public service: BombService,
    ) { 
        this.service.getTotalStrikes().subscribe((totalStrikes) => {
            this.totalStrikes = totalStrikes;
        });
    }
}
