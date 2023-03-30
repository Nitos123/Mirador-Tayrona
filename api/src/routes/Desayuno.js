const express = require("express");
const { addDesayuno } = require("../../controller/DesayunoController");

const api = express.Router();

api.post("/desayuno", addDesayuno);

module.exports = api;
