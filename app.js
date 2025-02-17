const express = require("express");
const { success } = require("./helper");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`URL : ${req.url}`);
  next();
});

app.get("/", (req, res) => res.send("hello, express!"));
app.get("/api/pokemons", (req, res) => {
  const message = "La liste des pokémons a bien été récupérée.";
  res.json(success(message, pokemons));
});
app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "un pokemon a bien été trouvé.";
  // res.send(`Vous avez demandé le pokémon ${pokemon.name}`);
  res.json(success(message, pokemon));
});

app.listen(port, () =>
  console.log(
    `Notre application Node est demarré sur : http://localhost:${port}`
  )
);
