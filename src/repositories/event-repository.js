const Event = require("../app/models/event");

exports.post = async ({ company, ...data }) => {
  const event = new Event({ ...data, company: company.id });

  return event.save();
};

exports.getAll = async ({ company }) => {
  const events = Event.find({ company: company.id }).populate("company");

  return events;
};

exports.getById = async ({ id, company }) => {
  return Event.findOne({ _id: id, company: company.id });
};

exports.put = async (id, data) => {
  return Event.findByIdAndUpdate(
    id,
    {
      $set: data,
    },
    { new: true }
  );
};
