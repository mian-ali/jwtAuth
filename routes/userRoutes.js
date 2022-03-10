import express from "express";
import UserController from "../controllers/userControoler.js";
const router=express.Router()
import checkUserAuth from '../middlewares/auth-middleware.js'


//Router Level Middleware --- Protect Route

router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)


// Public Route
router.post('/register', UserController.userRegistration)
router.post('/userlogin' , UserController.userLogin)

//private proctected Route
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser' , UserController.loggedUser)


export default router