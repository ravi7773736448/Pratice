import mongoose from "mongoose";
import app from "./src/app.js";
import NoteModel from "./src/models/note.model.js";




async function connectodb(){

    try {
        

    await mongoose.connect("mongodb+srv://ravi:o0jmClCNgNrG0gUm@cluster0.wdljydx.mongodb.net/Crud-2")

    console.log("Mongodb connected")
    } catch (error) {
        console.log(error)
    }
    
}

connectodb()






app.listen(3000,()=>{
    console.log("server is runnign on port 3000")
})