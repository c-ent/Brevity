
document.addEventListener('DOMContentLoaded', () => {
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav');

const setMenuState = (open) => {
    mobileMenu.classList.toggle('scale-y-100', open);
    mobileMenu.classList.toggle('opacity-100', open);
    mobileMenu.classList.toggle('pointer-events-auto', open);
    mobileMenu.classList.toggle('scale-y-0', !open);
    mobileMenu.classList.toggle('opacity-0', !open);
    mobileMenu.classList.toggle('pointer-events-none', !open);
    menuButton.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));

    if (open) {
        nav.classList.remove('rounded-[10px]');
        nav.classList.add('rounded-t-[10px]');
    } else {
        nav.classList.remove('rounded-t-[10px]');
        nav.classList.add('rounded-[10px]');
    }
};

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
});

mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuState(false);
    }
});

document.addEventListener('click', (event) => {
    const isMenuOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (!isMenuOpen) {
        return;
    }

    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        setMenuState(false);
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
