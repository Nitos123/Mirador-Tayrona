const {Router}= require("express")

const { addRoom, getAllRooms, getRoomId, getRoomType  } = require("../../controller/roomController")

const api = Router()

api.get("/room/type", getRoomType)
api.get("/room", getAllRooms)
api.post("/room", addRoom)
api.get("/room/:id", getRoomId )

module.exports = api;