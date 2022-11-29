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

  showMenu.addEventListener('click', () => {
    menuList.classList.toggle('active')
  })

  showMenu.addEventListener('mouseover', () => {
    menuList.classList.add('active')
  })

  showMenu.addEventListener('mouseleave', () => {
    menuList.classList.remove('active')
  })

  menuList.addEventListener('mouseover', () => {
    menuList.classList.add('active')
  })
  
  menuList.addEventListener('mouseleave', () => {
    menuList.classList.remove('active')
  })

  menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'rgb(0,0,0)'
    })
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'rgb(255,255,255)'
    })
  });
}
toggleMenu()

