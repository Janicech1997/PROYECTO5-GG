const registroModel = require('../model/collection');
 // Obtener todos los elementos
 const getRegistro = async() =>{
const contact = await registroModel.find({})
//  return contactModel.find({})
return registro
 }
 // Obtener un libro 
 const getregistroById = async(_id) => {
   
    //  const newContact = new contactModel(body)
    //  await newContact.save()
    //  return newContact
    return await registroModel.findOne({ _id })
 }
 //Crear 
 const createRegistro = async(body) =>{
   
     const newRegistro = new registroModel(body)
     await newRegistro.save()
     return newRegistro
 }
 // Actualizar  
 const updateRegistro = async(_id, updateObject) =>{
    
     return registroModel.findOneAndUpdate({_id}, updateObject, {
         // Si es upsert es verdadero, el documento de la colección existe y si no es verdadero, entonces no hace nada.
         upsert: false,
         // Si new existe, se devuelve el documento modificado después de la actualización en lugar del original; si es falso, se devuelve el documento original.
         new: true
     })
 }
 const removeRegistro = async(_id) =>{
     return registroModel.findOneAndDelete({_id})
 }
 module.exports = {
     getRegistro,
     getregistroById,
     createRegistro,
     updateRegistro,
     removeRegistro
 }