"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
function isEmpty(value, field) {
    var validationErrors = [];
    validationErrors.push({ error: field + " is missing", feild: "" + field });
    return validationErrors;
}
function isString(value, field) {
    var validationErrors = [];
    if (value === undefined || value === null || value === " ") {
        validationErrors.push({ error: field + " is missing", feild: "" + field });
    }
    else if (typeof value != 'string') {
        validationErrors.push({ error: field + " is not string", feild: "" + field });
    }
    return validationErrors;
}
function isNumber(value, field) {
    var validationErrors = [];
    if (value === undefined || value === null) {
        validationErrors.push({ error: field + " is missing", feild: "" + field });
    }
    else if (typeof value != 'number') {
        validationErrors.push({ error: field + " is not number", feild: "" + field });
    }
    return validationErrors;
}
function isEmail(value, field) {
    var validationErrors = [];
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(value)) {
        validationErrors.push({ error: field + " is not valid  Email ", feild: "" + field });
    }
    return validationErrors;
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
                    if (stringResult.length > 0) {
                        validationErrors.push(stringResult[0]);
                    }
                    break;
                case 'number':
                    var numberResult = isNumber(value, key);
                    if (numberResult.length > 0) {
                        validationErrors.push(numberResult[0]);
                    }
                    break;
                case 'email':
                    var emailResult = isEmail(value, key);
                    if (emailResult.length > 0) {
                        validationErrors.push(emailResult[0]);
                    }
                default:
                    console.log("");
            }
        }
        else { // property does not exist
            var emptyResult = isEmpty(value, key);
            if (emptyResult.length > 0) {
                validationErrors.push(emptyResult[0]);
            }
        }
    }
    return validationErrors;
}
exports.validator = validator;
var reponseBody = {
    name: "shashankManve",
    phoneNumber: 1234567890,
    email: "shank.07manve@gmail.com"
};
var validationSchema = {
    email: "email"
};
var validationErrors = validator(reponseBody, validationSchema);
if (validationErrors.length > 0) {
    console.log("pass", validationErrors);
}
