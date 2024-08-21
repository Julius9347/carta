//        carta
const habla = document.querySelector('.habla');
const sobre = document.querySelector('.contenedor');
const btn = document.querySelector('.btn');
const img = document.querySelector('.rata');
const img2 = document.createElement('img');
img2.src = './img/rata-removebg-preview.png';
    // extrae las etiquetas de html para usarlas aqui
 
// estilos
btn.style.margin = '50px 0'; 
habla.style.fontSize = '1.3em';
sobre.style.height = '150vw';

// letras iniciales
habla.innerHTML = '<h4>¿Como que no te he dado un anillo?</h4>';
btn.innerHTML = '<p>Siguiente...</p>';
img.appendChild(img2)
// cuenta los clicks del boton
let click = 0;

btn.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == 'P'){ // revisa si se ha presionado el boton
        click++;
    }
    if(click == 1){ // primer click 
        img.removeChild(img2)
        sobre.style.height = '48vw';
             habla.innerHTML = 'Claro que tienes uno❤️, y ya casi viene el otro!🕊️'; // muestra texto
        }else if (click == 2){ // segundo click
            btn.innerHTML = '<a href="./formulario.html" class="btn">Volver a reto!</a>' // muestra texto cambia estilos 
            sobre.style.height = '300px'
            habla.innerHTML = 'Pronto... cuando la vida nos sonria y nos de  la oportunidad de juntarnos, de modo que ese dia te pueda entregar el preciado anillo que espero conservar contigo por mucho tiempo... y aparte de darte ese anillo volverme mas de lo que soy para ti ahora...';
        }
});

