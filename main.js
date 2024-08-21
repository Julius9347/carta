//        carta
const btnCarta = document.querySelector('.btn');
const carta = document.querySelector('.carta');
const sobre = document.querySelector('.contenedor');
const btn = document.querySelector('.btn');
const escrito = document.querySelector('.escrito');
const autor = document.querySelector('.autor');    // extrae las etiquetas de html para usarlas aqui
 
// estilos
btnCarta.style.margin = '50px 0'; 
carta.style.fontSize = '1.3em';
escrito.style.margin = '8px';
autor.style.textAlign = 'end';

// letras iniciales
carta.innerHTML = '<h4>¿Como que no te he dedicado cartas?</h4>';
btn.innerHTML = '<p>Siguiente...</p>'

// cuenta los clicks del boton
let click = 0;

btn.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == 'P'){ // revisa si se ha presionado el boton
        click++;
    }
    if(click == 1){ // primer click 
             carta.innerHTML = 'Ni modo, te dedicaré una❤️'; // muestra texto
        }else if (click == 2){ // segundo click
            btn.innerHTML = '<a href="./formulario.html" class="btn">Volver a reto!</a>' // muestra texto cambia estilos 
            sobre.style.height = '650px'
            carta.innerHTML = 'La carta';
            escrito.innerHTML = '¿Quien se atreve a prometer cosas que sabe que no cumplira?, no es mi caso... yo si quiero cumplir aunque aveces resulta dificil que todo salga como uno quiera... Pero, yo no quiero que eso pase, yo quiero cumplir mis promesas, por eso, propongo: <br> que no te prometere cosas que no puedo lograr, por eso prometo aprender mas de ti, prometo estar contigo en en las buenas y malas y cuando no pueda con una situacion que de verdad me sobrepase pediré simplemente mi tiempo, prometo hablar contigo, expresarme y razonar, prometo que estare, prometo que si me voy por un espacio volveré, no prometo ser muy resistente pero prometo actuar con razon, prometo estar seguro y de segeuir peleandome con mis inseguridades, prometo aprender de mis errores, de los cuales no quiero repetir ninguno, prometo insistir estar mientras sé que puedo, prometo ser tuyo, prometo que hoy estare contigo y que mañana sea un hoy y pasado mañana el mañana del hoy de mañana... <br> en resumen, no prometo no equivocarme pero prometor ser mejor para no equiocarme... I love my love...❤️';
            autor.innerHTML = '-Julian Meneses Ocampo';
        }
});

