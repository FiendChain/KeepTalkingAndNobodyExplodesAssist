export class StripLED {
    private colour: string;
    public colours = stripColours;

    constructor(
        colour?: string,
    ) {
        this.setColour(colour);
    }

    public setColour(colour?: string): void {
        if(colour) {
            this.colour = colour;
        } else {
            this.colour = this.colours[0];
        }
    }

    public getColour(): string {
        return this.colour;
    }
}

var stripColours: string[] = [
    'Blue',
    'White',
    'Yellow',
    'Green',
]