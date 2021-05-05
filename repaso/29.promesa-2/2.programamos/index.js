 // GET
 const URL = 'https://pokeapi.co/api/v2/pokemon/'
let pokemon_uno =  fetch(URL + 22)
let pokemon_dos =   fetch(URL + 23)
let pokemon_tres =   fetch(URL + 24)
 let divPadre = document.getElementById('pokeCtn')
// foreach vs map
 Promise.all([pokemon_uno, pokemon_dos, pokemon_tres]).then(data => {
     data.forEach( element => {
          element.json().then(json => {
              construirDOM(json)
          })
      })
 }).catch(e => {
     console.log(e)
 })


 const construirDOM = (data)  => {
     if(!data)  return;

     let divHijo =  document.createElement("div")
     let url = data.sprites.front_default
     let divIMG = document.createElement("img")
     let title = document.createElement("h1")
     title.textContent = "pokemon #" +data.id
     divIMG.src = url
     divHijo.appendChild(title)
     divHijo.appendChild(divIMG)
     divPadre.appendChild(divHijo)
 }