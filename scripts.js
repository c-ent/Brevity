
document.addEventListener('DOMContentLoaded', () => {
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('scale-y-0'); 
    mobileMenu.classList.toggle('scale-y-100');

    // Rounded corners for the nav
    if (mobileMenu.classList.contains('scale-y-100')) {
        nav.classList.remove('rounded-[10px]');
        nav.classList.add('rounded-t-[10px]');
    } else {
        nav.classList.remove('rounded-t-[10px]');
        nav.classList.add('rounded-[10px]');
    }
});
});


window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    
    setTimeout(() => {
        loader.classList.add('transition-opacity', 'duration-500', 'opacity-0');
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }, 100);
});
