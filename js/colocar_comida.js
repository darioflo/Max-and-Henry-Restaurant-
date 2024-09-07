
const $SECCION = document.querySelector(".resultados"),
$TEMPLATE = document.getElementById("temp-1").content,
$FRAGMENT = document.createDocumentFragment() 

export const COLOCAR_COMIDA = (plato) =>{
        $SECCION.innerHTML = ""

        plato.forEach((food) => {
        $TEMPLATE.querySelector("figure").classList.add("animate__backInUp")
        $TEMPLATE.querySelector(".imagen img").src = food.strMealThumb
        $TEMPLATE.querySelector("figcaption").innerHTML = `
        <p>Nombre del plato: ${food.strMeal}</p>
        <p>Region: ${food.strArea}</p>
        <p>Categoria: ${food.strCategory}</p>
        <button class="ordenar">Ordenar</button>`
        
        let clone = document.importNode($TEMPLATE,true)
        $FRAGMENT.appendChild(clone)
        });

        $SECCION.appendChild($FRAGMENT)
}