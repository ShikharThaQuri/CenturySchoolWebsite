const connectDB = require("@/db/connect");
const photo = require("@/models/photos");

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const photoId = params.photoId;

    const deletedNotice = await photo.findOneAndDelete({ _id: photoId });

    if (!deletedNotice) {
      return Response.json(
        { success: false, msg: "There is no such Photo." },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, msg: "Notice Successfully Deleted", deletedNotice },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
