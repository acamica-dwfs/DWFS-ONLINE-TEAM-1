const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

        // ruta ,  request,  response
app.get('/acamica', (req, res) => {
    //res.send('Hello World!')
    res.status(200).json({ msq: "hola acamica  tale 2"})
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
