const input  =  document.getElementById("search")
const boton = document.getElementById("searchBtn")
const  result  = document.getElementById("results")
const apiKey = '1c67ae33adc312d33476ae4d68a09beb';
const loading = document.getElementsByName("loading");
loading[0].style.display = "none" // TODO :  a futuro agregar al css

boton.addEventListener("click", (event) => {
      search(input.value)
})

const search =  async  (city) => {
    try {
        loading[0].style.display = "block"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(url) //stop
        let json = await response.json()
        addDOM(json)
        loading[0].style.display = "none"
    } catch (e) {
        loading[0].style.display = "none"
        console.log(e)
    }
}

const addDOM =  (data) => {
    let  text = `'Clima: ${data.weather[0].main}, Temperatura:  ${data.main.temp} °K`
    result.textContent = text
}

