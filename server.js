const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const dotenvSafe = require("dotenv-safe");

const PORT = process.env.port || 3000;

dotenvSafe.config();

const authService = require("./src/services/auth-service");
const indexRoute = require("./src/routes/index-routes");
const companyRoute = require("./src/routes/company-route");
const eventRoutes = require("./src/routes/event-routes");
const authRoutes = require("./src/routes/auth-routes");

//PERSISTENCIA
mongoose.connect(
  "mongodb://Rafael12345:1234@cluster0-shard-00-00-7a7r3.mongodb.net:27017,cluster0-shard-00-01-7a7r3.mongodb.net:27017,cluster0-shard-00-02-7a7r3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Configurar app para usar body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo porta

//Vincular a aplicacao(app) com o motor de rotas
app.use("/api", indexRoute);
app.use("/api/company", authService, companyRoute);
app.use("/api/events", authService, eventRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server on");
});
