const express = require("express");
const morgan = require("morgan");

const animalRoutes = require("./routes/animalRoutes");
const funcionarioRoutes = require("./routes/funcionarioRoutes");

const app = express();

morgan.token('erro-msg', (req, res) => res.locals.erroMsg || '');
morgan.token("body", (req) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :body :erro-msg'));
app.use(express.json());

app.use("/animal", animalRoutes);
app.use("/funcionario", funcionarioRoutes);

app.use((err, req, res, next) => {
  console.error(err);

  res.locals.erroMsg = err.message;

  res.status(err.status || 500).json({
    message: "Erro interno: " + err.message
  });
});

module.exports = app;