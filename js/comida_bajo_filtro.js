const $INPUTS = document.querySelectorAll("div input[type='checkbox']"),
$INPUTS_REGION = Array.from(document.querySelectorAll(".region input[type='checkbox']")),
$INPUTS_INGREDIENTE = Array.from(document.querySelectorAll(".ingrediente input[type='checkbox']")),
$INPUTS_CATEGORIA = Array.from(document.querySelectorAll(".categoria input[type='checkbox']")),
$SECCION = document.querySelector(".resultados"),
$LOADER = document.querySelector(".loader"),
$TEMPLATE = document.getElementById("temp-1").content,
$FRAGMENT = document.createDocumentFragment(), 
$BTN = document.querySelector(".proof");

/*export const arregloInputs = []

export const COMIDA_BAJO_FILTRO = () =>{
    
    $INPUTS.forEach((input)=>{
        if(input.checked) arregloInputs.push(input)
    })
    arregloInputs.forEach(async (input)=>{
        try {
            $LOADER.style.display = "block"
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${input.id}`
            let res = await fetch(url)
            let json = await res.json()
    
            if(!res.ok) throw {Status:res.status, StatusText:res.statusText}
            
            $LOADER.style.display = "none"

            COMIDA_FILTRADA(json.meals)

        } catch (error) {
            console.log(error)
            let message = error.statusText || "Ocurrio un error durante la peticion"
            $SECCION.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`
            }
        })
}*/

/*let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${input.id}`,
url_2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.id}`,
url_3 =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${input.id}`*/

/*export const COMIDA_BAJO_FILTRO = () =>{
$INPUTS.forEach(async (input)=>{
    if(input.checked) {
            $SECCION.innerHTML = ""
            console.log(input)
            
        try {
            $LOADER.style.display = "block"
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${input.id}`
            let res = await fetch(url)
            let json = await res.json()
                
            if(!res.ok) throw {Status:res.status, StatusText:res.statusText}
                
            $LOADER.style.display = "none"
            let plato = json.meals
                
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
        h2.textContent = `${input.id} food:`
        $div.appendChild(h2)
        $div.appendChild($FRAGMENT)
        $div.classList.add("filtro-region")

    $SECCION.appendChild($div)
} catch (error) {
            console.log(error)
            let message = error.statusText || "Ocurrio un error durante la peticion"
            $SECCION.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`
        }
    }
})
}*/


export const COMIDA_BAJO_FILTRO = () => {

$BTN.addEventListener("click",()=>{        
        $INPUTS.forEach(async (input) => {
            if (input.checked) {
                let url;
                switch (true) {
                    case $INPUTS_REGION.includes(input):
                        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${input.id}`;
                        break;
                    case $INPUTS_INGREDIENTE.includes(input):
                        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.id}`;
                        break;
                    case $INPUTS_CATEGORIA.includes(input):
                        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${input.id}`;
                        break;
                }
                $SECCION.innerHTML = ""
            try {
                let res = await fetch(url);
                let json = await res.json();
                
                if (!res.ok) throw { Status: res.status, StatusText: res.statusText };
                    
                let plato = json.meals;
                let $div = document.createElement("div");
                let h2 = document.createElement("h2");
            plato.forEach((food) => {
                $TEMPLATE.querySelector(".imagen img").src = food.strMealThumb;
                $TEMPLATE.querySelector("figcaption").innerHTML = `
                    <p>Nombre del plato: ${food.strMeal}</p>
                    <a class="enlace" href=""><img src="./assets/icons8-comida-de-mushbooh-30.png" alt=""></a>`;
                $TEMPLATE.querySelector("figure").classList.add("animate__backInUp");
                $FRAGMENT.appendChild($TEMPLATE.cloneNode(true));
    });
            h2.textContent = `${input.id} dishes:`;
            $div.appendChild(h2);
            $div.appendChild($FRAGMENT);
            $div.classList.add("filtro-region");
            $SECCION.appendChild($div);
        } catch (error) {
            console.log(error);
            let message = error.statusText || "Ocurrió un error durante la petición";
            $SECCION.innerHTML = `<p><b>Error ${error.status}: ${message}</b></p>`;
            }
        }
    });
    })
};

























































