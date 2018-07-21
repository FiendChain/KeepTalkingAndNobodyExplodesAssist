export class SquareButton {
    private _colour: string;
    private _text: string;
    public colours = colourList;
    public textList = textList;

    constructor(
        colour?: string,
        text?: string,
    ) {
        this.colour = colour;
        this.text = text;
    }

    set colour(colour: string) {
        if(colour) {
            this._colour = colour;
        } else {
            this._colour = colourList[0];
        }
    }

    get colour(): string {
        return this._colour;
    }

    set text(text: string) {
        if(text) {
            this._text = text;
        } else {
            this._text = textList[0];
        }
    }

    get text(): string {
        return this._text;
    }
}

var colourList: string[] = [
    "Blue",
    "Red",
    "White",
    "Yellow",

]

var textList: string[] = [
    "Abort", 
    "Detonate",
    "Hold",
];

export const colourClasses: any = {
    "Blue": "btn-outline-primary",
    "Red": "btn-outline-danger",
    "White": "btn-white",
    "Yellow": "btn-outline-warning",
}