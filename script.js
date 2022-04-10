const hamburget = document.getElementsByClassName('nav__hamburger')[0]
const mobileNav = document.getElementsByClassName('nav__mobile_menu_items')[0]

hamburget.addEventListener('click',(e)=>{
    hamburget.classList.toggle('active')
    mobileNav.classList.toggle('show')
    document.body.classList.toggle('limit')
})


