const Participant = require("../app/models/participant");

exports.post = async ({ company, ...data }) => {
  const participant = new Participant({ ...data, company: company.id });

  return participant.save();
};

exports.getAll = async ({ company }) => {
  const participants = Participant.find({ company: company.id });

  return participants;
};
