import { SquareButton } from "./button-component/button.model";
import { StripLED } from "./strip-component/strip.model";

const useStripMsg: string = "Hold button and refer to led strip"; 
const immediateReleaseMessage: string = "Press and immediately release the button";

export function getInstructions(button: SquareButton, strip: StripLED, totalBatteries: number, indicators: string[]): ButtonInstructions {
    var useStrip: boolean = false;
    var buttonAction: string;
    var stripAction: string;

    // if blue and abort, refer to strip
    if(button.colour == 'Blue' &&
       button.text == "Abort") {
        useStrip = true;
    // if more than one battery and says Detonate
    // press and immediately hold button
    } else if(totalBatteries > 1 &&
              button.text == "Detonate") {
        buttonAction = immediateReleaseMessage;
    // if button is white and lit indicator is CAR
    // refer to strip
    } else if(checkIfIndicatorExists("CAR", indicators) &&
              button.colour == "White") {
        useStrip = true;
    // if more than 2 batteries and lit indicator with FRK
    // immediate release the button
    } else if(checkIfIndicatorExists("FRK", indicators) &&
              totalBatteries > 2) {
        buttonAction = immediateReleaseMessage;
    // if button is yellow, refer to strip
    } else if(button.colour == "Yellow") {
        useStrip = true;
    // if button is red and button says Hold, press and immediately release
    } else if(button.colour == "Red" &&
              button.text == "Hold") {
        buttonAction = immediateReleaseMessage;
    // if none apply, refer to strip
    } else {
        useStrip = true;
    }

    // finalise messages
    if(useStrip) {
        buttonAction = useStripMsg;
        stripAction = getStripAction(strip);
    }

    return {
        buttonAction: buttonAction,
        stripAction: stripAction,
    }
}

function getStripAction(stripLED: StripLED): string {
    switch(stripLED.colour) {
    case "Blue":
        return getStripActionString(4);
    case "White":
        return getStripActionString(1);
    case "Yellow":
        return getStripActionString(5);
    default:
        return getStripActionString(1);
    }
}

function getStripActionString(n: number): string {
    return `Release when countdown timer has a ${n} in any position`;
}

function checkIfIndicatorExists(text: string, indicators: string[]): boolean {
    for(let indicator of indicators) {
        if(indicator == text) return true;
    }
    return false;
}

export interface ButtonInstructions {
    buttonAction: string;
    stripAction?: string;
}