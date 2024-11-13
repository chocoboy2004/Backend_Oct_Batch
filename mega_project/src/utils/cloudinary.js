import { v2 as cloudinary } from "cloudinary"
import fs from "fs"  // file structure

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "raw" })
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return error?.message
    }
}

export default uploadOnCloudinary