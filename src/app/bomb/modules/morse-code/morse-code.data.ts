// morse code table
export const morseCodeTable: MorseCodeTable = {
    // letters
    '.-':   'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..':  'D',
    '.':    'E',
    '..-.': 'F',
    '--.':  'G',
    '....': 'H',
    '..':   'I',
    '.---': 'J',
    '-.-':  'K',
    '.-..': 'L',
    '--':   'M',
    '-.':   'N',
    '---':  'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.':  'R',
    '...':  'S',
    '-':    'T',
    '..-':  'U',
    '...-': 'V',
    '.--':  'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    // numbers
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

interface MorseCodeTable {
    [code: string]: string;
}

// hashtable for the frequencies
export const radioFrequencies: RadioFrequencyMap = {
    'SHELL': 3.505,
    'BALLS': 3.515,
    'SLICK': 3.522,
    'TRICK': 3.532,
    'BOXES': 3.535,
    'LEAKS': 3.542,
    'STROBE': 3.545,
    'BISTRO': 3.552,
    'FLICK': 3.555,
    'BOMBS': 3.565,
    'BREAK': 3.572,
    'BRICK': 3.575,
    'STEAK': 3.582,
    'STING': 3.592,
    'VECTOR': 3.595,
    'BEATS': 3.600,
}

interface RadioFrequencyMap {
    [word: string]: number;
}