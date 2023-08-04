import mongoose, { Schema } from "mongoose";

const applyModel = new mongoose.Schema({

    fName: {
        type: String,
        trim: true,
        required: true,
    },
    lName: {
        type: String,
        trim: true,
        required: true,
    },
    dob: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    contact: {
        type: Number,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    nation: {
        type: String,
        trim: true,
        required: true,
    },
    qualification: {
        type: String,
        trim: true,
        required: true,
    },
    subject: {
        type: String,
        trim: true,
        required: true,
    },
    year: {
        type: Number,
        trim: true,
        required: true,
    },
    institue: {
        type: String,
        trim: true,
        required: true,
    },
    grade: {
        type: String,
        trim: true,
        required: true,
    },
    designation: {
        type: String,
        trim: true,
        required: true,
    },
    companyName: {
        type: String,
        trim: true,
        required: true,
    },
    from: {
        type: String,
        trim: true,
        required: true,
    },
    to: {
        type: String,
        trim: true,
        required: true,
    }

}, { timestamps: true})

export default mongoose.models?.apply || mongoose.model("apply", applyModel)

