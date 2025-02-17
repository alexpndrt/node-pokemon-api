const express = require("express");
const { success } = require("./helper");
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
  const message = "un pokemon a bien été trouvé.";
  // res.send(`Vous avez demandé le pokémon ${pokemon.name}`);
  res.json(success(message, pokemon));
});

app.listen(port, () =>
  console.log(
    `Notre application Node est demarré sur : http://localhost:${port}`
  )
);
