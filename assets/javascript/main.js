const buyTicketsButtons = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

const mobileMenu = document.querySelector('.js-mobile-menu')
const header = document.getElementById('header')
var curHeight = header.clientHeight
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')

mobileMenu.addEventListener('click', function (){
    if (curHeight === header.clientHeight) {
        header.style.height = '230px'
    }
    else {
        header.style.height = null
    }
})

for (const menuItem of menuItems) {
    menuItem.addEventListener('click', function (){
        header.style.height = null
    })
}

function openModal() {
    modal.classList.add('modal-open')
}

function closeModal() {
    modal.classList.remove('modal-open')
}

for (const button of buyTicketsButtons) {
    button.addEventListener('click', openModal)
}

modalClose.addEventListener('click', closeModal)

modal.addEventListener('click', closeModal)

modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
})

