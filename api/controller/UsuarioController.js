const Usuario = require("../src/models/Usuario");
const Room = require("../src/models/Room")

const mongoose = require("mongoose")
async function addUsuario(req, res) {
  try {
    const { fullName, userName, password, email, phone, status, type, coments } =
      req.body;
    console.log(req.body);

    const usuario = Usuario({
      fullName,
      userName,
      password,
      email,
      phone,
      status,
      type,
      coments
    });
    const usuarioStored = await usuario.save();
    res.status(201).send({ usuarioStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

}

const getAllUsers =  async (req, res)=>{
  try {
    const search = await Usuario.find()
    res.send(search)
  } catch (error) {
    console.log(error)
  }
}
const addRoomDate = async (req, res) => {
  const { start, end, userId, idRoom } = req.body;

  let startUTC, endUTC;

  try {
    startUTC = new Date(start).toISOString();
    endUTC = new Date(end).toISOString();
  } catch (err) {
    res.status(400).json({ message: "Invalid date format" });
    return;
  }

  try {
    const userID = new mongoose.Types.ObjectId(userId)
    const roomID = new mongoose.Types.ObjectId(idRoom)


    const existingRoomDate = await Room.findOne({
      _id: roomID,
      bookedDates: {
        $elemMatch: {
          start: { $lte: endUTC },
          end: { $gte: startUTC }
        }
      }
    });
    
    if (existingRoomDate) {
      return res.status(400).json({ message: "The specified dates already exist for this roomSchema" });
    }
    
    

    const existingRoomDates = await Usuario.findOne({
      _id: userID,
      "carrito.rooms": {
        $elemMatch: {
          start: startUTC,
          end: endUTC,
          idRoom: roomID
        }
      }
    });
    
    if (existingRoomDates) {
      return res.status(400).json({ message: "The specified dates already exist for this room" });
    }
    
    
    
    
    const user = await Usuario.findByIdAndUpdate(userID, {
      $push: { "carrito.rooms": { start: startUTC, end: endUTC, userId: userID, idRoom:roomID } },
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteRoomCard = async (req, res) => {
  const { userId, idRoom } = req.body;

  try {
    const roomID = new mongoose.Types.ObjectId(idRoom)
    const userID = new mongoose.Types.ObjectId(userId)
    const user = await Usuario.updateOne(
      { _id: userID },
      { $pull: { "carrito.rooms": { idRoom: roomID } } }
    );

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


//642df715b277bcadd21c3b38
async function crearComentario(req, res) {
  const usuarioId = req.params.id;

  try {
    
    const usuario = await Usuario.findByIdAndUpdate(usuarioId, {
      $push: { coments: { text: req.body.text, rating: req.body.rating, userId: usuarioId } },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

   ; // Obtiene el último comentario añadido

    res.send(usuario)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
}

async function deleteComnts(req, res) {
  const comentsId = req.params.id;
  const userId = req.params.user

  try {
    
    const usuario = await Usuario.findByIdAndUpdate(userId, {
      $pull: { coments: { _id: comentsId } },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

   ; // Obtiene el último comentario añadido

    res.send(usuario)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
}




module.exports = {
  addUsuario,
  getAllUsers,
  addRoomDate,
  deleteRoomCard,
  crearComentario,
  deleteComnts
};
