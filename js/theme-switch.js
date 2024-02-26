// theme-switch.js

function toggleTheme() {
    const htmlElement = document.querySelector('html');
    const switchElement = document.getElementById('switch');

    if (htmlElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

function setTheme(theme) {
    const htmlElement = document.querySelector('html');
    const switchElement = document.getElementById('switch');

    if (theme === 'dark') {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        switchElement.src = window.darkThemeImage;
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        switchElement.src = window.lightThemeImage;
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const switchElement = document.getElementById('switch');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    
    switchElement.src = htmlElement.classList.contains('dark') ? window.darkThemeImage : window.lightThemeImage;
});
