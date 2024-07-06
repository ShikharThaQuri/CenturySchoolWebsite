import { UploadImage } from "@/lib/upload_image";

const connectDB = require("@/db/connect");
const images = require("@/models/image");

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
    const pin = formData.get("pin");
    const image = formData.get("image");

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

    const newImage = new images({
      imageDis: imageDis,
      category: imageCategory,
      pin: JSON.parse(pin),
      image_Url: data?.secure_url,
      public_id: data?.public_id,
    });

    const result = await newImage.save();

    return Response.json(
      { success: true, msg: "Posted the image.", result },
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

    const searchParams = req.nextUrl.searchParams;
    const categoryQuery = searchParams.get("category");
    const pinQuery = searchParams.get("pin");
    const pageQuery = searchParams.get("page");
    const limitQuery = searchParams.get("limit");
    const sort = searchParams.get("sort");

    const queryObject = {};

    if (categoryQuery) {
      queryObject.category = categoryQuery;
    }
    if (pinQuery === "true") {
      queryObject.pin = true;
    }

    let Result = images.find(queryObject);

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
    const result2 = await images.find(queryObject);

    return Response.json(
      {
        success: true,
        msg: "You are Successfull.",
        result,
        nbHits: result2.length,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
