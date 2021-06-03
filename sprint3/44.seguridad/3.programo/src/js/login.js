const inputs = document.querySelectorAll("input")
const btnlogin= document.getElementById("login")
const URL_BACKEND = "http://localhost:3000"

btnlogin.addEventListener("click", ()=> {
    console.log(inputs[0].value)
    console.log(inputs[1].value)
    const data = {
        email:inputs[0].value,
        pass:inputs[1].value
    }
    login(data)
})


const login =  async (data) =>  {
    try {
        const result = await fetch(URL_BACKEND + "/login", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json =  result.json()
        return json;
    } catch (e){
        console.log("ha ocurrido un error" + e)
    }

}