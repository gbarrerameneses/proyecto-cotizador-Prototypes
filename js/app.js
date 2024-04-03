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

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar mensaje en HTML
    const formulario = document.querySelector('#cotizar-seguro'); // selección de id
    formulario.insertBefore(div, document.querySelector('#resultado')) // donde insertamos

    // Eliminamos el mensaje
    setTimeout(() => {
        div.remove();
    }, 3000);
}


// Instancear UI
const ui = new UI();
// console.log(ui);


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
})

eventListeners();

function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro)
}

// Función para validar el formulario
function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    // Leer la marca seleccionada
    const year = document.querySelector('#year').value;

    // Leer la marca seleccionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value; // selector de css para diferenciar los radio button

    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
        ui.mostrarMensaje('Cotizando...', 'exito');

        // Instancear el seguro


        // Utilizar el prototype que va a cotizar
    
}