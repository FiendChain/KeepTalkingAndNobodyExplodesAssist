// position data for all possible knobs
export const knobPositions: KnobPositions = {
    // up position
    up:[
        [0,0,1,0,1,1,
         1,1,1,1,0,1,],
        [1,0,1,0,1,0,
         0,1,1,0,1,1,],
    ],
    // down position
    down: [
        [0,1,1,0,0,1,
         1,1,1,1,0,1,],
        [1,0,1,0,1,0,
         0,1,0,0,0,1,],
    ],
    // left
    left: [
        [0,0,0,0,1,0,
         1,0,0,1,1,1,],
        [0,0,0,0,1,0,
         0,0,0,1,1,0,],
    ],
    // right
    right: [
        [1,0,1,1,1,1,
         1,1,1,0,1,0,],
        [1,0,1,1,0,0,
         1,1,1,0,1,0,],
    ],
};

export const totalKnobs: number = 12;



interface KnobPositions {
    up:     LedState[];
    down:   LedState[];
    left:   LedState[];
    right:  LedState[];
    [direction: string]: LedState[];
}

export type LedState = (boolean|number)[];