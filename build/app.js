"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const handleRoot = (req, res) => {
    console.log(req.params);
    res.send("Welcome 99 Pokemon");
};
app.get("/", handleRoot);
app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params);
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
});
app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1>");
});
app.get("/bugs/:number_of_bugs", (req, res) => {
    const { number_of_bugs } = req.params;
    if (number_of_bugs >= 200) {
        res.send("Too many bugs!! Start over!");
    }
    else {
        const total = Number(number_of_bugs) + 2;
        res.send(`<h1>${number_of_bugs} little bugs in the code</h1> <a href='http://localhost:3001/bugs/${total}'>Pull one down, patch it around</a>`);
    }
});
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
const pokemon = require("../models/pokemon.json");
module.exports = app;
//# sourceMappingURL=app.js.map