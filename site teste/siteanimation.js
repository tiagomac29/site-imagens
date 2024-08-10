const animationscroll = document.querySelector('[data-anima="rolagemSuave"]');

const metadeWindows = window.innerHeight * 1.3

console.log(metadeWindows)

function scrollAnimada(){
    const Emcima = animationscroll.getBoundingClientRect().top
    const ItemVisivel = Emcima - metadeWindows < 0 

    if(ItemVisivel){
        animationscroll.classList.add("mostrarBotao")
    } else {
        animationscroll.classList.remove("mostrarBotao")
    }
}

window.addEventListener("scroll", scrollAnimada);

//Função de subir

const linkSubir = document.querySelector('[data-scroll="rolagem"] a[href^="#"]')


function ScrollTop(event){
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href')

    const topoUP = document.querySelector(href)

    topoUP.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}


linkSubir.addEventListener("click", ScrollTop)
