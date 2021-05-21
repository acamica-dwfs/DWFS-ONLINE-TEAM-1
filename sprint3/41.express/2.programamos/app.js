const express =  require("express")
const app =  express()
const port  = 5000
const telefonos = require("./telefonos.json")

app.use(express.json()) // la funcionalidad para obtener json => middleware


app.get("/telefonos", (req, res) => {
    res.json({msg: "consulta exitosa", data: telefonos})
})

app.post("/telefonos" , (req, res) => {
    const {id, marca, modelo, pantalla, sistema_operativo} = req.body
    /** No hacer
     const id = req.body.id
     const marca = req.body.marca
     ......
     */

    // validacion de datos
    if(!id || !marca || !modelo || !pantalla || !sistema_operativo){
       return res.status(400).json({msg: "datos faltantes"})
    }
    let  existe  = telefonos.find( elementos => elementos.id ===  id)
    if(existe) {
        return  res.status(400).json({msg: "ya existe el telefono"})
    }


 //   const objecto = { modelo, pantalla}

    telefonos.push(req.body)

    res.status(201).json({msg: "telefono ingresado correctamente", data : telefonos, status: 201} )
})

app.post("/telefonos/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let  buscador  =  telefonos.filter( elementos =>  elementos.id === id);
    buscador[0].modelo  =  buscador[0].modelo +" acamica";
    res.status(200).send( {respuesta : "ok", id : buscador});
});


// lccalhost => 127.0.0.1
app.listen(port, () => {
    console.log("app iniciada en el puerto " + port)
})