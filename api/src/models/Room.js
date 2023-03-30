const mongoose = require("mongoose");

// este modelo define la estructura de la tabla RoomSchema en la base de datos
const RoomSchema = Schema(
  {
    type: { type: String, required: true },
    status: String,
    guests: Number,
    name: String,
    desctiption: String,
    image: [],
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);

