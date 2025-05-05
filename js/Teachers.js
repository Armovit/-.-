const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;
const logoImage = document.querySelector('.logo img');

const darkThemeLogo = "D:/БГТУ/1 Курс/2 семестр/КЯР/Finaly курсовой проект/ArmovitLogotip.svg";
const lightThemeLogo = "D:/БГТУ/1 Курс/2 семестр/КЯР/Finaly курсовой проект/ArmovitLogo.svg";

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
    
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

(function() {
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('main-nav');
const mobileAuthButtons = document.getElementById('mobile-auth-buttons');
const body = document.body;

mobileMenuBtn.addEventListener('click', function() {
nav.classList.toggle('active');
if (nav.classList.contains('active')) {
mobileAuthButtons.style.display = 'flex';
body.classList.add('menu-open');
mobileMenuBtn.querySelector('i').className = 'fas fa-times';
} else {
mobileAuthButtons.style.display = 'none';
body.classList.remove('menu-open');
mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
}
});

nav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('active');
mobileAuthButtons.style.display = 'none';
body.classList.remove('menu-open');
mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
});
});
})();
