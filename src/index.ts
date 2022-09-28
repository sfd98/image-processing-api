import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response): void => {
	res.send("Hello World!");
});

app.use("/api", routes);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});

export default app;
