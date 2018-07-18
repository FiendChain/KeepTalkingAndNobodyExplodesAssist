import { knobPositions, LedState, totalKnobs } from './knob-positions.data';

// get possible moves given current LED state
export function getPossibleMoves(state: LedState): string[] {
    var possibleMoves: string[] = [];
    // if state has not been initialised at all
    // dont check
    var hasLed: boolean = false;
    for(let led of state) {
        if(led) {
            hasLed = true;
            break;
        }
    }
    if(!hasLed) return possibleMoves;
    // get directions
    for(let direction in knobPositions) {
        let possibleStates = knobPositions[direction];
        var isPossible = false;
        // go through states
        for(let possibleState of possibleStates) {
            if(checkStateSubsetofState(state, possibleState)) {
                isPossible = true;
                break;
            }
        }
        // if possible add the direction
        if(isPossible) possibleMoves.push(direction);
    }
    return possibleMoves;
}

// checks if a is a subset of b's states
function checkStateSubsetofState(a: LedState, b: LedState): boolean {
    for(var i = 0; i < totalKnobs; i++) {
        // subset means that b can be on and a doesnt have to be
        // but if a is on, and b isnt, it means it is no longer
        // a subset
        if(a[i] && !b[i]) return false;
    }
    return true;
}