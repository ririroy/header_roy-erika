const btnMenu = document.querySelector('.menu-burger');
const btnClose = document.querySelector('.btnClose');
const overlay = document.querySelector('.overlay');

function openMenu(){
    overlay.style.display = 'block';
}

function closeMenu(){
    overlay.style.display = 'none';
}

btnMenu.addEventListener('click', () => {
    openMenu();
});

btnClose.addEventListener('click', () => {
    closeMenu();
});