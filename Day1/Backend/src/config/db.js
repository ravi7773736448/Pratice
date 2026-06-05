

import mongoose from "mongoose";



async function ConnectoDb() {

     try {
        mongoose.connect("mongodb+srv://ravi:o0jmClCNgNrG0gUm@cluster0.wdljydx.mongodb.net/Started")

        console.log("Mongodb connected")
    }
    catch (error) {
        console.log("error in connecting mongodb", error)
    }
    
}

export {
    ConnectoDb
}