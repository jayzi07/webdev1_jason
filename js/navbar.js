var navLinks = document.querySelector('.nav-links');

function toggleMenu(e){
    e.name = e.name === 'menu' ? 'close-circle' : 'menu'
    navLinks.classList.toggle('top-[8%]')
}