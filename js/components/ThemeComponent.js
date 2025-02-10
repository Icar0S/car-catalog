export class ThemeComponent {
    constructor() {
        this.createThemeButton();
    }

    createThemeButton() {
        if (!document.getElementById('theme-button')) {
            const nav = document.querySelector('nav');
            const themeButton = document.createElement('button');
            themeButton.id = 'theme-button';
            themeButton.className = 'theme-toggle';
            themeButton.innerHTML = '<i class="fas fa-moon"></i>';
            nav.appendChild(themeButton);
        }
    }

    initializeThemeToggle() {
        const themeButton = document.getElementById('theme-button');
        if (themeButton) {
            themeButton.addEventListener('click', () => this.toggleTheme(themeButton));
        }
    }

    toggleTheme(button) {
        const icon = button.querySelector('i');
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
} 