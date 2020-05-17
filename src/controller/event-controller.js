const eventRepository = require("./../repositories/event-repository");

exports.post = async (req, res) => {
  try {
    const event = await eventRepository.post({
      ...req.body,
      company: req.company,
    });

    res.status(201).json({ message: "Evento criado com sucesso!", event });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar evento!", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const events = await eventRepository.getAll({
      company: req.company,
    });

    res
      .status(201)
      .json({ message: "Eventos listados com sucesso!", event: events });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar eventos!", error });
  }
};

exports.getById = async (req, res) => {
  try {
    const event = await eventRepository.getById({
      id: req.params.id,
      company: req.company,
    });

    if (event) {
      res
        .status(201)
        .json({ message: "Evento encontrado com sucesso!", event });
      return;
    }

    res.status(404).json({ message: "Evento não encontrado!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao consultar evento!", error });
  }
};

exports.put = async (req, res) => {
  try {
    const event = await eventRepository.put(req.params.id, req.body);

    if (event) {
      res
        .status(201)
        .json({ message: "Evento atualizado com sucesso!", event });
      return;
    }

    res.status(404).json({ message: "Evento não encontrado!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar evento!", error });
  }
};
