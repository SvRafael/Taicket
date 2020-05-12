const jwt = require("jsonwebtoken");
const Company = require("../app/models/company");

exports.register = async (data) => {
  const hasCompany = await Company.findOne({ email: data.email });

  if (hasCompany) {
    return null;
  }

  const company = new Company({ 
      name: data.name, 
      email: data.email,
      cpf: data.cpf,
      cnpj: data.cnpj,
      fantasyName: data.fantasyName
    });

  company.password = company.generateHash(data.password);

  await company.save();

  return {
    company: {
      name: company.name, 
      email: company.email,
      cpf: company.cpf,
      cnpj: company.cnpj,
      fantasyName: company.fantasyName      
    },
  };
};

exports.login = async (data) => {
  const company = await Company.findOne({ email: data.email });

  if (!company) {
    return null;
  }

  if (!company.validPassword(data.password)) {
    return null;
  }


  console.log(process.env.SECRET);
  
  return {
    company: {
      id: company.id,
      email: company.email,
    },
    token: jwt.sign({ id: company.id }, process.env.SECRET, { expiresIn: 120 }),
  };
};
