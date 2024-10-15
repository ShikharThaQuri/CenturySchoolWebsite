const connectDB = require("@/db/connect");
const image = require("@/models/image");
import { deleteImage } from "@/lib/delete_image";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const imageId = params.imageId;

    const deletedNotice = await image.findOneAndDelete({ _id: imageId });

    if (!deletedNotice) {
      return Response.json(
        { success: false, msg: "There is no such image." },
        { status: 404 }
      );
    }

    await deleteImage(deletedNotice.public_id);

    return Response.json(
      {
        success: true,
        msg: "Notice Successfully Deleted",
        deletedNotice,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json({ success: false, msg: "Data Connection Error" });
    }

    const imageId = params.imageId;

    const result = await image.find({ _id: imageId });

    return Response.json(
      { success: true, msg: "You are successfull", result },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}
