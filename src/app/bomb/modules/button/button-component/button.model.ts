export class SquareButton {
    private colour: string;
    private text: string;
    public colours = colourList;
    public textList = textList;

    constructor(
        colour?: string,
        text?: string,
    ) {
        this.setColour(colour);
        this.setText(text);
    }

    public setColour(colour?: string): void {
        if(colour) {
            this.colour = colour;
        } else {
            this.colour = colourList[0];
        }
    }

    public getColour(): string {
        return this.colour;
    }

    public setText(text?: string): void {
        if(text) {
            this.text = text;
        } else {
            this.text = textList[0];
        }
    }

    public getText(): string {
        return this.text;
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