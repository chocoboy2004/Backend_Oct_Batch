// For executing all backend codes and starting our server.
import connectDB from "./database/database.connection.js";
import dotenv from "dotenv"

dotenv.config()

connectDB()