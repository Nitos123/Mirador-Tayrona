const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CenaSchema = Schema(

  { 
type: String,
name: String,
description: String,
price: Number,

},
  { timestamps: true }
);

module.exports = mongoose.model("Cena", CenaSchema);