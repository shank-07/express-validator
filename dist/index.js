"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./method/validator");
// request body
var reponseBody = {
    name: "Jogn Doe",
    phoneNumber: 1234567890,
    email: "example@gmail.com"
};
// validation Schema
var validationSchema = {
    name: "string",
    email: "email",
    phoneNumber: "number",
};
// validator
var validationErrors = validator_1.validator(reponseBody, validationSchema);
if (validationErrors.length > 0) {
    console.log(validationErrors);
}
if (validationErrors.length === 0) {
    console.log("No Validation Errors");
}
