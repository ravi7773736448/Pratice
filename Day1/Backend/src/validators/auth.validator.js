

import { body,validationResult } from "express-validator";



const validate = () =>{


    const error = validationResult(req)

    if(!error.notEmpty()){


        
        
    }
}