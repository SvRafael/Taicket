const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: true,
  },
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant",
    required: true,
  },
  date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Sale", saleSchema);
