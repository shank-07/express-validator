"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./method/validator");
// request body
var reponseBody = {
    name: "Jogn Doe",
    phoneNumber: 1234567890,
    email: "example@gmail.com",
    otp: 123456,
};
// validation Schema
var validationSchema = {
    name: "string",
    email: "email",
    phoneNumber: "number",
    otp: {
        type: "number",
        length: 5,
    }
};
// validator
var validationErrors = validator_1.validator(reponseBody, validationSchema);
if (validationErrors.length > 0) {
    console.log(validationErrors);
}
if (validationErrors.length === 0) {
    console.log("No Validation Errors");
}
// new validation Schema 
// const options = { 
//     required : true,
//     length : 10,
//     allowedCharacter : [ "@" , "$", "-", "_" ]
// }
