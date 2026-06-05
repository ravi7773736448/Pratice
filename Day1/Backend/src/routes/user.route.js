import express from 'express'
import { createUser,getUsers } from '../controllers/user.controller.js'


const router =  express.Router()




//note create
router.post("/create-user",createUser)


router.get("get-users",getUsers)


export default router