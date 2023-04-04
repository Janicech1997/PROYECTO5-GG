const express = require('express')
const router  = express.Router();
const { registroController} = require('../controllers')
const {  getRegistro,
    getregistroById,
    updateRegistro,
    createRegistro,
    removeRegistro} = registroController
router.get('/', async(req,res)=> {
    const registro = await getRegistro();
    res.send(registro)
})

router.get('/:id', async(req,res)=>{
    const {id} = req.params
    const registro = await getregistroById(id)
    if(!registro){
        res.status(404)
        return res.send({
            message: `No se encontro el elemento con id: ${id} :(`
        })
    }
    return res.send(registro)
})

router.post('/', async(req,res)=>{
    const body = req.body;
    try{
        const newRegistro = await createRegistro(body)
        console.log(newRegistro)
        res.send(newRegistro)    
    } 
    catch(err) {
        console.error(err)
    }
})

router.put('/:id', async(req,res) =>{
    const {id} = req.params
    const body = req.body
    const registro = await updateRegistro(id, body)
    if(!registro) {
        res.status(404)
        return res.send({
            message: `No se encontro el elemento con id: ${id} :(`
        })
    }
    return res.send(registro)
})
router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    const resultado = await removeRegistro(id)
    res.send(resultado)
  
})

module.exports = router