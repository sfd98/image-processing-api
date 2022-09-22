const fs = require("fs");

if(fs.existsSync("./thumb/thumb_fjord_200_200.jpg")) {
    console.log("true");
} else {
    console.log("false");
}
