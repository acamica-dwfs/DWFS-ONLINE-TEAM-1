const sequelize = require('./conexion.js');

async function updateRow() {
    sequelize.query('UPDATE restaurant SET ADRESSE = "Bares de buenos aires" WHERE ID_RESTO = ?',
        { replacements: [5]}
    ).then(result => {
        console.log(result)
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}

updateRow();
