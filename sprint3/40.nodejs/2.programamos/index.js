//usamos  moment
const moment = require('moment');

//fecha actual
const now = moment(new Date());
//fecha utc
const utc = moment(new Date()).utc();

//Muestro ambas fechas
console.log(now.format('DD MM YYYY hh:mm:ss'));
console.log(utc.format('DD MM YYYY hh:mm:ss'));

const duration = moment(utc.diff(now));
const  duration2 =  moment(now.diff(utc));

//Calculamos la diferencia en horas
console.log('Cantidad de horas  --> '+duration.hours());
console.log('Cantidad de horas :::: '+duration2.hours());
