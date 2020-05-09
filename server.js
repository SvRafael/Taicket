const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//PERSISTENCIA
mongoose.connect(
  "mongodb+srv://Rafael:Rafael1234@cluster0-7a7r3.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//Configurar app para usar body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo porta
const PORT = process.env.port || 3000;

// //ROTAS
const companyRoute = require("./src/routes/company-route");
// var signupRoute = require("./src/routes/signup-route");
// var loginRoute = require("./src/routes/login-route");

//Vincular a aplicacao(app) com o motor de rotas
// app.use("/api", indexRoute);
app.use("/api/company", companyRoute);
// app.use("/api/registrar", signupRoute);
// app.use("/api/login", loginRoute);

app.listen(3000, function(){
    console.log("Servidor Ligado");
})
