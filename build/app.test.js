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
const request = require("supertest");
const appTest = require("./app");
const pokemon = require("../models/pokemon.json");
describe("appTest", () => {
    describe("/", () => {
        it("sends a welcome message", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request(appTest).get("/");
            expect(response.text).toEqual("Welcome 99 Pokemon");
        }));
    });
    describe("/bugs", () => {
        it("sends an h1 message", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request(appTest).get("/bugs");
            expect(response.text).toContain("99 little bugs in the code");
        }));
    });
    describe("/bugs/:numberOfBugs", () => {
        it("sends an error link when too many bugs are requested", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request(appTest).get(`/bugs/200`);
            expect(response.text).toContain("Too many bugs!! Start over!");
        }));
        it("sends a 'next' link when a small enough number of bugs is requested", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request(appTest).get(`/bugs/199`);
            expect(response.text).toContain("199 little bugs in the code");
            expect(response.text).toMatch(/href.*201.*Pull one down\, patch it around/);
        }));
    });
});
//# sourceMappingURL=app.test.js.map