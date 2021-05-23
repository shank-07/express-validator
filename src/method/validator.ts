import { isEmail } from '../checks/isEmail';
import { isEmpty } from '../checks/isEmpty';
import { isMobile } from '../checks/isMobile';
import { isNumber } from '../checks/isNumber';
import { isString } from '../checks/isString';
import { isUserName } from '../checks/isUserName';
import { ValidationError } from '../model/ValidationFormat';

export function validator(requestBody: any, validationObject: any) {

    let validationErrors: ValidationError[] = [];

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
            let emptyResult = isEmpty(value, key);
            if (emptyResult !== null) {

                validationErrors.push(emptyResult);
            }
        }
    }
    return validationErrors;
}