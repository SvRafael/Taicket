const jwt = require("jsonwebtoken");
const Company = require("../app/models/company");
const Ticket = require("../app/models/ticket");

const authorize = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);

    req.company = await Company.findById(decoded.id);

    next();
  } catch (error) {
      console.log(error)
    res.status(401).json({
      message: "Empresa não autenticada!",
    });
  }
};

module.exports = authorize;
