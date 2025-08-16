import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";   // include .js
import connectDB from "./db/index.js";      // use relative path

import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

connectDB();
