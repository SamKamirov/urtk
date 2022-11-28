//Menu

const toggleMenu = () => {
    // const toggle = document.querySelector('.toggle')
    const toggle = document.querySelector('.toggle__menu')
    const menu = document.querySelector('.menu')
    const infoMenu = document.querySelector('.menu--show')

    toggle.addEventListener('click', () => {
      menu.classList.toggle('menu--active')
    })
}

toggleMenu()

