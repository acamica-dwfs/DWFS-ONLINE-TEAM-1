//var express = require('express');
//var app = express();
const sequelize = require('./conexion.js');

function deleteRows() {
    sequelize.query('DELETE FROM restaurant WHERE ID_RESTO = ?',
        { replacements: [3] }
    ).then(result =>{
        console.log(result)
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}

deleteRows();

//app.listen(3000, function () {
  //  console.log('Sistema armado en el puerto 3000!');
//});
