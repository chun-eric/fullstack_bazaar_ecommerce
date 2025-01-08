import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create a jwt token function
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Route for login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // find one email from our userModel
    const user = await userModel.findOne({ email });
    // if user doesnt exist return
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });
    }

    // check to see if password used in login matches our user passwrd in database
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // generate a jwt token
      const token = createToken(user._id);
      // respond with a success and give the token back to user
      res.status(200).json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: "invalid credentials" });
    }
  } catch (error) {
    console.error("Login error", error);
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

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
      return res.status(400).json({
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

    // create new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // save the user to database
    const user = await newUser.save();
    console.log("Saved user:", user);

    // create a new jwt token with user id
    const token = createToken(user._id);

    // send response and token if success
    res.status(201).json({
      success: true,
      token,
      message: "User Registration Successful",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Registration failed" });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
