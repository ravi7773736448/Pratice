import userModel from "../models/user.model.js";


async function createUser(req, res) {



     const {username,email,passsword} = req.body;





    console.log(username,email,passsword)


    // if (!username || !email || !password) {
    //     return res.status(400).json({
    //         message: "All fields are requried",
    //         success: false
    //     })
    // }

 



    // console.log(user)



    // res.status(201).json({
    //     message : "user created successfully",
    //     success :  true,
    //     user
    // })








}


async function getUsers() {

}

export {
    createUser, getUsers
}