const express = require('express');
const app = express();
const cors = require('cors');
const registroRouter = require('./apis');
app.use(cors());
require('dotenv').config();
require('./db/mongodb');

app.use(express.json())
app.use(router)



app.get('/', (req,res)=>{
    res.send('Servidor en linea')
})


const PORT = 3500;
app.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})