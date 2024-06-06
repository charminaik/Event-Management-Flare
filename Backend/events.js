const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  i: Number,
  heading: String,
  date: { year: Number, month: String ,day:String},
  location: String,
  fee: String,
  price: String,
  description: String,
  img: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
