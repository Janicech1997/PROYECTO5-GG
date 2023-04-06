const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const authRouter = require('./autch')
const authMiddleware = require('../middleware/authorization')
const registerRouter = require('./register')

router.use('/autch', authRouter)
router.use('/register', registerRouter)


router.use(authMiddleware)
router.use('/user', userRouter)

module.exports = router