import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: '[interactive-item-list]',
    templateUrl: './item-list.component.html',
    styleUrls: [
        './item-list.component.css',
    ],
})
export class ItemListComponent {
    @Input('items') items: string[] = [];
    @Input('options') options: string[] = [];
    @Input('label') label: string;
    @Input('text') text: string;
    @Output('onItem') onClick = new EventEmitter<number>();
    @Output('onOption') onOption = new EventEmitter<string>();

    // propagate click
    public itemClick(index: number): void {
        this.onClick.emit(index);
    }

    public optionClick(item: string): void {
        this.onOption.emit(item);
    }
}