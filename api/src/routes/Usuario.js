const express = require("express");
const {
  addUsuario,
  getAllUsers,
} = require("../../controller/UsuarioController");

const api = express.Router();

api.post("/usuarios", addUsuario);
api.get("/usuarios", getAllUsers);

module.exports = api;
