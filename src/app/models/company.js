var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var companySchema = new Schema({
    nome: String,
    email: String,
    cpf: String,
    cnpj: String,
    nomeFantasia: String,
});

module.exports = mongoose.model('Company', companySchema);