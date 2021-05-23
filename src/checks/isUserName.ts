
//  TO CHECK IF FEILD IS STRING 
export function isUserName(value: any, field: any) {

    if (value === undefined || value === null || value === " " || value.trim() === "") {
        return { error: `${field} is missing`, feild: `${field}` };
    }
    else if (typeof value != 'string') {
        return { error: `${field} is not a string`, feild: `${field}` };
    }

    return null;
}