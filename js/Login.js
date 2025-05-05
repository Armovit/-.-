const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;
const logoImage = document.querySelector('.logo img');

const darkThemeLogo = "ArmovitLogotip.svg";
const lightThemeLogo = "ArmovitLogo.svg";

function updateThemeIcon(theme) {
    const icons = [
        themeToggle ? themeToggle.querySelector('i') : null,
        mobileThemeToggle ? mobileThemeToggle.querySelector('i') : null
    ];
    icons.forEach(icon => {
        if (!icon) return;
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    if (logoImage) {
        logoImage.src = theme === 'dark' ? darkThemeLogo : lightThemeLogo;
    }
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
} else {
    if (logoImage) {
        logoImage.src = lightThemeLogo;
    }
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = body.getAttribute('data-theme') || 'light';
    if (logoImage) {
        logoImage.src = currentTheme === 'dark' ? darkThemeLogo : lightThemeLogo;
    }
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.className = mainNav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
    
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });
    
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Вход выполнен успешно! Добро пожаловать в Armovit!');
    });
});