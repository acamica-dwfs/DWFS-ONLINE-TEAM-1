const mongose = require("./conexion");
const express = require('express');
const app = express();

const menu  =  mongose.model("plato", {
    plato : String,
    valor : Number,
    tipo_de_plato : String
})

app.post("/crear", (req, res) => {
    const {plato, valor, tipo_de_plato} = req.body
    if(!plato ||  !valor || !tipo_de_plato) {
        res.status(400).json({ status : false ,msg: "datos  flatantes"})
    }

   const  result  =  new menu(req.body);
   result.save().then( response => {
       console.log(" producto creado");
       res.status(201).json({ status : true ,  resultado  : plato})
   }).catch( e => {
       console.log( "ha ocurrido un error ");
       res.status(400).json({ status : false ,  resultado  : e})
   });
})

app.get("/listar", (req, res) => {
    menu.find().then( (resultado) => {
        console.log(resultado);
        res.status(200).json({ status : true ,  resultado  : resultado})
    });
})

app.update('/actualziar',  (req, res) => {
    const {plato, valor, id} = req.body
    if (!plato || !valor || !id) {
        return res.status(400).json({status: false, msg: "datos  flatantes"})
    }

    menu.findOne({_id: id}).then((resultado) => {
        if (!resultado) {
            return res.status(400).json({status: false, msg: "no se encuentra el plato"})
        }

        resultado.plato = plato;
        resultado.valor = valor;
        return res.status(200).json({status: false, msg: "plato modificado"})
    })
})

app.listen(3000,  () => {
    console.log('listening on 3000')
})
