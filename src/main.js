function main() {
  const prompt = require("prompt-sync")();
  const db = require("../dbconfig");
  const verTareas = require("./componentes/verTarea");
  const buscarTarea = require("./componentes/buscarTarea");
  const agregarTarea = require("./componentes/agregarTarea");
  const editarTarea = require("./componentes/editarTarea");
  const cerrarConexion = require("../dbclose");

  listaTareas = [];

  // Función para mostrar menú
  function mostrarMenu() {
    console.log("\n*********************************");
    console.log("           APP DE TAREAS          ");
    console.log("*********************************\n");
    console.log("\x1b[31m 1 \x1b[0m. Ver Mis Tareas"); // El código \x1b[31m cambia el color a rojo, \x1b[0m restablece el color
    console.log("\x1b[31m 2 \x1b[0m. Buscar una Tarea");
    console.log("\x1b[31m 3 \x1b[0m. Agregar una Tarea");
    console.log("\x1b[31m 4 \x1b[0m. Editar Tareas");
    console.log("\x1b[31m 5 \x1b[0m. Salir");
    console.log("\n*********************************\n");
  }

  // Función para manejar opciones del menú
  function manejarOpcion() {
    mostrarMenu();

    const opcion = prompt("Selecciona una opción: ");

    switch (opcion) {
      case "1":
        // Visualiza todas las tareas
        verTareas(() => {
          volverMenu();
        });
        break;
      case "2":
        buscarTarea(() => {
          volverMenu();
        });
        break;
      case "3":
        agregarTarea(() => {
          volverMenu();
        });
        break;
      case "4":
        editarTarea(() => {
          volverMenu();
        });
        break;
      case "5":
        cerrarConexion();
        console.log("Saliendo de la aplicación.");
        break;
      default:
        console.log("Opción no válida. Por favor, elige una opción válida.");
        volverMenu();
        break;
    }
  }

  function volverMenu() {
    console.log("¿Desea volver al menú principal? (s) Sí (n) No ");
    const respuesta = prompt("Ingrese opción:  ").toLowerCase();

    if (respuesta === "s") {
      manejarOpcion(); // Volver al menú principal
    } else {
      cerrarConexion();
      console.log("Saliendo de la aplicación.");
    }
  }

  // Iniciar la aplicación llamando a la función principal
  manejarOpcion();
}

module.exports = main;
