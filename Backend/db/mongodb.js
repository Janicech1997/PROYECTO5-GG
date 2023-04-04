const mongoose = require('mongoose');
require('dotenv').config(); 

const url = `mongodb+srv://jani97:${process.env.DB_PASSWORD}@cluster0.ncavhk5.mongodb.net/?retryWrites=true&w=majority`
console.log("------>",url)

mongoose.connect(url)
.then(()=>{
    console.log('-------------------')
    console.log('Base de datos MongoDB conectada')
    console.log('-------------------')
})
.catch((error)=> {
    console.error(error)
})

module.exports = mongoose