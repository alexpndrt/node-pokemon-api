const express = require("express");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello, express 3 !"));
app.get("/api/pokemons", (req, res) => {
  const numberPokemons = pokemons.length;
  res.send(
    `Il y a ${numberPokemons} Pokémons dans le pokédex, pour le moment.`
  );
});
app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  res.send(`Vous avez demandé le pokémon ${pokemon.name}`);
});

app.listen(port, () =>
  console.log(
    `Notre application Node est demarré sur : http://localhost:${port}`
  )
);
