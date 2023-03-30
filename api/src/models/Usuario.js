const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ComentSchema = Schema(
  {
    text: String,
    rating: Number,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  { timestamps: true }
);

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