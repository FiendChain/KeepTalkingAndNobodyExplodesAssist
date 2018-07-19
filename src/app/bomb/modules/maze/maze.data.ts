// maze data

const folder: string = "assets/mazes"
const prefix: string = `${folder}/maze_`;
const fileExtension: string = "png";

// maze locations
export const mazeLocations: MazeLocation[] = [
    {  start: {x:1,y:1}, end: {x:1,y:4} },
    {  start: {x:1,y:2}, end: {x:6,y:3} },
    {  start: {x:1,y:5}, end: {x:3,y:2} },
    {  start: {x:2,y:1}, end: {x:2,y:6} },
    {  start: {x:2,y:4}, end: {x:5,y:2} },
    {  start: {x:3,y:4}, end: {x:4,y:1} },
    {  start: {x:3,y:5}, end: {x:5,y:1} },
    {  start: {x:4,y:4}, end: {x:6,y:4} },
    {  start: {x:4,y:6}, end: {x:5,y:3} },
]

// auto create the correct file names
for(let location of mazeLocations) {
    let start: string = `${location.start.x}${location.start.y}`
    let end: string = `${location.end.x}${location.end.y}`;
    location.filename = `${prefix}${start}_${end}.${fileExtension}`; 
}

interface MazeLocation {
    start: Location;
    end: Location;
    filename?: string;
}

export interface Location {
    x: number;
    y: number;
}