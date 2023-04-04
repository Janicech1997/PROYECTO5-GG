const mongoose = require('mongoose')
const {Schema} = mongoose

const formularioSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

const formularioModel = mongoose.model('formulario', formularioSchema)

module.exports = formularioModel