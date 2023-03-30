const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DesayunoSchema = Schema(

  { 
type: String,
name: String,
description: String,
price: Number,

},
  { timestamps: true }
);

module.exports = mongoose.model("Desayuno", DesayunoSchema);