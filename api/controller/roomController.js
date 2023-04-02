const Room = require("../src/models/Room");

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
      id,
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
      id,
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

const getRoomId = async (req,res)=>{
  try {
    const {id} = req.params
    const response = await Room.findById(id)
    res.send(response)
  } catch (error) {
    
  }
}


async function getRoomType(req, res) {

  const {type}= req.query
  const result = await Room.findOne({ type });
  res.send(result)
}


module.exports = {
  addRoom,
  getAllRooms,
  getRoomId,
  getRoomType,
};
