import { Component, OnInit } from '@angular/core';
import { BombService } from '../../bomb.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    constructor(
        public service: BombService,
    ) { }

    ngOnInit() {
    }

}
