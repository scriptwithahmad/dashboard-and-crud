import teamModel from "../../../models/team"
import dbConnect from "@/config/dbConnect"


export default async function Handler(req, res){
    dbConnect()

    try {
        const createTeam = await teamModel.create(req.body)
        res.status(201).json({
            success: true,
            createTeam,
        })
    } catch (error) {
        console.log(error)
    }
}

