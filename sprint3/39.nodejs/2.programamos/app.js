
const hobbies =  [ "caminar", "leer", "cocinar", "comer", "dormir"]

const hobbiesFun =  (data) =>  {
    console.log(data)
}

hobbies.forEach(element =>  {
    hobbiesFun(element)
})

let  elementos = hobbies.map(element => element > "leer")

let  preuba = hobbies.map(element => {
    element =  element + " acamica"
   return  element > "leer"
})
console.log("prueba")
console.log(elementos)


