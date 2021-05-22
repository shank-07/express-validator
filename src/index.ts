
interface validationError {
    error: string,
    feild: string
}

//  TO CHECK IF FEILD IS PRESENT OR NOT
function isEmpty(value: any, field: any) {

    return { error: `${field} is missing`, feild: `${field}` };
}

//  TO CHECK IF FEILD IS STRING 
function isString(value: any, field: any) {

    if (value === undefined || value === null || value === " " || value.trim() === "") {
        return { error: `${field} is missing`, feild: `${field}` };
    }
    else if (typeof value != 'string') {
        return { error: `${field} is not a string`, feild: `${field}` };
    }

    return null;
}

// TO CHECK IF FEILD IS NUMBER
function isNumber(value: any, field: any) {

    if (value === undefined || value === null) {
        return { error: `${field} is missing`, feild: `${field}` };
    }
    else if (typeof value != 'number') {
        return { error: `${field} is not a number`, feild: `${field}` };
    }
    return null;
}

// TO CHECK IF FEILD IS TYPE OF EMAIL
function isEmail(value: string, field: any) {

    // regex for email validation 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/s;

    if (!emailRegex.test(value)) {

        return { error: `${field} is not valid  Email `, feild: `${field}` };

    }
    return null;
}

// TO CHECK IF FEILD IS TYPE OF MOBILE NUMBER OR PHONE NUMBER 10 digits
function isMobile(value: string, field: any) {

    // regex for Mobile Number
    const phoneRegex = /d{10}/s;

    if (!phoneRegex.test(value)) {
        return { error: `${field} is not valid  Email `, feild: `${field}` };
    }
    return null;
    
}



export function validator(requestBody: any, validationObject: any) {

    let validationErrors: validationError[] = [];

    // traver throught requestBody
    for (let object in validationObject) {

        let parameter = validationObject[object];
        let value = requestBody[object];
        let key = object;

        if (requestBody.hasOwnProperty(object)) { // check if the object has that key
            // property exists check if it follows our criteria
            // validation parameter
            switch (parameter) {
                case 'string':
                    let stringResult = isString(value, key);
                    if (stringResult !== null) {
                        console.dir(stringResult);
                        validationErrors.push(stringResult);
                    }
                    break;
                case 'number':
                    let numberResult = isNumber(value, key);
                    if (numberResult !== null) {
                        validationErrors.push(numberResult);
                    }
                    break;
                case 'email':
                    let emailResult = isEmail(value, key);
                    if (emailResult !== null) {
                        validationErrors.push(emailResult);
                    }
                    break;
                case 'email':
                    let mobileResult = isMobile(value, key);
                    if (mobileResult !== null) {
                        validationErrors.push(mobileResult);
                    }

            }
        } else { // property does not exist
            let emptyResult = isEmpty(value, key);
            if (emptyResult !== null) {

                validationErrors.push(emptyResult);
            }
        }
    }
    return validationErrors;
}


const reponseBody = {

    name: "Jogn Doe",
    phoneNumber: 1234567890,
    email: "example@gmail.com"

};

const validationSchema = {
    name: "string",
    email: "email",
    phoneNumber: "number",
};

const validationErrors = validator(reponseBody, validationSchema);

if (validationErrors.length > 0) {
    console.log(validationErrors);
}

if (validationErrors.length === 0) {
    console.log("No Validation Errors");
}




