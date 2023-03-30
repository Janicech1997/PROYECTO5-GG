const mongoose = require('mongoose')
const { Schema } = mongoose

// const bookSchema = new Schema({
//     titulo: {
//         type: String,
//         required: true
//     },
//     autor: {
//         type: String,
//         required: true
//     },
//     año: {
//         type: Number,
//         required: false
//     }
// })

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