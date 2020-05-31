const participantRepository = require("./../repositories/participant-repository");

exports.post = async (req, res) => {
  try {
    const participant = await participantRepository.post({
      ...req.body,
      company: req.company,
    });

    res
      .status(201)
      .json({ message: "Participante criado com sucesso!", participant });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar participante!", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const participants = await participantRepository.getAll({
      company: req.company,
    });

    res
      .status(201)
      .json({ message: "Participantes listados com sucesso!", participants });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar participantes!", error });
  }
};
