const connectDB = require("@/db/connect");
const blog = require("@/models/blog");

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const blogId = params.blogId;

    const deletedblog = await blog.findOneAndDelete({ _id: blogId });

    if (!deletedblog) {
      return Response.json(
        { success: false, msg: "There is no such blog." },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, msg: "blog Successfully Deleted", deletedblog },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
