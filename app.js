const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello, express 3 !"));
app.get("/api/pokemons/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Vous avez demandé le pokémon nº ${id}`);
});

app.listen(port, () =>
  console.log(
    `Notre application Node est demarré sur : http://localhost:${port}`
  )
);
