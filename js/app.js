// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){}

// Este Prototype llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
            min = max - 20;

    const selectYear = document.querySelector('#year'); // Seleccionamos el id year

    // iteramos los años en el select
    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option)
    }
}

// Instancear UI
const ui = new UI();
console.log(ui);


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
})

eventListeners();
// Función para validar el formulario
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // Leer la marca seleccionada
    const year = document.querySelector('#year').value;

    // Leer la marca seleccionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value; // selector de css para diferenciar los radio button

    if (marca === '' || year === '' || tipo === '') {
        console.log('NO paso la validación');
    } else {
        console.log('SI paso la validación');
    }
}