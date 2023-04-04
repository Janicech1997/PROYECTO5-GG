const mongoose = require('mongoose')
const { Schema } = mongoose


const registroSchema = new Schema({
    Nombre:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Asunto:{
        type:String,
        required:true
    },
    Mensaje:{
        type:String,
        required:true
    }
})

const registroModel = mongoose.model('registro', registroSchema)

module.exports = registroModel