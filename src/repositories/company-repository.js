const Company = require('../app/models/company');
const mongoose = require('mongoose');
// var jwt = require('jsonwebtoken');
// require("dotenv-safe").config();

// exports.login = async(mail, pass) => {    
//     const user = await User.findOne({ email: mail });
//     const id = user._id;
//     if (user.email === mail && user.ValidPassword(pass)){
//         const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 60}); //1 min
//         return token;
//     } else{
//         throw({status: 404, code: 'Usuário não encontrado.', message: 'Tente outro E-mail.'});
//     }
// }

exports.post = async(data) =>{
    const usuario = new Company(data);
    await usuario.save();
} 

exports.get = async () =>{
    const res = await Company.find();
    return res;
}

exports.getById = async(id) =>{
    const res = await Company.findById(id);
    return res;
}

exports.put = async(id, data) =>{
    await Company.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            email: data.email,
            cpf: data.cpf,
            cnpj: data.cnpj,
            nomeFantasia: data.nomeFantasia

        }
    });
}

exports.delete = async(id) =>{
    await Company.findOneAndRemove(id);
}

