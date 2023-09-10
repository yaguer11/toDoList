function main (){

const prompt = require('prompt-sync')();
const verTarea = require('./componentes/verTarea');
const buscarTarea = require('./componentes/buscarTarea');
const agregarTarea = require('./componentes/agregarTarea');
const editarTarea = require('./componentes/editarTarea');

// Función para mostrar menú
function mostrarMenu() {
  console.log('Menu:');
  console.log('(1) Ver Mis Tareas');
  console.log('(2) Buscar una Tarea');
  console.log('(3) Agregar una Tarea');
  console.log('(4) Editar Tareas');
  console.log('(5) Salir');
}

// Función para manejar opciones del menú
function manejarOpcion() {
  mostrarMenu();

  const opcion = prompt('Selecciona una opción: ');

  switch (opcion) {
    case '1':
      verTarea();
      volverMenu();
      break;
    case '2':
      buscarTarea();
      volverMenu();
      break;
    case '3':
      agregarTarea();
      volverMenu();
      break;
    case '4':
      editarTarea();
      volverMenu();
      break;
    case '5':
      console.log('Saliendo de la aplicación.');
      break;
    default:
      console.log('Opción no válida. Por favor, elige una opción válida.');
      volverMenu();
      break;
  }
}

function volverMenu() {
  const respuesta = prompt('¿Desea volver al menú principal? (Sí/No): ').toLowerCase();

  if (respuesta === 'si' || respuesta === 'sí') {
    manejarOpcion(); // Volver al menú principal
  } else {
    console.log('Saliendo de la aplicación.');
  }
}

// Iniciar la aplicación llamando a la función principal
manejarOpcion();

};

module.exports = main;