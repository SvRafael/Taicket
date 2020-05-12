const jwt = require("jsonwebtoken");
const Company = require("../app/models/company");

const authorize = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);

    req.company = Company.findById(decoded.id);

    next();
  } catch (error) {
    res.status(401).json({
      message: "Usuário não autenticado!",
    });
  }
};

module.exports = authorize;
