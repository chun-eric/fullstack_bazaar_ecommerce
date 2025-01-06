import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create a jwt token function
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Route for login user
const loginUser = async (req, res) => {};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    // get user from request body with destructuring
    const { name, email, password } = req.body;

    // find email from user database
    const emailExists = await userModel.findOne({ email });

    // check if user already exists
    if (emailExists) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    //  validate name
    if (!name || name.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name should be at least 2 characters long",
      });
    }

    // validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // validate  strong password
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.json({
        success: false,
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(12); // random 12 string
    const hashedPassword = await bcrypt.hash(password, salt); // combine password and salt(mix it) before hashing

    // create new user and save to database
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // create a new jwt token with user id
    const token = createToken(newUser._id);

    // send response and token if success
    res.status(201).json({
      success: true,
      token,
      message: "User Registration Successful",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.json({ success: false, message: "Registration failed" });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
