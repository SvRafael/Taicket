const express = require("express")
var router = express.Router(); //Interceptacao das rotas
const ticketController = require("./../controller/ticket-controller")

router.post("/", ticketController.post);

router.get("/", ticketController.get);

router.get("/ticketTicker", ticketController.getById);

router.put("/:ticketId", ticketController.put);

router.delete("/:ticketId", ticketController.delete);

module.exports = router;