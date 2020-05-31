const Sale = require("../app/models/sale");

exports.post = async (data) => {
  const sale = new Sale(data);

  return sale.save();
};
