const express = require("express");
const animalRoutes = require("./routes/animalRoutes");

const app = express();

app.use(express.json());

app.use("/animal", animalRoutes);

module.exports = app;