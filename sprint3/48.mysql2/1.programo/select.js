
const sequelize = require('./conexion.js');

 function selectRows() {
    sequelize.query("SELECT * FROM restaurant limit 3", { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
        }).catch( e => {
            console.log("error  en la insercion " + e)
        })
}

selectRows();
