import { cookies } from "next/headers";

const connectDB = require("@/db/connect");
const user = require("@/models/user");
const {
  genHashPassword,
  valHashPassword,
  issueCookie,
  valToken,
} = require("@/lib/utils");

export async function POST(req, { params }) {
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
    const slug = params.slug;

    const logUser = await user.findOne({ username: body.username });

    if (!body.password) {
      return Response.json(
        { success: false, msg: "You Must Provide Password." },
        { status: 400 }
      );
    }

    switch (slug) {
      case "register":
        try {
          if (logUser) {
            return Response.json(
              { success: false, msg: "User already exist" },
              { status: 400 }
            );
          }

          const { hash, salt } = genHashPassword(body.password);

          const newUser = new user({
            username: body.username,
            hash: hash,
            salt: salt,
          });

          const result = await newUser.save();
          return Response.json(
            { success: true, msg: "You are successfull", result },
            { status: 201 }
          );
        } catch (error) {
          return Response.json({ success: false, msg: error }, { status: 400 });
        }
        break;

      case "login":
        try {
          if (!logUser) {
            return Response.json(
              { success: false, msg: "User does not found" },
              { status: 404 }
            );
          }

          const hash = valHashPassword(
            body.password,
            logUser.hash,
            logUser.salt
          );

          if (!hash) {
            return Response.json(
              { success: false, msg: "Incorrect Password" },
              { status: 401 }
            );
          }

          const { serialized } = issueCookie(logUser);

          return Response.json(
            { success: true, msg: " You are autorized.", logUser },
            { status: 202, headers: { "set-Cookie": serialized } }
          );
        } catch (error) {}
        break;

      default:
        return Response.json(
          { success: false, msg: "Route Does not exit." },
          { status: 404 }
        );
    }
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
      return Response.json(
        { success: false, msg: "Data connection Error" },
        { status: 400 }
      );
    }

    const slug = params.slug;

    switch (slug) {
      case "auth":
        try {
          const token = cookies().get("userJwtToken");

          if (!token) {
            return Response.json(
              { success: false, msg: "You are Unauthorized." },
              { status: 401 }
            );
          }

          const { tokenResult } = valToken(token);

          if (!tokenResult) {
            return Response.json(
              { success: false, msg: "You are Unauthorized" },
              { status: 401 }
            );
          }

          const result = await user.findOne({ _id: tokenResult.sub });

          return Response.json(
            { success: true, msg: "You are authorized", result },
            { status: 202 }
          );
        } catch (error) {
          return Response.json({ success: false, msg: error }, { status: 400 });
        }
        break;

      default:
        return Response.json({ success: false, msg: "Route Does not Found." });
    }
  } catch (error) {
    return Response.json(
      { success: false, msg: "Error", error },
      { status: 400 }
    );
  }
}
