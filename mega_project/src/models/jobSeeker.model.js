import mongoose, { mongo, Schema } from "mongoose"
import { type } from "os"

const jobSeekerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
        type: Number,
        required: true,
        maxLength: 10,
        minLength: 10
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        required: true
    },
    resume: {
        type: String,  // cloudinary_URL
        required: true
    },
    education: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skills: [
        {
            type: String
        }
    ]
})

const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema)

export default JobSeeker