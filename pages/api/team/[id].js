import dbConnect from "@/config/dbConnect";
import teamModel from "../../../models/team";

export default async function Handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "DELETE":
      try {
        const postId = req.query.id;
        const delPost = await teamModel.findByIdAndDelete(postId);

        if (!delPost) {
          return res.status(404).json({
            success: false,
            message: "Team Member not found",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Team Member Successfully Deleted",
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Internel Server Error",
        });
      }
      break;
    //-------------- UPDATE POST --------------//
    case "PUT":
      try {
        const postId = req.query.id;
        const updateData = req.body;

        const updatedPost = await teamModel.findByIdAndUpdate(
          postId,
          updateData,
          {
            new: true,
          }
        );
        if (!updatedPost) {
          return res.status(400).json({
            success: false,
            message: "Team Member not Found!",
          });
        }
        return res.status(200).json({
          success: true,
          message: "Team Member Successfully Updated!",
          updatedPost: updatedPost,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }

    default:
      return res.status(405).json({
        success: false,
        message: "Method not allowed",
      });
  }
}
