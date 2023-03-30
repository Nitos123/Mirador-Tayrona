const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CenaSchema = Schema(
  { 
type: Number,
name: String,
description: String,
price: Number,
}
);

module.exports = mongoose.model("Cena", CenaSchema);