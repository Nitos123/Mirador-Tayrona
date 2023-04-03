const Usuario = require("../src/models/Usuario");

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

module.exports = {
  addUsuario,
  getAllUsers
};
