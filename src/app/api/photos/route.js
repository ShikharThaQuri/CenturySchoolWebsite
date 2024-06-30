import { UploadImage } from "@/lib/upload_image";

const connectDB = require("@/db/connect");
const photo = require("@/models/photos");

export async function POST(req) {
  try {
    try {
      await connectDB();
    } catch (error) {
      return Response.json(
        { success: false, msg: "Connection Error" },
        { status: 400 }
      );
    }

    const formData = await req.formData();
    const imageDis = formData.get("imageDis");
    const imageCategory = formData.get("imageCategory");
    const image = formData.get("image");

    console.log(imageCategory);

    if (!image) {
      return Response.json({ success: false, msg: "There is no File." });
    }
    if (imageDis === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the Image Discription." },
        },
        { status: 400 }
      );
    }
    if (imageCategory === "") {
      return Response.json(
        {
          success: false,
          msg: { message: "You must provide the Image Category." },
        },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const data = await UploadImage(buffer);

    const newPhoto = new photo({
      photoDis: imageDis,
      category: imageCategory,
      image_Url: data?.secure_url,
      public_id: data?.public_id,
    });

    const result = await newPhoto.save();

    console.log(result);

    return Response.json(
      { success: true, msg: "Posted the photo.", result },
      { status: 201 }
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

    const result = await photo.find({});

    return Response.json(
      { success: true, msg: "You are Successfull.", result },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
