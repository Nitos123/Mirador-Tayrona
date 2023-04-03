const express = require("express");
const { addCarrito} = require("../../controller/carritoController");

const api = express.Router();

api.post("/carrito", addCarrito);


module.exports = api;
