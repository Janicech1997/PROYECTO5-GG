const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    },{
        timestamps: true
})

const userModel = mongoose.model('usuarios', userSchema)

module.exports = userModel