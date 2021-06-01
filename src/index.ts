import { ValidationSchema } from "./model/validationSchema";
import { validator } from "./method/validator";

// request body
const reponseBody = {
    name: "Jogn Doe",
    phoneNumber: 1234567890,
    email: "example@gmail.com",
    otp : 123456,
};

// validation Schema
const validationSchema = {
    name: "string",
    email: "email",
    phoneNumber: "number",
    otp : {
        type : "number",
        length : 5, 
    }
};


// validator
const validationErrors = validator(reponseBody, validationSchema);


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






