const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const menu = element.nextElementSibling
    if(menu.classList.contains('menu_sub')) {
      menu.classList.toggle('menu_active')
    }
  })
})
