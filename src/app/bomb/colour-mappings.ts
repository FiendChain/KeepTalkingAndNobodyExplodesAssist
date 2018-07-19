export const defaultColour = "Grey";

export const colourMappings: Map<string, string> = new Map<string, string>()
    .set('Blue',        'primary')
    .set('Yellow',      'warning')
    .set('Green',       'success')
    .set(defaultColour, 'default')
    .set('Red',         'danger');

export const colourList: string[] = [
    "Black",
    "Blue",
    "Green",
    "Grey",
    "Red",
    "White",
    "Yellow",
];

export function getColourClass(colour?: string): string {
    if(colourMappings.has(colour)) {
        return colourMappings.get(colour);
    } else {
        return "default";
    }
}