const express = require("express");
const {
  addUsuario,
  getAllUsers,
  addRoomDate,
  deleteRoomCard
} = require("../../controller/UsuarioController");

const api = express.Router();

api.post("/usuarios", addUsuario);
api.get("/usuarios", getAllUsers);
api.patch("/usuarios/dateRoom", addRoomDate)
api.patch("/usuario/deleteCart",deleteRoomCard )


module.exports = api;
