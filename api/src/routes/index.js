const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const roomRoutes = require("./Room")
const usuarioRoutes = require("./Usuario");
const cenaRoutes = require("./Cena");
const almuerzoRoutes = require("./almuerzo");
const desayunoRoutes = require("./Desayuno");
const comidasRoutes = require("./comidas")


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(usuarioRoutes);
router.use(cenaRoutes);
router.use(almuerzoRoutes);
router.use(desayunoRoutes);
router.use(comidasRoutes);
router.use(roomRoutes);

module.exports = router;
