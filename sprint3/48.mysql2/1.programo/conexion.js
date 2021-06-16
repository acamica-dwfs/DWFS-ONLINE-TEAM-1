const Sequelize = require('sequelize');
//const path = 'mysql://USER:PASSWORD@localhost:3306/DATABASE';
const path = 'mysql://acamica:acamica123@localhost:3306/resto';
const sequelize = new Sequelize(path, {
    operatorsAliases: false ,
    logging: true,
});

// Genero la conexión
sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
})

// exportamos la conexion
module.exports = sequelize;
