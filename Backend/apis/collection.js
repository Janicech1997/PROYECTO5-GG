const express = require('express')
const router  = express.Router();
const { contactController} = require('../controllers')
const {  getcontact,
    getcontactById,
    updatecontact,
    createcontact,
    removecontact} = contactController
router.get('/', async(req,res)=> {
    const contact = await getcontact();
    res.send(contact)
})

router.get('/:id', async(req,res)=>{
    const {id} = req.params
    const contact = await getcontactById(id)
    if(!contact){
        res.status(404)
        return res.send({
            message: `No se encontro el elemento con id: ${id} :(`
        })
    }
    return res.send(contact)
})

router.post('/', async(req,res)=>{
    const body = req.body;
    try{
        const newcontact = await createcontact(body)
        console.log(newcontact)
        res.send(newcontact)    
    } 
    catch(err) {
        console.error(err)
    }
})

router.put('/:id', async(req,res) =>{
    const {id} = req.params
    const body = req.body
    const contact = await updatecontact(id, body)
    if(!contact) {
        res.status(404)
        return res.send({
            message: `No se encontro el elemento con id: ${id} :(`
        })
    }
    return res.send(contact)
})
router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    const resultado = await removecontact(id)
    res.send(resultado)
  
})

module.exports = router