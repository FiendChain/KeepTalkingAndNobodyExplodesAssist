import { keypadLists } from "./keypad.data"; 

// return a list of sequence
export function getSequence(keypad: KeypadState): KeypadState {
    for(let keypadList of keypadLists) {
        // if all symbols were matched, indicate it as a valid list
        if(validateList(keypad, keypadList)) {
            return getOrderedSequence(keypad, keypadList);
        }   
    }
    // if no possible options
    return null;
}

// given a valid list, get the sequence from the keypad
function getOrderedSequence(keypad: KeypadState, validList: KeypadState): KeypadState {
    var correctSequence: KeypadState = [];
    for(let validSymbol of validList) {
        for(let symbol of keypad) {
            if(!symbol) continue;
            // if symbol is the same symbol, push it
            // exit loop to check next valid symbols
            if(symbol == validSymbol) {
                correctSequence.push(symbol);
                break;
            }
        }
    }
    return correctSequence;
}

// for a keypad's current state
// return a list of only possible combinations
export function getPossibleFutureOptions(keypad: KeypadState): string[] {
    var possibleLists: string[][] = [];
    for(let keypadList of keypadLists) {
        if(validateList(keypad, keypadList)) {
            possibleLists.push(keypadList);
        }
    }
    // for all possible lists, merge into a list of options
    var optionsMap: OptionsMap = {};
    for(let possibleList of possibleLists) {
        for(let symbol of possibleList) {
            // only add symbol if not already in keypad
            var addSymbol: boolean = true;
            for(let keypadSymbol of keypad) {
                if(keypadSymbol == symbol) {
                    addSymbol = false;
                    break;
                }
            }
            if(addSymbol) optionsMap[symbol] = true;
        }
    }
    // get the options list
    var optionsList: string[] = [];
    for(let symbol in optionsMap) { //only valid options have been defined
        optionsList.push(symbol);
    }
    return optionsList;
}

interface OptionsMap {
    [symbol: string]: boolean;
}

// check if a list has all the items in the keypad
function validateList(keypad: KeypadState, keypadList: string[]): boolean { 
    var isValidList: boolean = true;
    for(let symbol of keypad) {
        if(!symbol) continue;   // if the symbol hasnt been defined yet, ignore
        var foundMatch: boolean = false;
        for(let keypadSymbol of keypadList) {
            // if symbol was found, mark it as valid
            if(keypadSymbol == symbol) {
                foundMatch = true;
                break;
            }
        }
        // if match was not found, declare list as invalid and ignore
        if(!foundMatch) {
            isValidList = false;
            break;
        }
    }
    return isValidList;
}

export type KeypadState = Array<string>;