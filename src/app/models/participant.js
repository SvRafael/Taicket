const  mongoose = require('mongoose');
const bcrypt = require ('bcrypt');
const participantSchema = mongoose.Schema;

const participantSchema = new Schema({
    name: {type: String,'', required:true},
    email: {type: String,'', required:true},
    cpf: {type: String, '', required:true},

});

module.exports = mongoose.model('Participant', participantSchema);