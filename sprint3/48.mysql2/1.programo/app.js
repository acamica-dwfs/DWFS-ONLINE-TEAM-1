const express = require('express');
const app = express();
const sequelize = require('./conexion');

app.get( "/productos",    (req, res) => {
      const {name} = req.query
      sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
          { replacements: [name], type: sequelize.QueryTypes.SELECT }
      ).then(function (projects) {
          console.log(" datos encontrados:")
           res.status(200).json({ result : projects})
      }).catch( e => {
          console.log("error  en la insercion " + e)
           res.status(400).json({  status: false})
      })
})

app.get( "/product", async  (req, res)  => {
    try {
        const {name} = req.query
        const projects = await sequelize.query('SELECT * FROM restaurant WHERE NOM_RESTO = ?',
            { replacements: [name], type: sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({ result : projects})
    } catch(e){
        console.log(e)
        res.status(400).json({  status: false})
    }
})

app.get( "/allproducts", async  (req, res)  => {
    try {
        const projects = await sequelize.query('SELECT * FROM restaurant ',
            {  type: sequelize.QueryTypes.SELECT }
        );
        res.status(200).json({ result : projects})
    } catch(e){
        console.log(e)
        res.status(400).json({  status: false})
    }
})


app.listen(3000, () => {
    console.log('Sistema armado en el puerto 3000!');
});
