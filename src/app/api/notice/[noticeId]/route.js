const connectDb = require("@/db/connect");
const notice = require("@/models/noticePost");

export async function GET(req, { params }) {
  try {
    await connectDb();
    const noticeId = params.noticeId;

    const result = await notice.findOne({ _id: noticeId });

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

export async function DELETE(req, { params }) {
  try {
    await connectDb();
    const noticeId = params.noticeId;

    const deletedNotice = await notice.findOneAndDelete({ _id: noticeId });

    if (!deletedNotice) {
      return Response.json(
        { success: false, msg: "There is no such Notice." },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, msg: "Notice Successfully Deleted", deletedNotice },
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
    await connectDb();
    const noticeId = params.noticeId;
    const body = await req.json();

    if (body.noticeTitle === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the Notice Tile" },
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
    if (body.color === "") {
      return Response.json(
        { success: false, msg: { message: "You must provide the Color." } },
        { status: 400 }
      );
    }
    if (body.type === "") {
      return Response.json(
        { success: false, msg: { message: "You must provide the Type." } },
        { status: 400 }
      );
    }

    const updatedNotice = await notice.findOneAndUpdate(
      { _id: noticeId },
      {
        noticeTitle: body.noticeTitle,
        disc: body.disc,
        color: body.color,
        type: body.type,
      },
      {
        new: true,
      }
    );

    if (!updatedNotice) {
      return Response.json(
        { success: false, msg: "There is no such Notice." },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, msg: "Notice Successfully Updated", updatedNotice },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}
