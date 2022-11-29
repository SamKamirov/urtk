//Menu

const toggleMenu = () => {
  // const toggle = document.querySelector('.toggle')
  const toggle = document.querySelector('.toggle__menu')
  const menuList = document.querySelector('.menu__list')
  const showMenu = document.querySelector('.menu--show')
  
  toggle.addEventListener('click', () => {
    menuList.classList.toggle('active')
  })

  showMenu.addEventListener('mousedown', () => {
    menuList.classList.toggle('active')
  })
  
  showMenu.addEventListener('pointerover', ()=> {
    menuList.classList.add('active')
  })

  showMenu.addEventListener('pointerleave', ()=> {
    menuList.classList.remove('active')
  })

  menuList.addEventListener('pointerover', ()=> {
    menuList.classList.add('active')
  })

  menuList.addEventListener('pointerleave', ()=> {
    menuList.classList.remove('active')
  })
}

toggleMenu()

const listItems = document.querySelectorAll('.list__item')
const menuItems = document.querySelectorAll('.menu__item')

menuItems.forEach(item => {
  item.addEventListener('pointerover', ()=> {
    item.classList.add('current')
    // console.log('skjghdfkjg')
  })
  item.addEventListener('pointerleave', ()=> {
    item.classList.remove('current')
  })
});


