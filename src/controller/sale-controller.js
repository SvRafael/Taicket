const saleRepository = require("./../repositories/sale-repository");

exports.get = async (req, res) => {
  try {
    const sales = await saleRepository.get({ company: req.company });

    res.status(201).json({ message: "Vendas listadas com sucesso!", sales });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar vendas!", error });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await saleRepository.getEvent(req.params.idEvent);

    res.status(201).json({ message: "Evento encontrado com sucesso!", event });
  } catch (error) {
    res.status(500).json({ message: "Erro ao encontrar evento!", error });
  }
};

exports.post = async (req, res) => {
  try {
    const sale = await saleRepository.post({
      ...req.body,
    });

    res.status(201).json({ message: "Venda criada com sucesso!", sale });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar venda!", error });
  }
};
