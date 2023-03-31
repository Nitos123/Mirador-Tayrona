const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransportSchema = Schema({
  asientos: Number,
  precio : Number,
  numero: Number
  
});

module.exports = mongoose.model("Transport", TransportSchema);