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


