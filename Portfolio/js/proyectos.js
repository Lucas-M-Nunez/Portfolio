const proyectos = [
    {nombre: 'Poyecto Final Javascript en Casa del Futuro', descripcion: 'Proyecto Final Consumiendo API de peliculas con JS y Local Storage. Para Curso de Desarrollador Javascript.', link:'https://proyecto-final-js-cdf-movieapp.vercel.app/'},
    {nombre: 'Trabajo Integrador FullStack Java en CodoAcodo.', descripcion: 'Proyecto Integrador con Java, para DB se uso MySQL Workbench y para Frontend, Html, CSS, Javascript y Bootstrap.', link:''}
];

const contenedorCartas = document.getElementById('container__cartas');

window.addEventListener('load', () => {

   const data = proyectos.map( proyecto => {
        return `
        <div class="book">
            <p class= "book__p">${proyecto.descripcion}</p>
            <button class="moreInfobtn">
                <a class="link__proyect" href="${proyecto.link}" target="_blank">Ver</a>
            </button>
            <div class="cover">
                <p class="book__p">${proyecto.nombre}</p>
            </div>
        </div>
        `;
    })

    contenedorCartas.innerHTML = data.join('');
})