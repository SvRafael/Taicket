const express = require("express");
const router = express.Router();
const saleController = require("./../controller/sale-controller");

router.get("/events/:idEvent", saleController.getEvent);

router.post("/", saleController.post);

module.exports = router;
