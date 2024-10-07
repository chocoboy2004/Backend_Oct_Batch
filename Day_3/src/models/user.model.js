import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 16
    }
})

const User = mongoose.model("User", userSchema)

export default User