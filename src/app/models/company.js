const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var companySchema = new Schema({
    name: {type: String, default: "", required: true},
    email: {type: String, default: "", required: true, unique: [true, "email must be unique"]},
    cpf: {type: String, default: "", required: true},
    cnpj: {type: String, default: "", required: true},
    fantasyName: {type: String, default: "", required: true},
    password: {type: String, default: "", required: true}
});

companySchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
companySchema.methods.validPassword = function (password) {
return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Company', companySchema);