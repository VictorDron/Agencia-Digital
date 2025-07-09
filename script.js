// Menu mobile hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Fade-in nos cards ao rolar
const cards = document.querySelectorAll('.card');
function checkCards() {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.7s, transform 0.7s';
        } else {
            card.style.opacity = 0;
            card.style.transform = 'translateY(40px)';
        }
    });
}
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);