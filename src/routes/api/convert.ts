import express from "express";
import sharp from "sharp";
import fs from "fs";
import resize from "../../helpers/resize";
import validateInputs from "../../helpers/validateInput";

const convert = express.Router();

convert.get("/", (req: express.Request, res: express.Response): void => {
	//Variable decleration.
	//Those three variables are taken from the URL using the properties in the req.query object
	const filename = String(req.query.filename);
	const width = Number(req.query.width);
	const height = Number(req.query.height);

	//New

	//Variable in which the image directory of the requested image is saved
	const imageDirectory: string = "images/" + filename + ".jpg";

	//Image processing
	try {
		//Error handling. If error send error code 400.

		if (!filename || !width || !height) {
			//check if any parameter was not set or numerical values are 0
			res.status(400);
			throw "Parameters in the query uncomplete or set to 0!";
		} else if (fs.existsSync(imageDirectory) == false) {
			//using Syncronous code, checking if the requested image exists
			res.status(400);
			throw "File not found. Check the spelling of the filename or use another one!";
		} else if (width < 0 || height < 0) {
			//check if any numerical value is smaller than 0
			res.status(400);
			throw "Width and height should be > 0.";
		} else {
			//Image processing with sharp
			sharp(imageDirectory) //Access the image directory of the image that is to be processed
				.resize(width, height) //input of the numerical parameters to perform the resize
				.toFile("thumb/thumb_" + filename + "_" + width + "_" + height + ".jpg") //create a new file in the folder thumb with the name including the set parameters
				.catch((err) => console.log(err)); //catch any error and display it to the console

			//Send successful message and status 200 if operation complete
			res.send("Successful, please check the thumb folder.");
			res.status(200);
		}
	} catch (err) {
		//Send error message and status 500 if operation faulty
		res.send(err + " If necessary return to /api to check the syntax again.");
		res.status(500);
	}
});

export default convert;
