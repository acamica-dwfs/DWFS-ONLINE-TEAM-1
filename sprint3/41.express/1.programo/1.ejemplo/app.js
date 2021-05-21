const express = require('express')
const moment = require('moment')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.json({ msg : "hola mundo"})
})



app.get('/hora', (req, res) => {
    const hora =  moment(new Date())
    res.json({
        message : "hola mundo",
        mihora : hora
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})