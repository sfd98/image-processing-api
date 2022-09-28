import sharp from "sharp";

//Image resizing
export default function resize(
	filename: string,
	width: number,
	height: number
) {
	const imageDirectory: string = "images/" + filename + ".jpg";
	//Image processing with sharp
	sharp(imageDirectory) //Access the image directory of the image that is to be processed
		.resize(width, height) //input of the numerical parameters to perform the resize
		.toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg") //create a new file in the folder thumb with the name including the set parameters
		.catch((err) => console.log(err)); //catch any error and display it to the console
}
