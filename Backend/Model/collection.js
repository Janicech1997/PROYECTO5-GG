const mongoose = require('mongoose')
const { Schema } = mongoose


const contactSchema = new Schema({
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

const contactModel = mongoose.model('contact', contactSchema)

module.exports = contactModel