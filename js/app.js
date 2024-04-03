// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro. prototype.cotizarSeguro = function () {
    /*
     * 1 = Americano 1.15
     * 2 = Asiático 1.05
     * 3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    console.log(this.marca);
    // Validación para el cálcuo del seguro
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;
        default:
            break;
    }

    // Leer el año
    const diferenciaAnio = new Date(). getFullYear() - this.year;

    // Cada año que la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferenciaAnio * 3) * cantidad) / 100;

/*
 * Si el seguro es básico se multiplica por un 30% más
 * Si el seguro es completo se multiplica por un 50% más
 */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50
    }

    return cantidad;
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

UI.prototype.mostrarResultado = (total, seguro) => {

    const { marca, year, tipo } = seguro

    let textoMarca;
    // Validación para la marca
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiático';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');+
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo de Seguro: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block'
    // Eliminamos el spinner
    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner
        resultadoDiv.appendChild(div); // Se muestra el resultado
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

        // Oculatar las cotizaciones previas
        const resultados = document.querySelector('#resultado div');
        if(resultados != null) { // si encuentra un div (primera cotización) dentro de resultado
            resultados.remove(); // elimina ese div
        }

        // Instancear el seguro
        const seguro = new Seguro(marca, year, tipo)
        const total = seguro.cotizarSeguro();

        // Utilizar el prototype que va a cotizar
        ui.mostrarResultado(total, seguro);
}