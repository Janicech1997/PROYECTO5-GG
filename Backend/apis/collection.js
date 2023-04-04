const express = require('express')
const router = express.Router()
const  {formularioController} = require('../controllers')
const {
    getFormulario,
    createFormulario,
    getByIDFormulario,
    updateFormulario,
    removeFormulario
} = formularioController

router.get('/', async(req,res)=>{
    const formulario = await getFormulario()
    res.send(formulario)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const formulario = await getByIDFormulario(id)
  
    // para no hacer product === null, product === undefined, typeof product ...
    if (!formulario) {
      res.status(404)
      return res.send({
        message: `Usuario: ${id} no encontrado`
      })
    }
  
    return res.send(formulario)
  })
  
router.post('/', async(req,res)=>{
    const body = req.body
   try{
    const newFormulario = await createFormulario(body)
    res.send(newFormulario)
   } catch(err){
    console.error(err)
   }
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const body = req.body
    const formulario = await updateFormulario(id ,body)
    if(!granja){
        return res.send({
            message: `Usuario con ${id} no encontrado `
        })
    }
    res.send(formulario)
})

router.delete('/:id', async(req,res)=>{
const {id} = req.params
const result = await removeFormulario(id)

res.send(result)
})

module.exports = router