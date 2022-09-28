import request from "supertest";
import app from "../index";
import fs from "fs";
import resize from "../helpers/resize";

describe("Test endpoint responses", () => {
	it("gets the main api endpoint", () => {
		request(app).get("/api").expect(200);
	}),
	it("gets a full request", () => {
		request(app)
			.get("/api/convert2?filename=fjord&width=567&height=789")
			.expect(200);
	}),
	it("throws error at wrong syntax", () => {
		request(app)
			.get("/api/convert2?filename=fjord&width=567&height=-789")
			.expect(400);
	});
});

describe("Test image processing", () => {
	it("creates a new image", () => {
		resize("images/test_fjord", 123, 456);
		expect(fs.existsSync("thumb/test_fjord_123_456.jpg") == true);
	});
	it("throws error with invalid input", () => {
		resize("images/test_something", 0, -234);
		expect(fs.existsSync("thumb/test_something_0_-234.jpg") == false);
	});
});
