const express = require("express")
var router = express.Router(); //Interceptacao das rotas
const companyController = require("./../controller/company-controller")

router.post("/", companyController.post);

router.get("/", companyController.get);

// router.get("/:userId", companyController.getById);

// router.put("/:userId", companyController.put);

// router.delete("/:userId", companyController.delete);

// router.post("/login", userController.login);

module.exports = router;