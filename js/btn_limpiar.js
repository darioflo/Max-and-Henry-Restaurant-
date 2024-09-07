const $BTN_LIMPIAR = document.querySelector(".limpiar"),
$SECCION = document.querySelector(".resultados")

export const BTN_LIMPIAR = () =>{
    $BTN_LIMPIAR.addEventListener("click",()=>{
        if (document.querySelector("figure")) {
            let figures = document.querySelectorAll("figure")
    
            figures.forEach((figure)=>{
                figure.classList.remove("animate__backInUp")
                figure.classList.add("animate__backOutRight")
            })
            let time = setTimeout(() => {
                $SECCION.innerHTML = "";
            }, 500);
    
            time
        }
        else{
            window.alert("No hay nada que limpiar")
        }
    })
    
}