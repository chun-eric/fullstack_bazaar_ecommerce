import { v2 as cloudinary } from "cloudinary";

// connect to cloudinary with credentials
const connectCloudinary = async () => {
  // config() is for you to try and access your cloudinary account
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // account name
    api_key: process.env.CLOUDINARY_API_KEY, // username
    api_secret: process.env.CLOUDINARY_API_SECRET, // password
  });

  console.log("Cloudinary connection successful");
};

export default connectCloudinary;
