import dbConnect from "@/config/dbConnect";
import teamModel from "../../../models/team";

export default async function Handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "DELETE":
      try {
        const postId = req.query.id; // Assuming _id is the identifier for the post
        const delPost = await teamModel.findByIdAndDelete(postId);

        if (!delPost) {
          return res.status(404).json({
            success: false,
            message: "Post not found"
          });
        }

        return res.status(200).json({
          success: true,
          message: "Post Successfully Deleted"
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          success: false,
          message: "An error occurred"
        });
      }

    default:
      return res.status(405).json({
        success: false,
        message: "Method not allowed"
      });
  }
}
