const burger = document.querySelector('.burger');
const menuClose = document.querySelector('.menu_close');
const menu_container = document.querySelector('.menu_container');

burger.addEventListener('click', () => {
    menu_container.classList.add('menu_container_active')
});

menuClose.addEventListener('click', () => {
    menu_container.classList.remove('menu_container_active');
})