const connectDB = require("@/db/connect");
const image = require("@/models/image");

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

    return Response.json(
      { success: true, msg: "Notice Successfully Deleted", deletedNotice },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
