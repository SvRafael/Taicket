const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

module.exports = mongoose.model("Participant", participantSchema);
