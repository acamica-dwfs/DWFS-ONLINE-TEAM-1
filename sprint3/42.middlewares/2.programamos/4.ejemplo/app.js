const express = require("express")
const app = express()
const port  = 4000
let alumnos =  require("./contactos.json").contactos

app.use(express.json())

const validarGet = (req, res, next) => {
    const{id} = req.query
    if(!id || isNaN(id)) return  res.status(400).json({msg: "id debe ser numerico o no existe"})
    next()
}

app.get("/alumno",validarGet,  (req, res) => {
    const{id} = req.query

    const persona = alumnos.find(item => item.id ===  parseInt(id))
    if(!persona){
        return res.status(400).json({msg: "persona no encontrada"})
    }

    res.status(200).json({msg: "usuario encontrado", data : persona})
})


app.listen(port , () =>{
    console.log("iniciando aplciacion")
})