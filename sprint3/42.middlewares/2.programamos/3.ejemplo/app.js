const express  = require("express")
const app = express()
const port = 5000
let contactos =  require("./contactos.json").contactos

const  middlewareGlobal = (req, res, next) => {
    const {id} =  req.params
    if(!id || isNaN(parseInt(id))){
        return res.status(400).json({msg: "dato invalido"})
    }
    next()
}
//app.use(middlewareGlobal)

app.get('/:id',middlewareGlobal, (req, res) => {
    const {id} =  req.params
    const contacto = contactos.find(element => element.id ===  parseInt(id))
    console.log(contacto)
    if(!contacto){
        return res.status(404).json({msg: "usuario no  encontrado"})
    }
    return res.status(200).json({msg: "usuario encontrado" , data : contacto})
})

app.listen(port, () => {
    console.log("aplicacion funcionando en el puerto " + port)
})



// GET  --> http://localhost/acamica?usuario=yulian&constrasena=1234  -->  req.query
// POST -> http://localhost/acamica     -> body = {user: andres}     ->  req.body -->> app.use(express.json())
// GET ->  http://localhost/telefono/12                   -> req.params
