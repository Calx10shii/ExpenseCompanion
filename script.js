const root = document.body;
const toggleButton = document.getElementById('theme-toggle');

const applyTheme = (isDarkMode) => {
  root.classList.toggle('dark-mode', isDarkMode);

  if (toggleButton) {
    toggleButton.setAttribute('aria-pressed', String(isDarkMode));
    toggleButton.querySelector('.theme-toggle__label').textContent = isDarkMode ? 'Light mode' : 'Dark mode';
    toggleButton.querySelector('.theme-toggle__icon').textContent = isDarkMode ? '☀️' : '🌙';
  }

  localStorage.setItem('expense-companion-theme', isDarkMode ? 'dark' : 'light');
};

const savedTheme = localStorage.getItem('expense-companion-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isDarkMode = !root.classList.contains('dark-mode');
    applyTheme(isDarkMode);
  });
}
