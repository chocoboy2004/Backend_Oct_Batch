import mongoose from "mongoose"
import DBName from "../constant.js"

const connectDB = async () => {
    try {
        const response = await mongoose.connect(`${process.env.MONGODB_URL}/${DBName}`)
        console.log(`MongoDB extablished!! :: ${response.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB