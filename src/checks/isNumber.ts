// TO CHECK IF FEILD IS NUMBER

export function isNumber(value: any, field: any) {

    if (value === undefined || value === null) {
        return { error: `${field} is missing`, feild: `${field}` };
    }
    else if (typeof value != 'number') {
        return { error: `${field} is not a number`, feild: `${field}` };
    }
    return null;
}