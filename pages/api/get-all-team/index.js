import teamModel from "../../../models/team"
import dbConnect from "@/config/dbConnect"



export default async function Handler(req, res){
    dbConnect()

    try {
        const teamData = await teamModel.find()
        res.status(200).json({
            success: true,
            teamData,
          });
    } catch (error) {
        console.log(error)
    }
}


