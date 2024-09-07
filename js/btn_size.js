const $BTN_SIZE = document.getElementById("size"),
$MENU_LATERAL = document.querySelector(".menu-lateral");

let click = 0

export const BTN_SIZE = () =>{
    $BTN_SIZE.addEventListener("click",()=>{
        $MENU_LATERAL.style.transition = "height .5s ease"
        $MENU_LATERAL.style.height = "140vh"
        $BTN_SIZE.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/></svg>'
        click++
    
        if(click > 1){
            $MENU_LATERAL.style.transition = "height .5s ease"
            $MENU_LATERAL.style.height = "9vh"
            $BTN_SIZE.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/> </svg>'
            click = 0
            }
        })
}
