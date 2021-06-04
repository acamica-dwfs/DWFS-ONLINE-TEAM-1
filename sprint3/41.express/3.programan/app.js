const express = require("express");
const app = express();
const {validar, validarAdmin} = require("./middlewares/autenticacion")

const indexRouter = require('./routes');
const phoneRouter = require('./routes/telefonos');

app.use(express.json());

app.use('/', validar, indexRouter);
app.use('/telefonos', validarAdmin, phoneRouter);

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

