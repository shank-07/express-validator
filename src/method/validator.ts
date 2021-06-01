import { isEmail } from '../checks/isEmail';
import { isEmpty } from '../checks/isEmpty';
import { isMobile } from '../checks/isMobile';
import { isNumber } from '../checks/isNumber';
import { isString } from '../checks/isString';
import { isUserName } from '../checks/isUserName';
import { ValidationError } from '../model/ValidationFormat';

export function validator(requestBody: any, validationSchema: any) {

    let validationErrors = [];

    // traverse throught validationSchema
    for (let feild in validationSchema) {


        let parameter = validationSchema[feild];
        let value = requestBody[feild];
        let key = feild;

        //  check if validation has a object 
        let result = readValidationSchemaObject(feild, validationSchema[feild], value);
        if(result.length > 0 ){
            validationErrors.push ( result );
        }

        if (requestBody.hasOwnProperty(feild)) { // check if the feild has that key
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
                case 'mobile':
                    let mobileResult = isMobile(value, key);
                    if (mobileResult !== null) {
                        validationErrors.push(mobileResult);
                    }
                case 'username':
                    let userNameResult = isUserName(value, key);
                    if (userNameResult !== null) {
                        validationErrors.push(userNameResult);
                    }

            }
        } else { // property does not exist
                // this checks for not null
            let emptyResult = isEmpty(value, key);
            if (emptyResult !== null) {
                validationErrors.push(emptyResult);
            }
        }
    }
    return validationErrors;
}

function readValidationSchemaObject(feild: any, validationSchema: any, requestBodyValue: any) {

    let validationErrors = [];
    // if value id object 
    if (typeof validationSchema === 'object') {
        console.log(feild , validationSchema, "from readValidationSchemaObject");

        for (let feild in validationSchema) {
            switch (feild) {
                case "number":
                    const numberResult = isNumber(requestBodyValue, feild);
                    if (numberResult !== null) {
                        validationErrors.push(numberResult);
                    }
                    break;
                case "length":
                    const lengthResult = checkLength(feild , validationSchema[feild], requestBodyValue);
                    // const lengthResult = checkLength(validationSchema, validationSchema[feild], requestBodyValue);
                    if (lengthResult !== null) {
                        validationErrors.push(lengthResult);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return validationErrors;
}

function checkLength(feildName: any, length: number, requestBodyValue: any) {
    console.log(feildName, length, requestBodyValue);

    let lengthRegex = new RegExp(`/^\d{${length}}$/`);
    if (!lengthRegex.test(requestBodyValue)) { // test return  true if pattern if found
        return { error: `${feildName} is not valid   `, feild: `${feildName}` };
    }

    return null;

}