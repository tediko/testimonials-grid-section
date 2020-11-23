const cards = document.querySelectorAll('[data-card]');

function fadeDown() {
    cards.forEach(card => this != card ? card.classList.add('active') : false);
}

function clear() {
    cards.forEach(card => card.classList.remove('active'));
}

cards.forEach(card => card.addEventListener('mouseover', fadeDown));
cards.forEach(card => card.addEventListener('mouseleave', clear));