import express from "express"; // framework to create web server
import cors from "cors"; // allows websites to safely communicate with server
import "dotenv/config"; // manage secret configurations
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

// App Config
const app = express(); // create new server
const port = process.env.PORT || 4000; // server port
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json()); // allow server to understand JSON data
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
