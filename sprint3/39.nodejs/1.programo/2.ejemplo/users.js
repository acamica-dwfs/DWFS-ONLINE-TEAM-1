const User = require('./user_module.js');  //  importacion del modulo  o libreria   import
const person = new User(); //  declaro el objeto
const person_dos = new User(); //  declaro el objeto

//Inprimo objeto completo
console.log(person);

//Imprimo propiedad
console.log(person_dos.nombre);
console.log(person.nombre);
console.log(person.telefono);

//Ejecuto metodo
console.log(person.fullname());
