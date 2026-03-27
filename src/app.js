const express = require("express");

const animalRoutes = require("./routes/animalRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");

const app = express();

app.use(express.json());

app.use("/animal", animalRoutes);
app.use("/funcionario", funcionarioRoutes);

module.exports = app;