import sharp from "sharp";

export default async function resize(
  filename: string,
  width: number,
  height: number
): Promise<string> {
  const filePath =
    "images/thumb_" + filename + "_" + width + "_" + height + ".jpg";

  await sharp("images/" + filename + ".jpg") //Access the image directory of the image that is to be processed
    .resize(width, height) //input of the numerical parameters to perform the resize
    .toFile(filePath); //create a new file in the folder thumb with the name and the set parameters
  return filePath;
}
