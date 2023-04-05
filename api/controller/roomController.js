const Room = require("../src/models/Room");

const Usuario = require("../src/models/Usuario")

const addRoom = async (req, res) => {
  try {
    const {
      type,
      status,
      guests,
      name,
      desctiption,
      image,
      price,
      bookedDates,
    } = req.body;
    console.log(req.body);

    const room = Room({
      type,
      status,
      guests,
      name,
      desctiption,
      image,
      price,
      bookedDates,
    });

    const roomStored = await room.save();
    console.log(roomStored);
    res.status(201).send({ roomStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAllRooms = async (req, res) => {
  try {
    const response = await Room.find();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

const getRoomId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Room.findById(id);
    res.send(response);
  } catch (error) {}
};

async function getRoomType(req, res) {
  const { type } = req.query;
  const result = await Room.findOne({ type });
  res.send(result);
}

const getAvailableRooms = async (req, res) => {
  const { start, end } = req.query;

  let startUTC, endUTC;

  try {
    startUTC = new Date(start).toISOString();
    endUTC = new Date(end).toISOString();
  } catch (err) {
    res.status(400).json({ message: "Invalid date format" });
    return;
  }

  try {
    const availableRooms = await Room.find({
      bookedDates: {
        $not: {
          $elemMatch: {
            start: { $lt: endUTC },
            end: { $gt: startUTC },
          },
        },
      },
    });
    res.json(availableRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRooms = async (req, res) => {
  const roomId = req.params.id;
  const { start, end, userId } = req.body;

  let startUTC, endUTC;

  try {
    startUTC = new Date(start).toISOString();
    endUTC = new Date(end).toISOString();
  } catch (err) {
    res.status(400).json({ message: "Invalid date format" });
    return;
  }

  try {
    const room = await Room.findByIdAndUpdate(roomId, {
      $push: { bookedDates: { start: startUTC, end: endUTC, userId: userId } },
    });
   

    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addRoom,
  getAllRooms,
  getRoomId,
  getRoomType,
  getAvailableRooms,
  updateRooms,
};
