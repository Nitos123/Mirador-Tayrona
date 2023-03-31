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

module.exports = {
  addRoom,
};