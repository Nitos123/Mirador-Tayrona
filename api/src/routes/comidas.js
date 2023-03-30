const { Router } = require("express");

const { getAllAlmuerzo } = require("../../controller/AlmuerzoController")
const { getAllCena } = require("../../controller/CenaController")
const { getAllDesayuno } = require("../../controller/DesayunoController")

// const api = Router()
api.get("/comidas", async (req, res) => {
try {
     const desayuno = getAllDesayuno()
     const  almuerzo = getAllAlmuerzo()
    const cena = getAllCena()
   const todo = [...desayuno, ...almuerzo, ...cena];
   res.send(todo)
} catch (error) {
    console.log(error)
}
})


