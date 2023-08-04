import applyModel from "../../../models/apply";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  try {
    const createApply = await applyModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "student added",
      createApply,
    });
  } catch (error) {
    console.log(error);
  }
}
