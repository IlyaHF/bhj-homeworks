const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const menu = element.nextElementSibling;

    if(menu) {
      menu.classList.toggle('menu_active')
    } else {
      window.location.href = element.href;
    }
  })
})