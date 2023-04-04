const registroModel = require('../model/collection')

const getRegistro = async()=>{
    return registroModel.find({})
}

const getByIDRegistro = async(_id) =>{
     return registroModel.findOne({_id})
 }

const createRegistro = async(body) =>{
const newRegistro = new registroModel(body)
await newRegistro.save()
return newRegistro
}

const updateRegistro = async(_id, updateObject) =>{
    return registroModel.findOneAndUpdate({_id}, updateObject,{
        upsert: false, 
        new: true
    })
}

const removeRegistro = async(_id) =>{
    return registroModel.findByIdAndDelete({_id})
}

module.exports = {
    getRegistro,
   getByIDRegistro,
    createRegistro,
    updateRegistro,
    removeRegistro
}