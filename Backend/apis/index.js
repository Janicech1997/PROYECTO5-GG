const express = require('express')
const router = express.Router()

const formularioRouter = require('./collection')

router.use('/formulario', formularioRouter)

module.exports = router