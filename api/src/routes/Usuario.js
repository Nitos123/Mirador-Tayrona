const express = require('express')
const {addUsuario} = require('../../controller/UsuarioController')

const api = express.Router()



api.post('/usuarios', addUsuario)


module.exports = api