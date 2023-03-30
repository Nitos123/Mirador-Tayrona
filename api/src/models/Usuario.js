const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = Schema(
  {
    fullName: String,
    userName: String,
    password: String,
    email: String,
    phone: String,
    status: Boolean,
    type: String,
    coments: [ComentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);