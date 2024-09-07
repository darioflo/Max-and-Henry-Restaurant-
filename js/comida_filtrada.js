/*import { arregloInputs } from "./comida_bajo_filtro.js";

const $SECCION = document.querySelector(".resultados"),
$TEMPLATE = document.getElementById("temp-1").content,
$FRAGMENT = document.createDocumentFragment() 
let count = 0;


export const COMIDA_FILTRADA = (plato) =>{
        let $div = document.createElement("div")
        let h2 = document.createElement("h2")
        
        plato.forEach((food) => {
        $TEMPLATE.querySelector(".imagen img").src = food.strMealThumb
        $TEMPLATE.querySelector("figcaption").innerHTML = `
        <p>Nombre del plato: ${food.strMeal}</p>
        <button class="ordenar">Ordenar</button>`
        $TEMPLATE.querySelector("figure").classList.add("animate__backInUp")
        
        $FRAGMENT.appendChild($TEMPLATE.cloneNode(true))
        
});
        h2.textContent = `${arregloInputs[count].id} food:`
        count++
        $div.appendChild(h2)
        $div.appendChild($FRAGMENT)
        $div.classList.add("filtro-region")

        $SECCION.appendChild($div)
        console.log(arregloInputs)
}



*/