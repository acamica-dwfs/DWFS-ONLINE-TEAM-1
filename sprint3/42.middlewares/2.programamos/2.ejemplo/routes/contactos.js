const express  =  require("express")
const routes = express.Router()
let constactos = require("../contactos.json").contactos

const middleware =  (req, res, next) => {
    let {id, nombre} = req.params
    console.log(id, nombre)
    if(nombre  && !isNaN(parseInt(nombre))){
        return res.status(400).json({msq: "tipo no valido  para el nombre"})
    } else if(id && isNaN(parseInt(id))){
        return res.status(400).json({msq: "tipo no valido  para el id"})
    } else {
        next()
    }
}


routes.get('/:id', middleware , (req, res) => {
   const {id} = req.params
    if(!id) res.status(400).json({msg: "id es obligatorio"})

    let contacto = constactos.find(element => element.id ===  parseInt(id))

    if (contacto === undefined ) res.status(404)

    res.status(200).json({msg: "elemento encontrado" , data : contacto})
})

routes.get('/nombre/:nombre',middleware, (req, res) => {
    const {nombre} = req.params
    if(!nombre) res.status(400).json({msg: "nombre es obligatorio"})

    let contacto = constactos.filter(element => element.nombre.includes(nombre))

    if (contacto === undefined )  {
       return res.status(404).json({msq: "item no encontrado"})
    }

    res.status(200).json({msg: "elemento encontrado" , data : contacto})
})

module.exports = routes