$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

const btnMenu = document.querySelector('[data-menu="button"]')
const listMenu = document.querySelector('[data-menu="list"]')

function abrirMenu(event){
  listMenu.classList.toggle('active')
  console.log("ok")
}

btnMenu.addEventListener('click', abrirMenu)