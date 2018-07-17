// create the mappings for the simon says
interface SimonSaysMapping {
    red: string;
    blue: string;
    green: string;
    yellow: string;
}

interface SimonSaysMatrix {
    0: SimonSaysMapping;
    1: SimonSaysMapping;
    2: SimonSaysMapping;
}

export const serialHasVowels: SimonSaysMatrix = [
    { red: "blue",   blue: "red",   green: "yellow",  yellow: "green"},
    { red: "yellow", blue: "green", green: "blue",    yellow: "red"},
    { red: "green",  blue: "red",   green: "yellow",  yellow: "blue"},
]

export const serialDoesntHaveVowels: SimonSaysMatrix = [
    { red: "blue",   blue: "yellow", green: "green",  yellow: "red"},
    { red: "red",    blue: "blue",   green: "yellow", yellow: "green"},
    { red: "yellow", blue: "green",  green: "blue",   yellow: "red"},
]