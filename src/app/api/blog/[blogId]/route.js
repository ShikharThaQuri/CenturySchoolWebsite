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
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    await connectDB();
    const blogId = params.blogId;

    const result = await blog.findOne({ _id: blogId });

    return Response.json(
      { success: true, msg: "You are Successfull", result },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}

export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const blogId = params.blogId;
    const body = await req.json();

    if (body.dis === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the Discription." },
        },
        { status: 400 }
      );
    }
    if (body.writerName === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the writerName." },
        },
        { status: 400 }
      );
    }
    if (body.type === "") {
      return Response.json(
        { success: false, msg: { message: "You must provide the Type." } },
        { status: 400 }
      );
    }

    const updatedblog = await blog.findOneAndUpdate(
      { _id: blogId },
      {
        heading: body.blogHeading,
        dis: body.dis,
        writerName: body.writerName,
        type: body.type,
      },
      {
        new: true,
      }
    );

    if (!updatedblog) {
      return Response.json(
        { success: false, msg: "There is no such blog." },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, msg: "blog Successfully Updated", updatedblog },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}
