const $CONTENT_ONE = document.querySelector(".content-1");

export const COLOCAR_COMIDA_RANDOM = (plato) =>{
        plato.forEach((dato) => {
            $CONTENT_ONE.querySelector("h2").textContent = dato.strMeal;
            $CONTENT_ONE.querySelector("img").src = dato.strMealThumb;
            $CONTENT_ONE.querySelector(".region-random").textContent = dato.strArea;
            $CONTENT_ONE.querySelector(".category-random").textContent = dato.strCategory;
        });
        $CONTENT_ONE.style.display = "block"
        $CONTENT_ONE.classList.add("animate__backInRight")
}