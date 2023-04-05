const {Router}= require("express")

const { addRoom, getAllRooms, getRoomId, getRoomType, getAvailableRooms, updateRooms } = require("../../controller/roomController")

const api = Router()

api.get("/room/avalible", getAvailableRooms)
api.get("/room/type", getRoomType)
api.get("/room", getAllRooms)
api.post("/room", addRoom)
api.patch("/rooms/:id/bookings", updateRooms)
api.get("/room/:id", getRoomId )

module.exports = api;