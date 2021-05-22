Express Validator for your node Node Api

Usage 
install library
npm i express-validator # currently not available

```

import validator from express-validator

```


```

const validator  = require('express-validator)

```


// collect request body
```
const requestBody = request.body;

```

//create your validation schema

validationSchema consist of a obj
```


const validationSchema = {
    name : "string",
    email: "email",
    phoneNumber : "mobileNumber"
}

```


validator will return array of object will message feild

const validationResult = validator(requestBody , validationSchema  );
