const express =  require("express")
const helmet = require("helmet");
const cors = require('cors')
const app  = express()
const port  = 3000
app.use(cors())

app.post('/login', (req, res) => {
  // validacion
   res.status(200).json({msg: "login correcto"})
})

app.post('/registro', (req, res) => {
    // validacion
    res.status(200).json({msg: "usuario creado"})
})


app.listen(port, ()=> {
    console.log("iniciando aplicacion en el puerto"+ port)
})