const mongoose = require("mongoose");

const { Schema } = require("mongoose");

// este modelo define la estructura de la tabla RoomSchema en la base de datos
const RoomSchema = Schema(
  {
    type: { type: String, required: true },
    id: { type: Number, unique: true },
    status: Boolean,
    guests: Number,
    name: String,
    desctiption: String,
    image: [String],
    price: Number,
    bookedDates: [
      {
        start: { type: Date },
        end: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);

//MATRIMONIAL
//FAMILIAR
//INDIVIDUAL
