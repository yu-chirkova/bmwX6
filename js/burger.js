document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.humburger-menu');

    const toggleMenu = () => {
        menu.classList.toggle('menu-active');
        burger.classList.toggle('humburger-menu-active');
    }

    const closeMenu = event => {
      const target = event.target;

      if(target.classList.contains('menu-list__link')) {
          menu.classList.remove('menu-active');
          burger.classList.remove('humburger-menu-active');
      }
    }

    burger.addEventListener('click', toggleMenu);
    menu.addEventListener('click', closeMenu)



})