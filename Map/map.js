// map.js

// Grab elements
const ecoButton = document.getElementById('eco-toggle');
const ecoIndicator = document.getElementById('eco-indicator');
const html = document.documentElement;

// Initialize theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateIndicator(savedTheme);

// Function to move the indicator based on theme
function updateIndicator(theme) {
    if (theme === 'dark') {
        ecoIndicator.style.transform = 'translateX(24px)'; // move to right
        ecoIndicator.style.background = '#fff';
    } else {
        ecoIndicator.style.transform = 'translateX(0)';
        ecoIndicator.style.background = '#0a160a';
    }
}

// Click event toggles theme
ecoButton.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    updateIndicator(newTheme);
    localStorage.setItem('theme', newTheme);
});