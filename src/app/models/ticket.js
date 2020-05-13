const mongoose = require("mongoose")
const Schema = mongoose.Schema;

var ticketSchema = new Schema({
    name: {type: String, default: "", required: true},
    value: {type: Number, default: "", required: true, },
});

module.exports = mongoose.model('Ticket', ticketSchema);