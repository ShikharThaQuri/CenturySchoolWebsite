const connectDB = require("@/db/connect");
const blog = require("@/models/blog");

export async function POST(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        { success: false, msg: "Connection Error" },
        { status: 404 }
      );
    }

    const body = await req.json();

    if (body.writerName === "") {
      return Response.json(
        {
          success: false,
          msg: "You must provide the Write Name.",
        },
        { status: 400 }
      );
    }
    if (body.discription === "") {
      return Response.json(
        {
          success: false,
          msg: "You must provide the blog Discription",
        },
        { status: 400 }
      );
    }
    if (body.type === "") {
      return Response.json(
        {
          success: false,
          msg: "You must provide the blog type",
        },
        { status: 400 }
      );
    }

    const newBlog = new blog({
      writerName: body.writerName,
      heading: body.heading,
      dis: body.discription,
      type: body.type,
    });

    const result = await newBlog.save();
    return Response.json(
      {
        success: true,
        msg: "You are successfull.",
        result,
        total: result.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}

export async function GET(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        { success: false, msg: "Connection Error" },
        { status: 404 }
      );
    }

    const result = await blog.find({});
    return Response.json(
      {
        success: true,
        msg: "You are sucessfull.",
        result,
        total: result.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
