import { 
    colourMappings, 
    colourList, 
    getColourClass, 
    defaultColour 
} from '../colour-mappings';

export class WireConnection {
    public colours = colourList;
    public colourClass: string;
    public dropdownPositon: string;
    public connected: boolean = false;
    public cut: boolean = false;

    constructor(
        private colour: string = undefined,
        public stripped: boolean = false,
        public vertical: boolean = false,
    ) {
        this.setColour(this.colour);
        this.setDropdownPosition();
    }

    // set position of dropdown
    public setDropdownPosition(): void {
        if(!this.vertical) this.dropdownPositon = "bottom-right";
        else               this.dropdownPositon = "right";
    }

    // toggle if stripped
    public toggleStripped(): void {
        if(!this.stripped) this.stripped = true;
        else               this.stripped = false;
    }

    // set the colour of the wire
    public setColour(colour?: string): void {
        this.colourClass = getColourClass(colour);
        if(colour) {
            this.colour = colour;
            this.connected = true;
        } else {
            this.colour = defaultColour;
            this.connected = false;
        }
    }

    // get colour of the wire
    public getColour(): string {
        return this.colour;
    }

    // check if it is connected
    public isConnected(): boolean {
        return this.connected;
    }

    // check if vertical
    public isVertical(): boolean {
        return this.vertical;
    }
}