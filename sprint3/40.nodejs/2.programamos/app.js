const moment = require('moment');

console.log("horario local")

const local = moment(new Date())
console.log(local.format())

console.log(" utc")
const utc = moment(new Date()).utc()
console.log("Horario UTC: " + utc.format());

console.log("diferencia")
const diferencia  = moment.duration(local.diff(utc))
console.log(diferencia.asHours())

if(local > utc) {
    console.log("local es mayor a utc")
}else {
    console.log("local es menor a utc")
}




