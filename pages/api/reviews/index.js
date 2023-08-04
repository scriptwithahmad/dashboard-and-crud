import reviewModel from "../../../models/reviews"
import dbConnect from "../../../config/dbConnect"

export default async function handler(req, res){

    dbConnect()

    try {
        const createReview = await reviewModel.create({...req.body})
        res.status(201).json({
            success: true,
            message: createReview,
        })
    } catch (error) {
        console.log(error)
    }
}


