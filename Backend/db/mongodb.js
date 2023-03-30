const mongoose = require('mongoose');

const url = 'mongodb+srv://janice97:IhaNekskLItgddZG@cluster0.ncavhk5.mongodb.net/?retryWrites=true&w=majority'

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