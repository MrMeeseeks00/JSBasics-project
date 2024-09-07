//Creazione titolo
let titolo = document.createElement('h1');
titolo.textContent = 'Counter';
document.body.appendChild(titolo);

//Creazione container
let container = document.createElement('div');
container.id = 'container';
container.className = 'container'; 
document.body.appendChild(container);

//Creazione valore del counter
let valore = document.createElement('label');
valore.id = 'valore';
valore.className = 'valore';
valore.textContent = '0';

//Creazione pulsanti +, - e reset
let btnContainer = document.createElement('div');
btnContainer.className = 'btn-container';

function createBtn(id, className, text) {
    let pulsante = document.createElement('button');
    pulsante.id = id;
    pulsante.className = className;
    pulsante.textContent = text;
    return pulsante;
}

let pulsantePiu = createBtn('btn-plus', 'btn', '+');
let pulsanteReset = createBtn('btn-reset', 'btn', 'Reset');
let pulsanteMeno = createBtn('btn-minus', 'btn', '-');

btnContainer.appendChild(pulsanteMeno);
btnContainer.appendChild(pulsanteReset);
btnContainer.appendChild(pulsantePiu);

//Aggiunta elementi nel container
container.appendChild(valore);
container.appendChild(btnContainer);

//Creazione funzione incremento, decremento e reset
let count = 0;

pulsantePiu.addEventListener('click', function() {
    count++;
    valore.textContent = count;
});
pulsanteMeno.addEventListener('click', function() {
    count--;
    valore.textContent = count;
});
pulsanteReset.addEventListener('click', function() {
    count = 0;
    valore.textContent = count;
});
