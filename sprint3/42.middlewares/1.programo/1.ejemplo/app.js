const express = require("express");
const app  = express();
const port = 3000;

/**
 *  validar el usuario
 */
const middlewareGlobal =  (req, res, next) => {
    let {usuario, password} =  req.query;
    console.log(req.query)
    if(usuario !== 'yaz' || password !== '12345' ){
        res.status(403).send({ status :  false ,  msg : "login  incorrecto"})
    } else {
        next();
    }
}

const middlewareEspefico = (req, res, next) => {
    console.log(" hola, como estan  ?");
    next();
}

app.get('/login',middlewareEspefico, (req, res) => {
    res.send("middlewareEspefico   prueba")
})

app.get('/prueba',middlewareEspefico, (req, res) => {
    res.send("middlewareEspefico   prueba 2")
})

app.use(middlewareGlobal); //  global

app.get('/', (req, res) => {
    res.send(" hola acamica");
})

app.listen(port , () => {
    console.log("iniciando servidor en el puerto : " + port);
})



 // GET  --> http://localhost/acamica?usuario=yulian&constrasena=1234  -->  req.query
 // POST -> http://localhost/acamica                       ->  req.body
 // GET ->  http://localhost/telefono/12                   -> req.params
