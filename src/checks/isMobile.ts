// TO CHECK IF FEILD IS TYPE OF MOBILE NUMBER OR PHONE NUMBER 10 digits
export function isMobile(value: string, field: any) {

    // regex for Mobile Number
    const phoneRegex = /d{10}/s;

    if (!phoneRegex.test(value)) {
        return { error: `${field} is not valid  Email `, feild: `${field}` };
    }
    return null;

}