
interface validationError {
    error: string,
    feild: string
}

function isEmpty(value: any, field: any) {
    let validationErrors: validationError[] = [];

    validationErrors.push({ error: `${field} is missing`, feild: `${field}` });

    return validationErrors;
}


function isString(value: any, field: any) {
    let validationErrors: validationError[] = [];

    if (value === undefined || value === null || value === " ") {
        validationErrors.push({ error: `${field} is missing`, feild: `${field}` });
    }
    else if (typeof value != 'string') {
        validationErrors.push({ error: `${field} is not string`, feild: `${field}` });
    }

    return validationErrors;
}

function isNumber(value: any, field: any) {
    let validationErrors: validationError[] = [];
    if (value === undefined || value === null) {
        validationErrors.push({ error: `${field} is missing`, feild: `${field}` });
    }
    else if (typeof value != 'number') {
        validationErrors.push({ error: `${field} is not number`, feild: `${field}` });
    }
    return validationErrors;
}

function isEmail(value: string, field: any) {

    let validationErrors: validationError[] = [];
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(value)) {

        validationErrors.push({ error: `${field} is not valid  Email `, feild: `${field}` });

    }

    return validationErrors;
}


export function validator(requestBody: any, validationObject: any) {

    let validationErrors = [];

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
                    if (stringResult.length > 0) {

                        validationErrors.push(stringResult[0]);
                    }
                    break;
                case 'number':
                    let numberResult = isNumber(value, key);
                    if (numberResult.length > 0) {

                        validationErrors.push(numberResult[0]);
                    }
                    break;
                case 'email':
                    let emailResult = isEmail(value, key);
                    if (emailResult.length > 0) {

                        validationErrors.push(emailResult[0]);

                    }
                default:
                    console.log("");
            }
        } else { // property does not exist
            let emptyResult = isEmpty(value, key);
            if (emptyResult.length > 0) {

                validationErrors.push(emptyResult[0]);
            }
        }
    }
    return validationErrors;
}


const reponseBody = {

    name: "shashankManve",
    phoneNumber: 1234567890,
    email: "shank.07manve@gmail.com"
};

const validationSchema = {

    email: "email"

};

const validationErrors = validator(reponseBody, validationSchema);

if (validationErrors.length > 0) {
    console.log("pass", validationErrors)
}




