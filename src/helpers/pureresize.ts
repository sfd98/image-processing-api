import sharp from "sharp";

export default function resize(
  filename: string,
  imageDirectory: string,
  width: number,
  height: number
): string {
  let output: string;
  try {
    //Image processing with sharp
    sharp(imageDirectory) //Access the image directory of the image that is to be processed
      .resize(width, height) //input of the numerical parameters to perform the resize
      .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg"); //create a new file in the folder thumb with the name including the set parameters
  } catch (err) {
    return String(err);
  }
  return "Successful...";
}
