"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
//  TO CHECK IF FEILD IS PRESENT OR NOT
function isEmpty(value, field) {
    return { error: field + " is missing", feild: "" + field };
}
//  TO CHECK IF FEILD IS STRING 
function isString(value, field) {
    if (value === undefined || value === null || value === " " || value.trim() === "") {
        return { error: field + " is missing", feild: "" + field };
    }
    else if (typeof value != 'string') {
        return { error: field + " is not a string", feild: "" + field };
    }
    return null;
}
// TO CHECK IF FEILD IS NUMBER
function isNumber(value, field) {
    if (value === undefined || value === null) {
        return { error: field + " is missing", feild: "" + field };
    }
    else if (typeof value != 'number') {
        return { error: field + " is not a number", feild: "" + field };
    }
    return null;
}
// TO CHECK IF FEILD IS TYPE OF EMAIL
function isEmail(value, field) {
    // regex for email validation 
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/s;
    if (!emailRegex.test(value)) {
        return { error: field + " is not valid  Email ", feild: "" + field };
    }
    return null;
}
// TO CHECK IF FEILD IS TYPE OF MOBILE NUMBER OR PHONE NUMBER 10 digits
function isMobile(value, field) {
    // regex for Mobile Number
    var phoneRegex = /d{10}/s;
    if (!phoneRegex.test(value)) {
        return { error: field + " is not valid  Email ", feild: "" + field };
    }
    return null;
}
function validator(requestBody, validationObject) {
    var validationErrors = [];
    // traver throught requestBody
    for (var object in validationObject) {
        var parameter = validationObject[object];
        var value = requestBody[object];
        var key = object;
        if (requestBody.hasOwnProperty(object)) { // check if the object has that key
            // property exists check if it follows our criteria
            // validation parameter
            switch (parameter) {
                case 'string':
                    var stringResult = isString(value, key);
                    if (stringResult !== null) {
                        console.dir(stringResult);
                        validationErrors.push(stringResult);
                    }
                    break;
                case 'number':
                    var numberResult = isNumber(value, key);
                    if (numberResult !== null) {
                        validationErrors.push(numberResult);
                    }
                    break;
                case 'email':
                    var emailResult = isEmail(value, key);
                    if (emailResult !== null) {
                        validationErrors.push(emailResult);
                    }
                    break;
                case 'email':
                    var mobileResult = isMobile(value, key);
                    if (mobileResult !== null) {
                        validationErrors.push(mobileResult);
                    }
            }
        }
        else { // property does not exist
            var emptyResult = isEmpty(value, key);
            if (emptyResult !== null) {
                validationErrors.push(emptyResult);
            }
        }
    }
    return validationErrors;
}
exports.validator = validator;
var reponseBody = {
    name: "Jogn Doe",
    phoneNumber: 1234567890,
    email: "example@gmail.com"
};
var validationSchema = {
    name: "string",
    email: "email",
    phoneNumber: "number",
};
var validationErrors = validator(reponseBody, validationSchema);
if (validationErrors.length > 0) {
    console.log(validationErrors);
}
if (validationErrors.length === 0) {
    console.log("No Validation Errors");
}
