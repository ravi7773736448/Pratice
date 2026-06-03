import mongoose from 'mongoose'
import { Config } from '../config/config.js'

function connecttodb() {



    

    mongoose.connect(Config.MONGO_URI)
    console.log("Mongodb connected")


    


}

export default connecttodb