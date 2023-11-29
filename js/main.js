const burguer = document.getElementById('hamburguer');
const nav = document.querySelector('.nav');

burguer.addEventListener( 'click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('Activo');
    burguer.classList.toggle('hamburguer');
});

window.onclick = function (e) {
    nav.classList.remove('Activo');
    burguer.classList.remove('hamburguer');
};

