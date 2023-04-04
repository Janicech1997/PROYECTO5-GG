const formularioModel = require('../model/collection')

const getFormulario = async()=>{
    return formularioModel.find({})
}

const getByIDFormulario = async(_id) =>{
     return formularioModel.findOne({_id})
 }

const createFormulario = async(body) =>{
const newFormulario = new formularioModel(body)
await newFormulario.save()
return newFormulario
}

const updateFormulario = async(_id, updateObject) =>{
    return formularioModel.findOneAndUpdate({_id}, updateObject,{
        upsert: false, 
        new: true
    })
}

const removeFormulario = async(_id) =>{
    return formularioModel.findByIdAndDelete({_id})
}

module.exports = {
    getFormulario,
   getByIDFormulario,
    createFormulario,
    updateFormulario,
    removeFormulario
}