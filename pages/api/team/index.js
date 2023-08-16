import teamModel from "../../../models/team";
import dbConnect from "@/config/dbConnect";

export default async function Handler(req, res) {
  dbConnect();

  try {
    const createTeam = await teamModel.create(req.body);
    res.status(201).json({
      success: true,
      createTeam,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Title Already Exists!",
      });
    }
  }
  res.status(500).json({
    success: false,
    message: "Internal Server Error!",
  });
}
