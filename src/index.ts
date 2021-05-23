import { ValidationSchema } from "./model/validationSchema";
import { validator } from "./method/validator";

// request body
const reponseBody = {

    name: "Jogn Doe",
    phoneNumber: 1234567890,
    email: "example@gmail.com"

};

// validation Schema
const validationSchema = {
    name: "string",
    email: "email",
    phoneNumber: "number",
};


// validator
const validationErrors = validator(reponseBody, validationSchema);


if (validationErrors.length > 0) {
    console.log(validationErrors);
}

if (validationErrors.length === 0) {
    console.log("No Validation Errors");
}






