// Универсальная логика переключения темы для всех страниц
(function() {
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
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        const currentTheme = savedTheme || 'light';
        body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
    });
})(); 