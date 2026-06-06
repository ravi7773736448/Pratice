import express from 'express'
import NoteModel from './models/note.model.js'
import cors from 'cors'
const  app = express()


app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))


app.use(cors({
    origin : "http://127.0.0.1:5500"
}))

//health check route
app.get("/health",(req,res)=>{
    res.status(200).json({
        message : "API is working"
    })
})


// note create  
app.post("/api/createnote",async (req,res)=>{


    console.log(req.body)


    
    const {name,description} = req.body;


    if(!name || !description){
        return res.status(400).json({
            message  : "All fields are required"
        })
    }



    const note  = await  NoteModel.create({
        name,
        description
    })



    res.status(201).json({
        message : "note created successfully",
        note
    })
})


// get all notes
app.get("/api/getallnotes",async(req,res)=>{
    

    const notes  =  await NoteModel.find();

    res.status(200).json({
        message :  'notes fetched successfully',
        notes
    })
})




// dono change karna hai to - PUT

app.put("/api/updatenote/:id",async(req,res)=>{
   

    const id =  req.params.id


    const {newname,newdescription} = req.body;



    console.log(id,newname,newdescription)


    if(!newname || !newdescription){
        return res.status(400).json({
            message : "all fields are required"
        })
    }



    const updatenote  = await NoteModel.findByIdAndUpdate(id,{
        name : newname,
        description : newdescription

    })


    


    res.status(200).json({
        message : "note updated successfully",
        updatenote
    }
    )




})


// delete a note 

app.delete("/api/deletenote/:id",async(req,res)=>{


    const id = req.params.id

    const deletenote   = await NoteModel.findByIdAndDelete(id)


    res.status(204).json({
        message :  "note deleted successfully"
    })

})







export default app;