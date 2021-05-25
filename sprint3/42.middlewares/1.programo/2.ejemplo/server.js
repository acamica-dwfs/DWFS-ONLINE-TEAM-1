const express = require("express");
const server = express();
const datos = require("./alumnos.json").alumnos;
const port = 3000;
server.use(express.json());


const middlewareGlobal = (req, res, next) => {
    console.log(
        `La solicitud del recurso: ${req.path} acaba de pasar por middleware GLOBAL`
    );
    next();
};

server.use(middlewareGlobal)


const middlewareEspecifico = (req, res, next) => {
    console.log(
        `Middleware solo un  para recurso: ${req.path}`
    );
    // Destructuring
    console.log(req.query);
    const { user } = req.query;
    if(!user)  res.status(400).json({ message: "  datos no validos"})
    const userTrimmed = user.trim();
    if (userTrimmed !== "acamica") {
        console.log("Usuario inválido");
        res.status(403).json({ message: "Unauthorized" });
    }
    next();
};

server.get("/", (req, res) => {
    res.json("api acamica");
});

//Muestra todos los estudiantes
server.get("/acamica/alumnos/", middlewareEspecifico, (req, res) => {
    res.json(datos);
});

server.listen(port, () => {
    console.log("Servidor iniciado en el puerto: " + port);
});

