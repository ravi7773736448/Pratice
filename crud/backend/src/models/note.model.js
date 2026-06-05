

import mongoose from "mongoose";


const NoteSchema = new mongoose.Schema({
    name : String,
    description  : String,


    


})



const NoteModel =   mongoose.model("note",NoteSchema)

export default NoteModel;