

const prueba  = () => {
//Hola Mundo
    console.log("Hola Mundo");


//Creamos un array de frutas
    var Lang = ['Pera', 'Banana', 'Limones'];

//muestro las frutas
    console.table(Lang);

    Lang.map( element  => console.log(element))

//verificamos cuantos items tiene el array
    var cant = Lang.length
    console.log(cant);

//Buscamos la fruta que esta antes de Banana

    var found = Lang.find(element => element > 'Banana');
    console.log(found);
}

prueba()