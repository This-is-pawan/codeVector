import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("db is connected successfully");
  } catch (error) {
    console.log(`db is disconnected ${error.message}`);
  }
};

export default connection;