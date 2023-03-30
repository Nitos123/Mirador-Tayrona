const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usuarioRoutes = require("./Usuario");
const cenaRoutes = require("./Cena");
const almuerzoRoutes = require("./almuerzo");
const desayunoRoutes = require("./Desayuno");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(usuarioRoutes);
router.use(cenaRoutes);
router.use(almuerzoRoutes);
router.use(desayunoRoutes);

module.exports = router;
