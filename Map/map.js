// ===========================
// NAV TOGGLE FOR MOBILE
// ===========================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ===========================
// BACK TO TOP BUTTON
// ===========================
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// OPTIONAL: LIGHT/DARK THEME TOGGLE
// ===========================

const themeToggle = document.createElement('button');
themeToggle.textContent = "🌙";
themeToggle.style.position = "fixed";
themeToggle.style.bottom = "6rem";
themeToggle.style.right = "2rem";
themeToggle.style.padding = "0.6rem 1rem";
themeToggle.style.borderRadius = "50px";
themeToggle.style.border = "none";
themeToggle.style.background = "var(--accent-green)";
themeToggle.style.color = "#fff";
themeToggle.style.cursor = "pointer";
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
});
