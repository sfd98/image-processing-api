import fs from "fs";

//Error handling
export default function validateInput(
	filename: string,
	width: number,
	height: number
): string {
	const imageDirectory: string = "images/" + filename + ".jpg";
	let err = "";
	if (!filename || !width || !height) {
		//check if any parameter was not set or numerical values are 0
		err += "Parameters in the query uncomplete or set to 0! \n";
	} else if (fs.existsSync(imageDirectory) == false) {
		//using Syncronous code, checking if the requested image exists
		err +=
			"File not found. Check the spelling of the filename or use another one! \n";
	} else if (width < 0 || height < 0) {
		//check if any numerical value is smaller than 0
		err += "Width and height should be > 0. \n";
	}
	return err;
}
