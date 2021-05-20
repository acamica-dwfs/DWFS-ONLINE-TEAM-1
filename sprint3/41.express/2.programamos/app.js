const  express = require("express")
const app =  express()
const PORT = 5000
app.use(express.json())

let  telefonos = require("./telefonos.json")

//  obtener  la lista de telefonos
app.get('/telefono', (req, res) => {
    res.status(200).json(telefonos)
})

app.post('/telefono', (req, res) => {
    const {id, marca , modelo, pantalla, sistema_operativo}  = req.body
    if(!id || !marca || !modelo || !pantalla  || !sistema_operativo ) {
        return res.status(400).json({msq: " datos faltantes"})
    }

    telefonos.push(req.body)
    res.status(201).json({msq: "telefono creado" , data:telefonos})
})

app.listen( PORT, () => {
    console.log(" funcionando la app")
})