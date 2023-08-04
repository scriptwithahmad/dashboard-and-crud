
import mongoose, { mongo } from "mongoose";


const reviewSchema = new mongoose.Schema({

    title: {
        type:String,
        trim:true,
        required: true,
    },
    rate: {
        type: Number,
        trim: true,
        required: true,
    },
    desc: {
        type:String,
        trim:true,
        required: true,
    }
},{timestamps:true})

export default mongoose.models?.reviews || mongoose.model("reviews", reviewSchema)
