const sequelize = require('./conexion.js');

function insertRows() {

    let array_insert = [ '1', 'Cocotte', 'test 1', 'test 1', 'Prueba', 'Foto.jpg', '2020-07-22 00:00:00', '1'];

    sequelize.query('INSERT INTO`restaurant`(`ID_USER`, `NOM_RESTO`, `ADRESSE`, `TELEPHONE`, `DESCRIPTIF`, `IMAGE`,' +
        ' `DATE_DERNIERE_MODIF`, `ACTIF`) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)  ',
        { replacements: array_insert, type: sequelize.QueryTypes.INSERT }
    ).then( (projects) => { // la respuesta
        console.log("he insertado el registro con exito")
        console.log(projects)
    }).catch( e => {
        console.log("error  en la insercion " + e)
    })
}

insertRows();
