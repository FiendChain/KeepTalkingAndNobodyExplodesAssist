
export const keypadSymbols: KeypadSymbols = {
    "©": ["copy", "copyright"],
    "¶": ["para", "paragraph", "linebreak", "backwards P"],
    "¿": ["que", "question", "upsidedown question mark", "Spanish question mark"],
    "æ": ["ae", "A E", "ash"],
    "ƀ": ["B", "keyblade", "crossed b", "barred b", "BT smashed"],
    "ƛ": ["lambda", "crossed lambda", "halflife"],
    "Ψ": ["psi", "trident"],
    "Ω": ["Omega"],
    "ϗ": ["H", "cursive H/N with tail"],
    "Ϙ": ["Q", "neuter", "uncrossedfemale", "handmirror", "Owitha♥♥♥♥"],
    "Ϟ": ["koppa", "zigzag"],
    "Ͼ": ["C", "C with a dot"],
    "Ͽ": ["moon", "crescent", "backwards C", "backwards C withadot"],
    "Ж": ["zhe", "X with an I"],
    "Й": ["i", "N", "N with antenna", "N with tail"],
    "б": ["6", "six", "smashed 6", "upsidedown g", "hooktop b"],
    "Ѧ": ["at", "threelegged A", "Awitha♥♥♥♥", "little Yus"],
    "Ѭ": ["an", "cthulhu", "big Yus"],
    "Ѯ": ["ksi", "dragon", "alien 3", "3withantenna"],
    "Ѽ": ["butt", "ot", "xbox", "cyrillic omega"],
    "҂": ["neq (pronounced neck)", "inequality", "unequal"],
    "Ҩ": ["loop", "rollercoaster", "cursive I", "loopdeeloop"],
    "Ӭ": ["eh", "epsilon", "epsilon umlaut", "euro"],
    "Ԇ": ["hoe", "komi dzje", "incomplete R", "trailing off 3"],
    "ټ": ["derpface", "smiley", "Isolated Teh"],
    "★": ["black", "blackstar", "filled star", "full star"],
    "☆": ["star", "open star", "empty star"],
};


interface KeypadSymbols {
    // symbol and descriptions/tooltips
    [symbol: string]: string[];
}

// columns of the symbols
export const keypadLists: string[][] = [
    ["Ϙ", "Ѧ", "ƛ", "Ϟ", "Ѭ", "ϗ", "Ͽ"],
    ["Ӭ", "Ϙ", "Ͽ", "Ҩ", "☆", "ϗ", "¿"],
    ["©", "Ѽ", "Ҩ", "Ж", "Ԇ", "ƛ", "☆"],
    ["б", "¶", "ƀ", "Ѭ", "Ж", "¿", "ټ"],
    ["Ψ", "ټ", "ƀ", "Ͼ", "¶", "Ѯ", "★"],
    ["б", "Ӭ", "҂", "æ", "Ψ", "Й", "Ω"],
];

