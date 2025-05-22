const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Hamburger logic
menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Lock scroll when menu is open
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Scroll shrink effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Theme toggle
let isDark = localStorage.getItem('theme') !== 'light';
setTheme(isDark);

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    setTheme(isDark);
});

function setTheme(dark) {
    if (dark) {
        body.classList.remove('light-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}
