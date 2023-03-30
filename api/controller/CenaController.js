const Cena = require("../src/models/Cena");

async function addCena(req, res) {
  try {
    const { type,
            name,
            description,
            price } =
      req.body;
    
    const usuario = Cena({
        type,
        name,
        description,
        price
    });
    const cenaStored = await usuario.save();
    res.status(201).send({ cenaStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

}
module.exports = {
  addCena,
};