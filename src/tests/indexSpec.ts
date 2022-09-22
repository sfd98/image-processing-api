import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test endpoint responses", () => {
    
	it("gets the main api endpoint", async () => {
		const response = await request.get("/api");
		expect(response.status).toBe(200);
	}),

	it("gets the api/convert endpoint", async () => {
		const response = await request.get("/api/convert");
		expect(response.status).toBe(200);
	});
});

describe("Test image processing", () => {

	it("creates file and is successful", async () => {
		const response = await request.get("/api/convert?filename=fjord&width=200&height=200");
		expect(response.status).toBe(200);
	}),
    
	it("throws bad request with wrong syntax", async () => {
		const response = await request.get("/api/convert?filename=fjord&width=200&height=-200");
		expect(response.status).toBe(400);
	});
});
