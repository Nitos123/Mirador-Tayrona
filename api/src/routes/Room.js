const {Router}= require("express")

const { addRoom, getAllRooms, getRoomId  } = require("../../controller/roomController")

const api = Router()

api.post("/room", addRoom)
api.get("/room", getAllRooms)
api.get("/room/:id", getRoomId )

module.exports = api;