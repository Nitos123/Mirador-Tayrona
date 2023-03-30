const Almuerzo = require("../src/models/Almuerzo");

async function addAlmuerzo(req, res) {
  try {
    const { type, name, description, price } = req.body;

    const almuerzo = Almuerzo({
      type,
      name,
      description,
      price,
    });
    const almuerzoStored = await almuerzo.save();
    res.status(201).send({ almuerzoStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

}

const getAllAlmuerzo =  async (req, res)=>{
  try {
    const response = await Almuerzo.find()
    res.send(response)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  addAlmuerzo,
  getAllAlmuerzo

};