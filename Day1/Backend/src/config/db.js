import mongoose from 'mongoose'
import { Config } from '../config/config.js'



async function connecttodb(){


    try {
        await mongoose.connect(Config.MONGO_URI)
        console.log("Mongodb connected")
    } catch (error) {
        console.log("error in connecting mongodb",error)
    }
    
}

export default connecttodb