const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const telefonos = require("./autos.json"); // importando los datos en telefono.json

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

app.get("/telefonos", (req, res) => {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Listado de Telefonos',
        respuesta: telefonos
    };
    res.status(200).send(respuesta);
});

//Creamos el metodo Post para crear un nuevo telefono
app.post('/telefonos',  (req, res)  =>{
    console.log(req.body.nombre);
    if (!req.body.marca || !req.body.modelo) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {
           let  body  =  req.body;
            celular = {
                marca: body.marca,
                modelo: body.modelo,
                pantalla: body.pantalla,
                sistema_operativo: body.sistema_operativo,
            };
            telefonos.push(celular);
            respuesta = {
                error: false,
                codigo: 201,
                mensaje: 'celular creado',
                respuesta: celular
            };
    }
    //Imrpimimos respuesta
    res.status(201).send(respuesta);
});

app.put("/telefonos/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let  buscador  =  telefonos.filter( elementos =>  elementos.id === id);
    buscador[0].modelo  =  buscador[0].modelo +" acamica";
    res.status(200).send( {respuesta : "ok", id : buscador});
});

app.use((req, res, next)  =>{
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
