const prompt = require('prompt-sync')();
function agregarTarea(listaTareas) {
    listaTareas[listaTareas.length] = {
        titulo: prompt('Ingrese el titulo de la tarea : '),
        descripcion: prompt('Ingrese la descripcion : '),
        estado: prompt('Ingrese el estado : '),
        creacion: new Date(),
        ultimaEdicion: "",
        vencimiento: "",
        dificultad: prompt('Ingrese la dificultad : '),
    };
}

module.exports = agregarTarea;
