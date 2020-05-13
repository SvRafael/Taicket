const ticketRepository = require("../repositories/ticket-repository");
// const signupRepository = require('../repositories/signup-repository');


exports.post = async (req, res) => {
    try {
      const ticket = await ticketRepository.post(req.body);
  
      res.status(201).json({ message: "Ingresso criado com sucesso!", ticket });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar ingresso!", error });
    }
  };

  exports.get = async (req, res) => {
    try {
      const tickets = await ticketRepository.get();
  
      res.json({
        message: "Ingressos listadas com sucesso!",
        tickets,
        count: tickets.length,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar ingressos!", error });
    }
  };

exports.getById = async (req, res) => {
    try {
        var data = await ticketRepository.getById(req.body);
        if(data){
        res.status(200).json({
        message: "Ingresso encontrado com sucesso!",
        data,
        });

        return;
    }
        res.status(404).json({
      message: "Ingresso não encontrado!",
    });
    } catch (error) {
        res.status(500).send({
            message:"Falha na requisição",
            erro: error
        });
    }
}

exports.put = async (req, res) => {
    try {   
        const data = await ticketRepository.put(req.body);
        res.status(200).send({
            message:"Ingresso atualizado com sucesso",
            data
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

exports.delete = async (req, res) =>{
    try {
        const id = req.params.ticketId;  
        await repository.delete(req.body);
        res.status(200).send({
            message:"Ingresso removido com sucesso",
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
}