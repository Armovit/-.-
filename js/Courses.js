function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelectorAll('#theme-toggle i, #mobile-theme-toggle i').forEach(icon => {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
}
document.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('theme');
    setTheme(saved === 'dark' ? 'dark' : 'light');
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const mobileAuthButtons = document.getElementById('mobile-auth-buttons');
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            mobileAuthButtons.style.display = 'flex';
            document.body.classList.add('menu-open');
        } else {
            mobileAuthButtons.style.display = 'none';
            document.body.classList.remove('menu-open');
        }
    });
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && e.target !== mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileAuthButtons.style.display = 'none';
                document.body.classList.remove('menu-open');
            }
        }
    });
    function syncThemeIcons() {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        document.querySelectorAll('#theme-toggle i, #mobile-theme-toggle i').forEach(icon => {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }
    syncThemeIcons();
});

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
});