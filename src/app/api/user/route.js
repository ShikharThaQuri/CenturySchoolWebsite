const connectDB = require("@/db/connect");
const user = require("@/models/user");

export async function GET(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        { success: false, msg: "Connection Problems" },
        { status: 404 }
      );
    }

    const result = await user.find({});
    return Response.json(
      { success: true, msg: "You are successfull", result },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
