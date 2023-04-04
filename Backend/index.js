const express = require('express')
const app = express()
const cors = require('cors')
const registroRouter = require('./apis')
require('dotenv').config()
require('./db/mongodb')

app.use(cors())

app.use(express.json())
const PUERTO = process.env.PORT || 4500

app.use(registroRouter)

app.get('/', (req,res)=>{
 res.send('Servidor vivo')
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor conectado en puerto ${PUERTO}`)
})