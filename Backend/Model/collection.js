const mongoose = require('mongoose')
const {Schema} = mongoose

const registroSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required:true
    }
},{
    versionKey: false,
    timestamps: true
})

const registroModel = mongoose.model('register', registroSchema)

module.exports = registroModel