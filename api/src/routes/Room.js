const {Router}= require("express")

const { addRoom, getAllRooms  } = require("../../controller/roomController")

const api = Router()

api.post("/room", addRoom)
api.get("/room", getAllRooms)

module.exports = api;