const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  rooms: [{ type: Object, ref: "Room" }],
  transport: [{ type: Object, ref: "Transport" }],
});

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
    carrito: [cartSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", UsuarioSchema);
