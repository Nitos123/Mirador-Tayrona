const Transporte = require("../src/models/Transport");

const addTransporte = async (req, res) => {
  const { asientos, precio, numero } = req.body;
  const transporte = Transporte({
    asientos,
    precio,
    numero,
  });

  await transporte.save();
  res.send(transporte);
};

const getAllTransporte= async(req,res)=>{
    try {
        const response = await Transporte.find()
        res.send(response)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  addTransporte,
  getAllTransporte
};
