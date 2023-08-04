import dbConnect from "../../../config/dbConnect";
import reviewModel from '../../../models/reviews'

export default async function handler(req,res){
    try {
        const singleRev = await reviewModel.findOne({
            id:req.query.id,
        })

        const DelRev = await reviewModel.findByIdAndDelete(singleRev._id)
        res.status(200).json({
            success:true,
            message:"Your Comment has been deleted!"
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something Went Wrong"
        })
    }
}
