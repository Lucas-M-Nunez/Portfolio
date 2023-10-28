const button = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

button.addEventListener( 'click', () => {
    event.stopPropagation();
    nav.classList.toggle('Activo')
});

window.onclick = function (e) {
    nav.classList.remove('Activo');
};