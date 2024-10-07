import mongoose, { Schema } from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // cloudinary
    image: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    comments: [
        {
            type: String
        }
    ]
})

const Product = mongoose.model("Product", productSchema)

export default Product