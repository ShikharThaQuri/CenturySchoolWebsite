const connectDB = require("@/db/connect");
const notice = require("@/models/noticePost");

export async function POST(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        {
          success: false,
          msg: "something is wrong in database.",
        },
        { status: 400 }
      );
    }
    const body = await req.json();

    if (body.noticeTitle === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the NoticeTile" },
        },
        { status: 400 }
      );
    }
    if (body.disc === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the Discription." },
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

    const newNotice = new notice({
      noticeTitle: body.noticeTitle,
      disc: body.disc,
      type: body.type,
    });

    const result = await newNotice.save();
    return Response.json(
      { success: true, msg: "Created a new Notice.", result },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const result = await notice.find({});
    return Response.json(
      { success: true, msg: "Found all Notice", result },
      { status: 202 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
