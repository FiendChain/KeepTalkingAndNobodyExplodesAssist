import { mazeLocations, Location } from "./maze.data";

// get the image file based on location
// if not a valid location, return null
export function getImageFile(start: Location, end: Location): string {
    // check if both start and end locations have been defined
    if(!checkLocationDefined(start) || !checkLocationDefined(end)) {
        return null;
    }
    // only search for correct maze if properly defined startand end locations
    for(let mazeLocation of mazeLocations) {
        if(
            (checkLocationSame(start, mazeLocation.start) && checkLocationSame(end, mazeLocation.end))
          ||(checkLocationSame(end, mazeLocation.start) && checkLocationSame(start, mazeLocation.end))
        ) {
            return mazeLocation.filename;
        }
    }
    return null;
}

// check if two locations are the same
function checkLocationSame(a: Location, b: Location): boolean {
    return (a.x == b.x && a.y == b.y);
}

// check if location has been defined properly
function checkLocationDefined(location: Location): boolean {
    if(location.x == undefined || location.x == null) return false;
    if(location.y == undefined || location.y == null) return false;
    return true;
}