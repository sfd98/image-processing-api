"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
describe("Test endpoint responses", () => {
    it("gets the main api endpoint", () => {
        (0, supertest_1.default)(index_1.default).get("/api").expect(200);
    }),
        it("gets a full request", () => {
            (0, supertest_1.default)(index_1.default)
                .get("/api/convert?filename=fjord&width=567&height=789")
                .expect(200);
        }),
        it("throws error at wrong syntax", () => {
            (0, supertest_1.default)(index_1.default)
                .get("/api/convert?filename=fjord&width=567&height=-789")
                .expect(400);
        });
});
describe("Test image processing", () => {
    it("creates a new image", () => {
        (0, sharp_1.default)("images/fjord.jpg")
            .resize(123, 456)
            .toFile("thumb/test_fjord_123_456.jpg");
        expect(fs_1.default.existsSync("thumb/test_fjord_123_456.jpg") == true);
    });
});
