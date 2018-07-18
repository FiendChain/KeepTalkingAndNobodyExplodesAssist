interface WireRules {
    [colour: string]: Array<Array<string>>;
    black: Array<Array<string>>;
    blue: Array<Array<string>>;
    red: Array<Array<string>>;
}

export const maxWirePerColour: number = 9;
export const rules: WireRules = {
    red: [
        ['C'],
        ['B'],
        ['A'],
        ['A', 'C'],
        ['B'],
        ['A', 'C'],
        ['A', 'B', 'C'],
        ['A', 'B'],
        ['B'],
    ],
    blue: [
        ['B'],
        ['A', 'C'],
        ['B'],
        ['A'],
        ['B'],
        ['B', 'C'],
        ['C'],
        ['A', 'C'],
        ['A'],
    ],
    black : [
        ['A', 'B', 'C'],
        ['A', 'C'],
        ['B'],
        ['A', 'C'],
        ['B'],
        ['B', 'C'],
        ['A', 'B'],
        ['C'],
        ['C'],
    ],
}


