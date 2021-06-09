const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});


//Elimino  los datos del id 5efa54e6beaaeb0474d496ef
pelicula.deleteOne({ _id: '60c00fb1d541185e6fd4ddf8' }).then(function (resp, error) {
    console.log(resp);
    console.log(error);
}).catch(e => {
    console.log("ha ocurrido un error" + e)
});
