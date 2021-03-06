const mongoose = require('./conexion.js');
const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('listening on 3000')
})

//Creamos el modelo

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});

//Actualizamos los datos
pelicula.findOne({_id:'60c00d91dbcc7a5b1c050b29'}).then((resultado) =>{
    resultado.titulo = 'Pesadilla en la calle del infierno';
    resultado.director = 'Wes Craven';
    resultado.genero = 'Terror';
    resultado.ano = '1984';
    resultado.prueba = "mi prueba"
    resultado.save();
    console.log(resultado);
    console.log( "actualizado correctamente ");
});
