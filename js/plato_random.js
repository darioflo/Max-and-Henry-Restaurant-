import { COLOCAR_COMIDA_RANDOM } from "./colocar_comida_random.js";

const $BTN_RANDOM = document.getElementById("plato-random"),
$CONTENT_ONE = document.querySelector(".content-1");


export const COMIDA_RANDOM = () =>{
    $BTN_RANDOM.addEventListener("click",async ()=>{
        try {
            let url = "https://www.themealdb.com/api/json/v1/1/random.php"
            let res = await fetch(url)
            let json = await res.json()

            if(!res.ok) throw {Status:res.status, StatusText:res.statusText}

            console.log(json.meals)
            COLOCAR_COMIDA_RANDOM(json.meals)

        } catch (error) {
            console.log(error)
            let message = error.statusText || "Ocurrio un error durante la peticion"
            $CONTENT_ONE.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`
        }
    })
}