document.addEventListener('DOMContentLoaded', () => {
    const neonText = document.querySelector('.neon-text');

    setInterval(() => {
        neonText.style.visibility = (neonText.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 1200);
});