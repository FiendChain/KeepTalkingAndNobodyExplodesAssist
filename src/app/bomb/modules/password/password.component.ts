import { Component } from '@angular/core';
import { BombModuleInterface } from '../../bomb-module.interface';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements BombModuleInterface {
    public name: string = 'password';

    constructor() { }

}
