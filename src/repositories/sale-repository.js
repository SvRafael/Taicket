const Sale = require("../app/models/sale");
const Event = require("../app/models/event");
const Company = require("../app/models/company");
const Ticket = require("../app/models/ticket");

exports.get = async ({ company }) => {
  const sales = await Sale.find({ company: company.id });

  for (sale of sales) {
    const event = await Event.findById(sale.event);
    const company = await Company.findById(sale.company);
    const ticket = await Ticket.findById(sale.ticket);

    sale.event = event;
    sale.company = company;
    sale.ticket = ticket;
  }

  return sales;
};

exports.getEvent = async (idEvent) => {
  const event = await Event.findById(idEvent);
  const company = await Company.findById(event.company);
  const tickets = await Ticket.find({ event: event._id });

  return { ...event.toObject(), company, tickets };
};

exports.post = async (data) => {
  const sale = new Sale(data);

  return sale.save();
};
