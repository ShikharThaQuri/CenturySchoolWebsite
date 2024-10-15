const connectDB = require("@/db/connect");
const blog = require("@/models/blog");

export async function POST(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        { success: false, msg: "Data Connection Error" },
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
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}

export async function GET(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        { success: false, msg: "Data Connection Error" },
        { status: 404 }
      );
    }

    const searchParams = req.nextUrl.searchParams;
    const typeQuery = searchParams.get("type");
    const pageQuery = searchParams.get("page");
    const limitQuery = searchParams.get("limit");
    const sort = searchParams.get("sort");

    const queryObject = {};

    if (typeQuery) {
      queryObject.type = typeQuery;
    }

    let Result = blog.find(queryObject);

    if (sort) {
      const sortList = sort.split(",").join(" ");
      Result = Result.sort(sortList);
    } else {
      Result = Result.sort("createAt");
    }

    const page = Number(pageQuery) || 1;
    const limit = Number(limitQuery) || 100;
    const skip = (page - 1) * limit;

    Result = Result.skip(skip).limit(limit);

    const result = await Result;
    const result2 = await blog.find(queryObject);
    return Response.json(
      {
        success: true,
        msg: "You are sucessfull.",
        result,
        nbHits: result2.length,
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
