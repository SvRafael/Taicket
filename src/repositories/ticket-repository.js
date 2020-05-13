const Ticket = require("../app/models/ticket");
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

exports.post = async(data) =>{
    const ticket = new Ticket(data);
    return ticket.save();
} 

exports.get = () =>{
    return Ticket.find();
}

exports.getById = async(data) =>{
    const res = await Ticket.findOne({ name: data.name });
    return res;
}

exports.put = async(data) =>{
    const res = await Ticket.findOneAndUpdate({name: data.name}, 
    {
        $set:{
            name : data.name,
            value: data.value,
        },
    },
    {new: true});

    return res;
}

exports.delete = async(data) =>{
    await Ticket.findOneAndRemove({name: data.name});
}

