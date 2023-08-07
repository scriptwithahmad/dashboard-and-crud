import mongoose from "mongoose";

const teamModel = new mongoose.Schema({
    name: String,
    design: String,
    avatar: String,
}, {timestamps: true})

export default mongoose.models?.team || mongoose.model('team', teamModel)


