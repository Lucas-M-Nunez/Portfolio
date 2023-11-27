const button = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

button.addEventListener( 'click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('Activo');
});

window.onclick = function (e) {
    nav.classList.remove('Activo');
};