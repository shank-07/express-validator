//  TO CHECK IF FEILD IS PRESENT OR NOT
export function isEmpty(value: any, field: any) {

    return { error: `${field} is missing`, feild: `${field}` };
}