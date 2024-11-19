import HandleError from "../utils/HandleError.js"
import HandleResponse from "../utils/HandleResponse.js"
import JobSeeker from "../models/jobSeeker.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js"


const signup = async (req, res) => {
    const {
        name,
        email,
        phone_no,
        gender,
        education,
        experience,
        location,
        password
    } = req.body

    if (
        !name ||
        !email ||
        !phone_no ||
        !gender ||
        !education ||
        !experience ||
        !location ||
        !password
    ) {
        return res
        .status(200)
        .json(
            new HandleError(400, "All fields are required!")
        )
    }

    /*
      Task ---> Complete this portion by yourself
    */

    const resume = req.file

    console.log(resume)

    // if (!resume) {
    //     return res
    //     .status(400)
    //     .json(
    //         new HandleError(400, "Resume is required!!")
    //     )
    // }

    const response = await uploadOnCloudinary(resume.path)

    console.log(response)

    if (!response) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong while uploading resume!")
        )
    }

    const isExistedJobSeeker = await JobSeeker.findOne({ $or: [ { email }, { phone_no } ] })

    if (isExistedJobSeeker) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Jobseeker is already existed!")
        )
    }

    const jobseeker = await JobSeeker.create({
        name: name,
        email: email,
        phone_no: Number(phone_no),
        gender: gender,
        education: education,
        experience: experience,
        location: location,
        password: password,
        resume: response.secure_url
    })

    const isCreated = await JobSeeker.findById(jobseeker?._id).select("-password")

    if (!isCreated) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong while creating account!")
        )
    }

    return res
    .status(201)
    .json(
        new HandleResponse(200, isCreated, "Profile created successfully!")
    )
}

export {
    signup
}