const express =  require("express")
const helmet = require("helmet");
const app  = express()
const port  = 3000
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 10 // limita cada IP a 100 solicitudes por ventanas
});

app.use(helmet())
app.use(cors())
//app.use(limiter)

app.disable('x-powered-by')

//app.use(limiter);
app.get('/prueba', (req, res) => {
    res.status(200).json({msg: "hola acamica"})
})
app.get('/acamica', limiter, (req, res) => {
    res.send(200, 'ok')
})

app.listen(port, ()=> {
    console.log("iniciando aplicacion en el puerto"+ port)
})