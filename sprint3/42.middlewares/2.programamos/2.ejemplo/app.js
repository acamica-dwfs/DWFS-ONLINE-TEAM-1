const  express = require("express")
const app =  express()
const port = 5000


const routeContact = require("./routes/contactos")


app.use("/contactos", routeContact)

app.listen(port, () => {
    console.log("api  funcionando en el puerto " + port)
})