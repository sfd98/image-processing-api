"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint responses', () => {
    it('gets the main api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api");
        expect(response.status).toBe(200);
    })),
        it('gets the api/convert endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/api/convert");
            expect(response.status).toBe(200);
        }));
});
describe("Test image processing", () => {
    //STILL NOT WORKING
    it("creates a new file", () => __awaiter(void 0, void 0, void 0, function* () {
        https_1.default.get("https://localhost:3000/api/convert?filename=fjord&width=200&height=200");
        expect(fs_1.default.existsSync("./thumb/thumb_fjord_200_200.jpg") === true);
    }));
});
