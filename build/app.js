"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const handleRoot = (req, res) => {
    res.send("Welcome 99 Pokemon");
};
app.get("/", handleRoot);
app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1>");
});
app.get("/bugs/:number_of_bugs", (req, res) => {
    const { number_of_bugs } = req.params;
    const total = Number(number_of_bugs) + 2;
    number_of_bugs >= 200
        ? res.send("Too many bugs!! Start over!")
        : res.send(`<h1>${number_of_bugs} little bugs in the code</h1> <a href='http://localhost:3001/bugs/${total}'>Pull one down, patch it around</a>`);
});
const pokemonList = require("../models/pokemon.json");
app.get("/pokemon", (req, res) => {
    res.json(pokemonList);
});
app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    res.json(pokemonList.filter((pokemon) => {
        if (pokemon.name.toLowerCase() === name || pokemon.name === name) {
            return pokemon;
        }
    }));
});
app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    pokemonList[indexOfArray]
        ? res.json(pokemonList[indexOfArray])
        : res.send(`Sorry, no pokemon found at ${indexOfArray}`);
});
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`);
});
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
module.exports = app;
//# sourceMappingURL=app.js.map