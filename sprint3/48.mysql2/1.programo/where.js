//var express = require('express');
//var app = express();
const sequelize = require('./conexion');

 function selectWhereRows() {
      sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
        { replacements: ['Cocotte2'], type: sequelize.QueryTypes.SELECT }
    ).then(function (projects) {
        console.log(" datos encontrados:")
        console.log(projects)
        return projects;
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}
selectWhereRows()


/*
app.get( "/productos",    (req, res) => {
      sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
          { replacements: ['test 1'], type: sequelize.QueryTypes.SELECT }
      ).then(function (projects) {
          console.log(" datos encontrados:")
          console.log(projects)
           res.status(200).json({ body: result})
      }).catch( e => {
          console.log("error  en la insercion " + e)
           res.status(400).json({  status: false})
      })
})*/

/*
app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});*/
