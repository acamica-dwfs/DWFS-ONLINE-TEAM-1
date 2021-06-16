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

