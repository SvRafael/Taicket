const Company = require("../app/models/company");
const mongoose = require("mongoose");

exports.post = async(data) =>{
    const company = new Company(data);
    return company.save();
} 

exports.get = () =>{
    return Company.find();
}

// exports.getById = async(id) =>{
//     const res = await Company.findById(id);
//     return res;
// }

// exports.put = async(id, data) =>{
//     await Company.findByIdAndUpdate(id, {
//         $set:{
//             nome: data.nome,
//             email: data.email,
//             cpf: data.cpf,
//             cnpj: data.cnpj,
//             nomeFantasia: data.nomeFantasia

//         }
//     });
// }

// exports.delete = async(id) =>{
//     await Company.findOneAndRemove(id);
// }

