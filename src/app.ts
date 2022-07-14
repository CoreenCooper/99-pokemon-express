// const express = require("express");
// const app = express();

import express, { Application, Request, Response } from "express";
const app: Application = express();

const handleRoot = (req: Request, res: Response) => {
    console.log(req.params);
    
    res.send("Welcome 99 Pokemon");
  };

app.get("/", handleRoot);

app.get("/:verb/:adjective/:noun", (req: Request, res: Response) => {
    console.log(req.params);
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req: Request, res: Response) => {
  res.send("<h1>99 little bugs in the code</h1>");
});

app.get(
  "/bugs/:number_of_bugs",
  (req: Request<{ number_of_bugs: number }>, res: Response) => {
    const { number_of_bugs } = req.params;
    if (number_of_bugs >= 200) {
      res.send("Too many bugs!! Start over!");
    } else {
      // Why is number_of_bugs + 2 a string?
      const total: number = Number(number_of_bugs) + 2;
      res.send(
        `<h1>${number_of_bugs} little bugs in the code</h1> <a href='http://localhost:3001/bugs/${total}'>Pull one down, patch it around</a>`
      );
    }
  }
);

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Page not found");
});

const pokemon = require("../models/pokemon.json");

// http://localhost:3001/pokemon/search?name=Bulbasaur

// app.get("/pokemon/search", (req: Request, res: Response) => {
//     const { name } = req.query
//     let answer = pokemon.filter((pokemon)=>{
//         if(pokemon.name.toLowerCase() === name.toLowerCase()){
//             return pokemon
//         }
//     })
//     res.json(answer)
//   });

// app.get("/pokemon", (req: Request, res: Response) => {
//     res.json(pokemon);
// });

// app.get("/pokemon/:indexOfArray", (req: Request, res: Response) => {
//     const { indexOfArray } = req.params;
//     if (pokemon[indexOfArray]) {
//         res.json(pokemon[indexOfArray])
//     } else {
//         res.send(`Sorry, no pokemon found at ${indexOfArray}`)
//     }

// });

module.exports = app;
