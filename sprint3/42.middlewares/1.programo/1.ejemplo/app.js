const express = require("express");
const app  = express();
const port = 3000;
app.use(express.json())


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

app.use(middlewareGlobal)

const middlewareEspecifico =  (req, res, next) => {
    console.log("middleware especifico")
    const {admin} =  req.body
    if(!admin){
       return  res.status(403).send({ status :  false ,  msg : "usuario no es admin"})
    }
    next()
}

app.get('/', (req, res) => {
    res.send(" hola acamica");
})

app.post('/acamica', middlewareEspecifico, (req, res) => {
    const {user} =  req.body
    res.json({msg: "bienvenido a DWFS " + user})
})

app.listen(port , () => {
    console.log("iniciando servidor en el puerto : " + port);
})



 // GET  --> http://localhost/acamica?usuario=yulian&constrasena=1234  -->  req.query
 // POST -> http://localhost/acamica                       ->  req.body
 // GET ->  http://localhost/telefono/12                   -> req.params
