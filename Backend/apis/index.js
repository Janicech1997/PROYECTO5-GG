const express = require('express')
const router = express.Router()

const registroRouter = require('./collection')

router.use('/registro', registroRouter)

module.exports = router