import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // include .js

const  connectDB = async () => {
  try {
    const connectionInstance =await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}` )
    console.log(`MongoDB connected: ${connectionInstance.connection.host}   on port ${connectionInstance.connection.port}   database: ${connectionInstance.connection.name}`);
    
}

  catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);    
  }}

  export default connectDB; 