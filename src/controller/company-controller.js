const companyRepository = require("../repositories/company-repository");
// const signupRepository = require('../repositories/signup-repository');


// exports.login = async (req, res) => {
//     try {
//         const token = await userRepository.login(req.body.email, req.body.password);
//         res.status(200).send({ auth: true, token: token });
//     } catch (e) {
//         if (!e.status) {
//             res.status(500).json({ error: { code: 'Erro Desconhecido.', message: 'Um erro desconhecido ocorreu.' } });
//         } else {
//             res.status(e.status).json({ error: {code: e.code, message: e.message}});
//         }
//     }
// }

exports.post = async (req, res) => {
    try {
      const c0ompany = await Companyrepository.post(req.body);
  
      res.status(201).json({ message: "Empresa criada com sucesso!", user });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar empresa!", error });
    }
  };

  exports.get = async (req, res) => {
    try {
      const companys = await companyRepository.get();
  
      res.json({
        message: "Empresas listadas com sucesso!",
        companys,
        count: companys.length,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar empresas!", error });
    }
  };

// exports.getById = async (req, res) => {
//     try {
//         const id = req.params.companyId;
//         var data = await repository.getById(id);
//         if(data){
//         res.status(200).json({
//         message: "Empresa encontrado com sucesso!",
//         data,
//         });

//         return;
//     }
//         res.status(404).json({
//       message: "Empresa não encontrado!",
//     });
//     } catch (error) {
//         res.status(500).send({
//             message:"Falha na requisição",
//             erro: error
//         });
//     }
// }

// exports.put = async (req, res) => {
//     try {
//         const id = req.params.companyId;    
//         const data = await repository.put(id, req.body);
//         res.status(200).send({
//             message:"Empresa atualizada com sucesso",
//             dados: data
//         })
//     } catch (error) {
//          res.status(500).send({
//             message: "Falha na requisição",
//             erro: error
//         });
//     }
// }

// exports.delete = async (req, res) =>{
//     try {
//         const id = req.params.companyId;  
//         await repository.delete(id);
//         res.status(200).send({
//             message:"Emoresa removida com sucesso",
//         })
//     } catch (error) {
//          res.status(500).send({
//             message: "Falha na requisição",
//             erro: error
//         });
//     }
    
// }

//Register
// exports.userRegister = async function(req, res){
//     try {
//         //chamar repositorio para registrar um usuario

//     } catch (error) {
        
//     }
// }

// //Login
// exports.login = async (req, res) => {
//   try {
//     const autheticated = await userRepository.login(req.body);

//     if (autheticated) {
//       res.status(200).json({
//         message: "Login realizado com sucesso!",
//         autheticated,
//       });

//       return;
//     }

//     res.status(401).json({
//       message: "Email e/ou senha inválidos!",
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ message: "Erro ao realizar login!", error });
//   }
// };