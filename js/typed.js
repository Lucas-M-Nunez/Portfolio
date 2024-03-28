const typed = new Typed('#typed', {
    strings: [
        '<i class="typedEffect"> Web Developer. </i>' ,
        '<i class="typedEffect"> Full Stack programmer. </i>' ,
        '<i class="typedEffect"> Engineering Student. </i>' 
    ],
    typeSpeed: 95, // Velocidad en milisegundos para poner una letra.
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar.
    backSpeed: 70, // Velocidad en milisegundos para borrar una letra.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings.
    loopCount: false, // Cantidad de veces a repetir el array. false = infinite.
    showCursor: true, // Mostrar Cursor palpitando.
    cursorChar: '|' // Caracter para el cursor.
});