//Menu

const toggleMenu = () => {
    // const toggle = document.querySelector('.toggle')
  const toggle = document.querySelector('.toggle__menu')
  const menu = document.querySelector('.menu')
  const textHover = document.querySelector('.menu--show')

  toggle.addEventListener('click', () => {
    menu.classList.toggle('menu--active')
  })

  textHover.addEventListener('mouseenter', ()=> {
    menu.classList.add('menu--active')
    console.log(menu)
  })

  textHover.addEventListener('mouseout', ()=> {
    menu.classList.remove('menu--active')
    console.log(menu)
  })
}
toggleMenu()

