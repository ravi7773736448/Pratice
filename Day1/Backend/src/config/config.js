import {config} from 'dotenv'
config()



if(!process.env.PORT){
    throw new Error("PORT is not in the .env folder")
}



export const Config = {
    PORT: process.env.PORT,
    MONGO_URI : process.env.MONGO_URI
}