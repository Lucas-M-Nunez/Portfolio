const proyectos = [
    {nombre: 'Interfaz Integradora sobre el Curso', descripcion: 'Poyecto Final Javascript en Casa del Futuro. Consumiendo API de peliculas con JS y Local Storage. Para Curso de Desarrollador Javascript.', link:'https://proyecto-final-js-cdf-movieapp.vercel.app/'},
    {nombre: 'Trabajo Integrador Java para Backend en Casa del Futuro', descripcion: 'Proyecto Integrador con Java, Carrito de compras utilizando Spring boot y HTML con thymeleaf y Tamagotchi (Link del Repositorio)', link:'https://github.com/Lucas-M-Nunez/proyectoFinalJava-CDF'},
    {nombre: 'Lista de Pedidos', descripcion: 'Pequeño proyecto de Lista de pedidos usada en emprendimiento de venta para evento de Pascuas', link:'https://order-list-delta.vercel.app/'}
];

const contenedorCartas = document.getElementById('container__cartas');

window.addEventListener('load', () => {

   const data = proyectos.map( proyecto => {
        return `
        <div class="tarjeta">
            <iframe src="${proyecto.link}"></iframe>
            <div class="tarjeta__content">
                <p class="tarjeta__title">${proyecto.nombre}</p>
                <p class="tarjeta__description">
                    ${proyecto.descripcion}
                </p>
                <a href="${proyecto.link}" target="_blank"><button class="tarjeta__btn">Ver Proyecto</button></a>
            </div>
        </div>
        `;
    })

    contenedorCartas.innerHTML = data.join('');
});



{/* <div class="book">
            <p class= "book__p">${proyecto.descripcion}</p>
            <button class="moreInfobtn">
                <a class="link__proyect" href="${proyecto.link}" target="_blank">Ver</a>
            </button>
            <div class="cover">
                <p class="book__p">${proyecto.nombre}</p>
            </div>
        </div> */}