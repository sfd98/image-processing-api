"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const fs_1 = __importDefault(require("fs"));
const resize_1 = __importDefault(require("../helpers/resize"));
describe("Test endpoint responses", () => {
    it("gets the main api endpoint", () => {
        (0, supertest_1.default)(index_1.default).get("/api").expect(200);
    }),
        it("gets a full request", () => {
            (0, supertest_1.default)(index_1.default)
                .get("/api/convert2?filename=fjord&width=567&height=789")
                .expect(200);
        }),
        it("throws error at wrong syntax", () => {
            (0, supertest_1.default)(index_1.default)
                .get("/api/convert2?filename=fjord&width=567&height=-789")
                .expect(400);
        });
});
describe("Test image processing", () => {
    it("creates a new image", () => {
        (0, resize_1.default)("images/test_fjord", 123, 456);
        expect(fs_1.default.existsSync("thumb/test_fjord_123_456.jpg") == true);
    });
    it("throws error with invalid input", () => {
        (0, resize_1.default)("images/test_something", 0, -234);
        expect(fs_1.default.existsSync("thumb/test_something_0_-234.jpg") == false);
    });
});
