const Room = require("../src/models/Room");
const nodemailer = require('nodemailer');  //para el envio de mails con un ticket al usuario

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

const pushAsync  = async (array,elem) =>{
    await array.push(elem)
}

const sendTicketToMail = async (req, res) => {
  try {
    const {id} = req.params
    // const habitacion = await Room.findOne({ "bookedDates._id": id }).populate('bookedDates.idRoom');
    const usuario = await Usuario.findOne({ _id: id });

    const rooms = usuario.carrito[0].rooms;

    const cuartos = []

    // rooms.forEach(async element => {
        
    //   //console.log(element.idRoom)
      
    //   const hab = await Room.findById(element.idRoom)
    //   cuartos[] = pushAync(hab)
    //   // console.log(hab)
     
    // });
    for (let index = 0; index < rooms.length; index++) {
      const hab = await Room.findById(rooms[index].idRoom)
      await pushAsync(cuartos, hab)
      
    }
   

    

    console.log('array de cuartos',cuartos)


    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    
   
  

 // Generar el contenido del ticket con los productos del carrito
 let ticket = 'Ticket del hotel Tayrona:\n ';
 let total = 0;
console.log(cuartos)
 cuartos.forEach(producto => {
   ticket += `${producto.name}: $${producto.price}\n`;
  console.log(producto.name)
   total += producto.price;
  console.log(producto)
 });

 ticket += `Total: $${total}`;




    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // servidor SMTP
      port: 465, // puerto del servidor SMTP
      secure: true, // utiliza SSL
      auth: {
        user: 'miradortayronaproyectohenry@gmail.com', // dirección de correo electrónico del remitente
        pass: 'xewmidrfubohbesq' // contraseña del remitente
      }
    });

    // Enviar el ticket al email del usuario
    const info = await transporter.sendMail({
      from: 'miradorTayronaProyectoHenry@gmail.com',
      to: usuario.email,
      subject: 'Ticket de compra ',
      text: ticket + '\nMuchas gracias por elegir hospedarse aqui'
    });

    transporter.verify().then(() =>{console.log('Ready for send emails')})

    res.json({ mensaje: 'Ticket enviado exitosamente', info: info });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




module.exports = {
  addRoom,
  getAllRooms,
  getRoomId,
  getRoomType,
  getAvailableRooms,
  updateRooms,
  sendTicketToMail
};
