//Menu

const toggleMenu = () => {
  // const toggle = document.querySelector('.toggle')
  const toggle = document.querySelector('.toggle__menu')
  const menuList = document.querySelector('.menu__list')
  const showMenu = document.querySelector('.menu--show')
  const menu = document.querySelector('.menu')
  
  toggle.addEventListener('pointerdown', () => {
    // menu.classList.toggle('active')
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

  menuList.addEventListener('mouseover', ()=> {
    menuList.classList.add('active')
  })

  menuList.addEventListener('mouseout', ()=> {
    menuList.classList.remove('active')
  })
  
  menuList.addEventListener('pointerdown', ()=> {
    menuList.classList.add('active')
  })

  menuList.addEventListener('pointerdown', ()=> {
    menuList.classList.add('active')
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


