const $SECCIONES = document.querySelectorAll("section"),
    $MENU_LATERAL = document.querySelector(".menu-lateral"),
    $BUSCAR = document.querySelector(".buscar");


const OBSERVADOR = new IntersectionObserver((secciones) => {
    secciones.forEach((seccion) => {
        if (seccion.target.id === "s2" && seccion.isIntersecting) {
            $MENU_LATERAL.classList.add("animate__bounceInLeft")
            $BUSCAR.classList.add("animate__bounceInRight")
        }

        else {
            let time = setTimeout(() => {
                $MENU_LATERAL.classList.remove("animate__bounceInLeft")
                $BUSCAR.classList.remove("animate__bounceInRight")
            }, 1000)

            time
        }
    })
}, { threshold: 0.10 })


const $TEXTO = document.querySelector(".texto-fijo")

const OBSERVADOR_TWO = new IntersectionObserver((secciones) => {
    secciones.forEach((seccion) => {
        if (seccion.target.id === "s4" && seccion.isIntersecting) {
            $TEXTO.classList.add("animate__zoomInDown")
        }

        else {
            let time = setTimeout(() => {
                $TEXTO.classList.remove("animate__zoomInDown")
            }, 1000)

            time
        }
    })
}, { threshold: 0.20 })


const $DIV_ABSOLUTE = document.querySelector(".absolute"),
    $DIV_ABSOLUTE_TWO = document.querySelector(".absolute-2");


const OBSERVADOR_THREE = new IntersectionObserver((secciones) => {
    secciones.forEach((seccion) => {
        if (seccion.target.id === "s3" && seccion.isIntersecting) {
            $DIV_ABSOLUTE.classList.add("animate__backInRight")
            $DIV_ABSOLUTE_TWO.classList.add("animate__backInLeft")
        }

        else {
            let time = setTimeout(() => {
                $DIV_ABSOLUTE.classList.remove("animate__backInRight")
                $DIV_ABSOLUTE_TWO.classList.remove("animate__backInLeft")
            }, 1000)

            time
        }
    })
}, { threshold: 0.40 })


export const INTERSECTION_OBSERVER = () => {
    $SECCIONES.forEach((seccion) => {
        OBSERVADOR.observe(seccion)
    })
}

export const INTERSECTION_OBSERVER_TWO = () => {
    $SECCIONES.forEach((seccion) => {
        OBSERVADOR_TWO.observe(seccion)
    })
}

export const INTERSECTION_OBSERVER_THREE = () => {
    $SECCIONES.forEach((seccion) => {
        OBSERVADOR_THREE.observe(seccion)
    })
}