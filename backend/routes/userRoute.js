import express from "express";
import {
  registerUser,
  loginUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser); // at this endpoint run the registerUser function
userRouter.post("/login", loginUser); // at this endpoint run the loginUser function
userRouter.post("/admin", adminLogin); // at this endpoint run the adminLogin function

export default userRouter;
