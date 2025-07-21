const buyTicketsButtons = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const jsOverlay = document.querySelector('.js-overlay')

const mobileMenu = document.querySelector('.js-mobile-menu')
const header = document.getElementById('header')
var curHeight = header.clientHeight
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')
const navFirstChild = document.querySelector('.js-nav-fchild')

// open mobile menu
mobileMenu.addEventListener('click', function (){
    header.classList.toggle('expand');
    jsOverlay.classList.toggle('overlay-on')
    if (header.classList.contains('sub-menu-expand')) {
        header.classList.remove('sub-menu-expand')
    }
})

jsOverlay.addEventListener('click', function (){
    header.classList.toggle('expand');
    jsOverlay.classList.toggle('overlay-on')
})

// Home mobile menu fix 
const resizeObserver = new ResizeObserver(() => {
    if (header.clientHeight === curHeight) {
        navFirstChild.style.display = 'inline-block'
    } else {
        navFirstChild.style.display = 'block'
    }
})
resizeObserver.observe(header)

// close mobile menu when click on menu items
for (const menuItem of menuItems) {
    
    menuItem.addEventListener('click', function (event){
        var isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav')
        
        if (isParentMenu) {
            if (header.classList.contains('expand')) {
                setTimeout(() => {
                    header.classList.toggle('sub-menu-expand');
                }, 25);
            }
            event.preventDefault()
        }
        else {
            if (header.classList.contains('expand') && jsOverlay.classList.contains('overlay-on')) {
                header.classList.toggle('expand');
                jsOverlay.classList.toggle('overlay-on')
            }
        }
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

