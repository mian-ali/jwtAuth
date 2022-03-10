import express from "express";
import UserController from "../controllers/userControoler.js";
const router=express.Router()


// Public Route
router.post('/register', UserController.userRegistration)
router.post('/userlogin' , UserController.userLogin)

//private proctected Route
router.post('/changepassword', UserController.changeUserPassword)
export default router