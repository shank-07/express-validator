// TO CHECK IF FEILD IS TYPE OF EMAIL
export function isEmail(value: string, field: any) {

    // regex for email validation 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/s;

    if (!emailRegex.test(value)) {

        return { error: `${field} is not valid  Email `, feild: `${field}` };

    }
    return null;
}