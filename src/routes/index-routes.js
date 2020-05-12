const express = require("express")
var router = express.Router(); //Interceptacao das rotas

var Company = require("../app/models/company");

router
    .use("/", function(req,res,next){
        //Aqui implementaremos rotinas de LOGs, Validações, Autenticações.....
        console.log("Interceptações pelo Middleware");
        next();
    });

router.get('/', (req,res) => res.json({message:"Rota Teste Ok"}));

module.exports = router;