// create data parser
import { passwords } from './password.data';

export function retrievePasswords(combos: WordCombinations): string[] {
    // get total columns
    // hoisted since invariant
    var totalColumns: number = 0;
    for(let combo of combos) {
        if(combo.length > 0) totalColumns++;
    }
    // if total columns is 0, then just ignore
    if(totalColumns <= 0) return [];
    // for each password, check if a letter is in the combos
    var validPasswords: string[] = [];
    for(let password of passwords) {
        if(validatePassword(password, combos, totalColumns)) {
            validPasswords.push(password);
        }
    }
    return validPasswords;
}

// current on extremely greedy mode
// requires alot of looping
// could be improved via Tree ADT
function validatePassword(password: string, combos: WordCombinations, totalColumns: number): boolean {
    // turn on if performance if an issue
    // only checks if they are a possible match if same length
    // if(combos.length != password.length) {
    //     return false;
    // }
    // for each letter of the password, check
    // get the min index for greedy possible passwords
    var maxIndex: number = password.length;
    if(totalColumns < maxIndex) maxIndex = totalColumns;
    // a flag that will become false if they are any discrepencies
    var isValid: boolean = true;
    for(var i = 0; i < maxIndex; i++) {
        // for each character of the password, check if
        // it exists inside the array
        let possibleLetters: string[] = combos[i];
        var foundMatch: boolean = false;
        for(let letter of possibleLetters) {
            // if match found, continue
            if(letter == password[i]) {
                foundMatch = true;
                break;
            }
        }
        // if match was found for that letter, continue
        // otherwise, make it invalid and quit
        if(!foundMatch) {
            isValid = false;
            break;
        }
    }
    return isValid;
}

export type WordCombinations = Array<Array<string>>;

