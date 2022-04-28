const toggleBth = document.querySelector('.navbar_toogleBth');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBth.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});