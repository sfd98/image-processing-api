import request from "supertest";
import app from "../index";
import fs from "fs";
import resize from "../helpers/resize";

describe("Test endpoint responses", () => {
  it("gets the main api endpoint", () => {
    request(app).get("/api").expect(200);
  }),
    it("gets a full request", () => {
      request(app).get("/api?filename=fjord&width=567&height=789").expect(200);
    }),
    it("throws error at wrong syntax", () => {
      request(app).get("/api?filename=fjord&width=567&height=-789").expect(400);
    });
});

describe("Test image processing", () => {
  it("creates a new image", () => {
    resize("images/test_fjord", 123, 456);
    expect(fs.existsSync("images/test_fjord_123_456.jpg") == true);
  });
});
