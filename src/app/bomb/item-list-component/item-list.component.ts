import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: '[interactive-item-list]',
    templateUrl: './item-list.component.html',
    styleUrls: [
        './item-list.component.css',
    ],
})
export class ItemListComponent {
    @Input('items') items: any[] = [];
    @Input('options') options: any[];
    @Input('label') label: string;
    @Input('text') text: string;
    @Input('showClose') showClose: boolean = true;
    @Input('formatting') formatting: ClassFormatting = {};
    
    @Output('onItem') onClick = new EventEmitter<any>();
    @Output('onOption') onOption = new EventEmitter<any>();

    // propagate click
    public itemClick(index: number): void {
        this.onClick.emit(index);
    }

    public optionClick(item: any): void {
        this.onOption.emit(item);
    }

    // get class of an item from formatting
    public getClass(item: string | number): string {
        if(!this.formatting) return "";
        var classFormat: string = this.formatting[item];
        if(!classFormat) return "";
        return classFormat;
    }
}

export interface ClassFormatting {
    [item: string]: string;
    [item: number]: string;
}