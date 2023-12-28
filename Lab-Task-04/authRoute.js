import express from "express";
import {
  registerController, 
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router=express.Router()

//routing
//register , method = post
router.post('/register', registerController)

//login,  post
router.post('/login',loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected route
router.get("/user-auth",requireSignIn,(req,res) => {
  res.status(200).send({ok:true});
});
//admin route
router.get("/admin-auth",requireSignIn,isAdmin,(req,res) => {
  res.status(200).send({ok:true});
});

export default router;