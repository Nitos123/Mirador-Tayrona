const express = require("express");
const { addAlmuerzo } = require("../../controller/AlmuerzoController");

const api = express.Router();

api.post("/almuerzo", addAlmuerzo);

module.exports = api;
