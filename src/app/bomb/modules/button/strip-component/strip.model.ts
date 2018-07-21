export class StripLED {
    private _colour: string;
    public colours = stripColours;

    constructor(
        colour?: string,
    ) {
        this.colour = colour;
    }

    set colour(colour: string) {
        if(colour) {
            this._colour = colour;
        } else {
            this._colour = this.colours[0];
        }
    }

    get colour(): string {
        return this._colour;
    }
}

var stripColours: string[] = [
    'Blue',
    'White',
    'Yellow',
    'Green',
]