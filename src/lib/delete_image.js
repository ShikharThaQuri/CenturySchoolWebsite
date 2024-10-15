import cloudinary from "./cloudinary";

export const deleteImage = async (publicId) => {
  console.log(publicId);

  await cloudinary.uploader.destroy(publicId);
};
