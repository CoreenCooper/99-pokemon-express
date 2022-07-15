import express, { Application, Request, Response } from "express";
const app: Application = express();

// create a variable for a funtcion and pass it in the get request as an argument
const handleRoot = (req: Request, res: Response) => {
  res.send("Welcome 99 Pokemon");
};

app.get("/", handleRoot);

// pass a function directly into the get request as an argument
app.get("/bugs", (req: Request, res: Response) => {
  res.send("<h1>99 little bugs in the code</h1>");
});

app.get(
  "/bugs/:number_of_bugs",
  (req: Request<{ number_of_bugs: number }>, res: Response) => {
    const { number_of_bugs } = req.params;
    // Why is number_of_bugs + 2 a string?
    const total: number = Number(number_of_bugs) + 2;

    number_of_bugs >= 200
      ? res.send("Too many bugs!! Start over!")
      : res.send(
          `<h1>${number_of_bugs} little bugs in the code</h1> <a href='http://localhost:3001/bugs/${total}'>Pull one down, patch it around</a>`
        );
  }
);

const pokemonList = require("../models/pokemon.json");

app.get("/pokemon", (req: Request, res: Response) => {
  res.json(pokemonList);
});

// http://localhost:3001/pokemon/search?name=Bulbasaur
interface attributes {
  name: string;
  // img: string;
  // type: Array<string>;
  // stats: object;
  // damages: object;
}

app.get("/pokemon/search", (req: Request, res: Response) => {
  const { name } = req.query;

  res.json(
    pokemonList.filter((pokemon: attributes) => {
      // Why do I have to use if for this filter?
      // I thought if the condition was true it would automatically return the value of the element.
      if (pokemon.name.toLowerCase() === name || pokemon.name === name) {
        // why do I have to emplicitly return in order to get object contains?
        return pokemon;
      }
    })
  );
});

app.get("/pokemon/:indexOfArray", (req: Request, res: Response) => {
    const { indexOfArray } = req.params;
    pokemonList[indexOfArray]
     ? res.json(pokemonList[indexOfArray])
     : res.send(`Sorry, no pokemon found at ${indexOfArray}`)
});

app.get("/:verb/:adjective/:noun", (req: Request, res: Response) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Page not found");
});
module.exports = app;
