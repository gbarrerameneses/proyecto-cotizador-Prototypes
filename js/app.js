// Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){}

// LEste Prototype llena las opciones de los años
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

