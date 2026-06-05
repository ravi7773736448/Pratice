
import dotenv from 'dotenv';
dotenv.config()
import app from "./src/app.js";
import { Config } from './src/config/config.js';
import { ConnectoDb } from './src/config/db.js';



ConnectoDb()
const port  =  Config.PORT || 5000


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
