//Menu

const toggleMenu = () => {
    // const toggle = document.querySelector('.toggle')
  const toggle = document.querySelector('.toggle__menu')
  const menuList = document.querySelector('.menu__list')
  const showMenu = document.querySelector('.menu--show')
  const menuItems = document.querySelectorAll('.list__item')

  toggle.addEventListener('click', () => {
    menuList.classList.toggle('active')
  })
}
toggleMenu()

