import { COLOCAR_COMIDA } from "./colocar_comida.js"

const $INPUT = document.getElementById("food"),
$BTN = document.getElementById("find"),
$SECCION = document.querySelector(".resultados"),
$LOADER = document.querySelector(".loader");

export const COMIDA_POR_NOMBRE = () =>{
    
    $BTN.addEventListener("click",async (e)=>{
        if($INPUT.value){
        try {
            $LOADER.style.display = "block"
            let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${$INPUT.value}`
            let res = await fetch(url)
            let json = await res.json()

            if(!res.ok) throw {Status:res.status, StatusText:res.statusText}
        
            console.log(json)
            $LOADER.style.display = "none"
            COLOCAR_COMIDA(json.meals)

        } catch (error) {
            console.log(error)
            let message = error.statusText || "Ocurrio un error durante la peticion"
            $SECCION.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`
        }
    }
    else{
        window.alert("Introduce el nombre de algun plato")
    }
})
}





















































