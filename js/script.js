//Menu

const toggleMenu = () => {
    // const toggle = document.querySelector('.toggle')
  const toggle = document.querySelector('.toggle__menu')
  const menu = document.querySelector('.menu__list')
  const textHover = document.querySelector('.menu--show')

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
}
toggleMenu()

