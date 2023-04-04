const express = require('express')
const app = express()
const cors = require('cors')
const formularioRouter = require('./apis')
require('dotenv').config()
require('./db/mongodb')

app.use(cors())

app.use(express.json())
const PUERTO = process.env.PORT || 5500

app.use(formularioRouter)

app.get('/', (req,res)=>{
 res.send('Servidor vivo')
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor conectado en puerto ${PUERTO}`)
})