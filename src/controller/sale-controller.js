const saleRepository = require("./../repositories/sale-repository");

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
