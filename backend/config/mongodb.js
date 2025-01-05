import mongoose from "mongoose";

const connectDB = async () => {
  // notification of connection
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  // connect to MongoDB
  await mongoose.connect(`${process.env.MONGODB_URI}/bazaar`);
};

export default connectDB;
