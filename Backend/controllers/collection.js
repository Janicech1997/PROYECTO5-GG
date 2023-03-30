const contactModel = require('../model/collection');
 // Obtener todos los elementos
 const getcontact = async() =>{
const contact = await contactModel.find({})
//  return contactModel.find({})
return contact
 }
 // Obtener un libro 
 const getcontactById = async(_id) => {
   
    //  const newContact = new contactModel(body)
    //  await newContact.save()
    //  return newContact
    return await contactModel.findOne({ _id })
 }
 //Crear 
 const createcontact = async(body) =>{
   
     const newcontact = new contactModel(body)
     await newcontact.save()
     return newcontact
 }
 // Actualizar  
 const updatecontact = async(_id, updateObject) =>{
    
     return contactModel.findOneAndUpdate({_id}, updateObject, {
         // Si es upsert es verdadero, el documento de la colección existe y si no es verdadero, entonces no hace nada.
         upsert: false,
         // Si new existe, se devuelve el documento modificado después de la actualización en lugar del original; si es falso, se devuelve el documento original.
         new: true
     })
 }
 const removecontact = async(_id) =>{
     return contactModel.findOneAndDelete({_id})
 }
 module.exports = {
     getcontact,
     getcontactById,
     createcontact,
     updatecontact,
     removecontact
 }