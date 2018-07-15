export interface BombLayoutInterface {
    front: Array<Array<string>>;
    back:  Array<Array<string>>;
}

export var BombLayout: BombLayoutInterface = {
    "front": [
        ["Timer", "Buttons", null],
        [null, null, null],
    ],
    "back": [
        [null, null, null],
        [null, null, null],
    ],
}