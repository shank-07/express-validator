
//  TO CHECK IF FEILD IS STRING 
export function isUserName(value: any, field: any) {

    const userNameRegex = /^[a-zA-Z0-9@_.&#]$/s;

    if (!userNameRegex.test(value)) {
        return { error: `${field} is not valid, it must contain smallcase, capital case , number , @ , _ , . , & , # , `, feild: `${field}` };
    }

    return null;
}