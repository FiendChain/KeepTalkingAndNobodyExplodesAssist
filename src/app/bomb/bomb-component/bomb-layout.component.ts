export interface BombLayoutInterface {
    front: Array<Array<string>>;
    back:  Array<Array<string>>;
}

export var BombLayout: BombLayoutInterface = {
    "front": [
        ["Timer", "Buttons", "Wires"],
        ["Complicated Wires", "Simon Says", null],
    ],
    "back": [
        [null, null, null],
        [null, null, null],
    ],
}