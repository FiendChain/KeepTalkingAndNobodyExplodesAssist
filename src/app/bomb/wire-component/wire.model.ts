import {  
    colourList, 
    defaultColour 
} from '../colour-mappings';

export class WireConnection {
    public colours = colourList;
    public dropdownPositon: string;
    public connected: boolean = false;
    public cut: boolean = false;

    constructor(
        private colour: string = undefined,
        private stripeColour: string = undefined,
        public stripped: boolean = false,
        public vertical: boolean = false,
    ) {
        this.setColour(this.colour);
        this.setStripeColour(this.stripeColour);
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
        if(colour) {
            this.colour = colour;
            this.connected = true;
        } else {
            this.colour = colourList[0];
            this.connected = false;
        }
    }

    // set the colour of the stripe
    public setStripeColour(colour?: string): void {
        if(colour) {
            this.stripeColour = colour;
            this.connected = true;
        } else {
            this.stripeColour = colourList[0];
            this.connected = false;
        }
    }

    // get colour of the wire
    public getColour(): string {
        return this.colour;
    }

    // get stripped colour
    public getStripeColour(): string {
        return this.stripeColour;
    }

    // get stripe class
    public getStripeClass(): any {
        var className: string = `stripe-${this.stripeColour.toLowerCase()}`;
        var classMap: any = {};
        classMap[className] = this.stripped;
        return classMap;
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