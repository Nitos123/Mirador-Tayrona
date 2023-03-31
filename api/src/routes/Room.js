const {Router}= require("express")

const { addRoom  } = require("../../controller/roomController")

const api = Router()

api.post("/room", addRoom)

module.exports = api;