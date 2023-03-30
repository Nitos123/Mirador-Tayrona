const express = require('express')
const {addCena} = require('../../controller/CenaController')

const api = express.Router()



api.post('/cena', addCena)


module.exports = api