import fs from "fs";
import sharp from "sharp";

export default function resize(
  filename: string,
  height: number,
  width: number
): string {
  console.log();

  //Variable in which the image directory of the requested image is saved
  const imageDirectory: string = "images/" + filename + ".jpg";
  //Error handling
  //From beginning assume an uncaught error
  let error = "Uncaught error...";

  try {
    if (!filename || !width || !height) {
      //check if any parameter was not set or numerical values are 0
      throw "Parameters in the query uncomplete or set to 0! \n";
    } else if (fs.existsSync(imageDirectory) == false) {
      //using Syncronous code, checking if the requested image exists
      throw "File not found. Check the spelling of the filename or use another one! \n";
    } else if (width < 0 || height < 0) {
      //check if any numerical value is smaller than 0
      throw "Width and height should be > 0. \n";
    } else {
      //Image processing with sharp
      sharp(imageDirectory) //Access the image directory of the image that is to be processed
        .resize(width, height) //input of the numerical parameters to perform the resize
        .toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg") //create a new file in the folder thumb with the name including the set parameters
        .catch((err) => console.log(err)); //catch any error and display it to the console

      //Send empty error string if operation complete
      error = "";
    }
  } catch (err) {
    //Send error message and status 500 if operation faulty
    error = err + "If necessary return to /api to check the syntax again.";
  }
  return error;
}
