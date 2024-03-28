const cursos = [
    {nombre: 'Ingeniería en Sistemas de Información',lugar: 'Universidad Tecnológica Nacional (Cursando)'},
    {nombre: 'Curso de Programacion Full Stack Java',  lugar: 'Codo A Codo (en Curso)'},
    {nombre: 'Curso de Programación Web Full Stack', lugar: 'EGG Educación'},
    {nombre: 'Curso Desarrollador Backend con Java', lugar: 'Casa del Futuro - Godoy Cruz'},
    {nombre: 'Desarrollador Javascript', lugar: 'Casa del Futuro - Godoy Cruz'},
]



window.addEventListener('load', () => {

    const contenidoCursos = document.getElementById('contenidoCursos');

    const data = cursos.map(curso => {
        return `
                <div class="card__cursos">
                    &#128211; ${curso.nombre} en ${curso.lugar}
                </div>
            `
    });

    contenidoCursos.innerHTML = data.join('');
})