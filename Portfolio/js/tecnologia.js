//  Generacion de las cartas para la 'Seccion Tecnologias'. 

const Tecnologias = [
    {
        image: '../img/SeccionTecnologias/CSS3.png', 
        tittle: 'CSS 3',
        description: 'Cascading Style Sheets para estilización'
    },
    {
        image: '../img/SeccionTecnologias/Html.png', 
        tittle: 'HTML 5',
        description: 'HyperText Markup Language, para maquetado de paginas web'
    },
    {
        image: '../img/SeccionTecnologias/git.png', 
        tittle: 'Git',
        description: 'Sistema de Control de Versiones'
    },
    {
        image: '../img/SeccionTecnologias/GitHub.png', 
        tittle: 'Github',
        description: 'GitHub, plataforma de alojamiento de código para control de versiones'
    },
    {
        image: '../img/SeccionTecnologias/js.png', 
        tittle: 'Javascript',
        description: 'Programación con JAVASCRIPT'
    },
    {
        image: '../img/SeccionTecnologias/java.png', 
        tittle: 'Java',
        description: 'Programación con JAVA para Backend'
    },
    {
        image: '../img/SeccionTecnologias/mysql.png', 
        tittle: 'MySQL',
        description: 'MySQL Workbench para Base de datos Relacionales.'
    },
    {
        image: '../img/SeccionTecnologias/bootstrap.png', 
        tittle: 'Bootstrap Framework',
        description: 'Componentes y plantillas HTML, CSS y Javascript para proyectos'
    },
    {
        image: '../img/SeccionTecnologias/react.jpg', 
        tittle: 'ReactJS',
        description: 'Biblioteca para interfaces de usuario web y nativas'
    },
    {
        image: '../img/SeccionTecnologias/spring-boot.png', 
        tittle: 'Spring Boot',
        description: 'Poco conocimiento en Proyectos con Spring Framework.'
    }
]

const contenedorImagenes = document.getElementById('contenedorImagenes');


window.addEventListener('load', () => {
    const data = Tecnologias.map(Tecnologia => {
        return `
        <div class="card">
            <img class="img__tec" src=${Tecnologia.image} alt="CSS 3" />
            <div class="card__content">
                <h3 class="card__title">${Tecnologia.tittle}</h3>
                <p class="card__description">${Tecnologia.description}</p>
            </div>
        </div>
        `
    })

    contenedorImagenes.innerHTML = data.join('');
});