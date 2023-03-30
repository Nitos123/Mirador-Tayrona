const Desayuno = require("../src/models/Desayuno");

async function addDesayuno(req, res) {
  try {
    const { type, name, description, price } = req.body;

    const desayuno = Desayuno({
      type,
      name,
      description,
      price,
    });
    const desayunoStored = await desayuno.save();
    res.status(201).send({ desayunoStored });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

const getAllDesayuno =  async (req, res)=>{
  try {
    const response = await Desayuno.find()
    res.send(response)
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  addDesayuno,
  getAllDesayuno
};



