import ReviewModel from "../../../models/reviews"
import dbConnect from "../../../config/dbConnect"


export default async function handler(req, res){


    dbConnect()


    try {
        
        const review = await ReviewModel.find()
        res.status(200).json({
            success: true,
            review
        })

    } catch (error) {
        console.log(error)
    }

}

