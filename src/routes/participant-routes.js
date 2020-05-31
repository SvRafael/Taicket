const express = require("express");
const router = express.Router();
const participantController = require("./../controller/participant-controller");

router.post("/", participantController.post);

router.get("/", participantController.getAll);

module.exports = router;
