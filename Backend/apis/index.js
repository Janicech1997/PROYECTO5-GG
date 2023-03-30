const express = require('express')
const router = express.Router()

const contactRouter = require('./collection')

router.use('/contact', contactRouter)

module.exports = router