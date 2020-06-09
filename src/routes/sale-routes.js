const express = require("express");
const router = express.Router();
const saleController = require("./../controller/sale-controller");
const authService = require("./../services/auth-service");

router.get("", authService, saleController.get);

router.get("/events/:idEvent", saleController.getEvent);

router.post("/", saleController.post);

module.exports = router;
