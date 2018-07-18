import { 
    displayOptions, displayRules, 
    labelRules, labelOptions 
} from "./who-first.rules";


// given display and labels, get the index of the button to press
// if invalid config, return null
export function getButtonPress(display: string, labels: string[]): number {
    // perform checks
    if(!display || !labels) return null;
    // get the label to search
    let searchIndex: number = displayRules[display];
    if(!searchIndex) return null;   // if option is not valid
    // get the label from the labels list
    let searchLabel: string = labels[searchIndex];
    if(!searchLabel) return null; // if that label has not been declared yet, ignore
    // given the label, get the rule set
    let labelRuleSet: string[] = labelRules[searchLabel];
    if(!labelRuleSet) return null;  // if that label has no associated ruleset ignore
    // otherwise start searching for the correct button to press
    for(let labelItem of labelRuleSet) {
        // iterate through existing labels and see if there is a match
        // if there is return the index of that label
        for(var i = 0; i < labels.length; i++) {
            if(labelItem == labels[i]) {
                return i;
            }
        }
    }
    // if not found
    return null; 
}

function comparator(a: string, b: string): number {
    if(!a || !b) return undefined;
    return a.localeCompare(b);
}

