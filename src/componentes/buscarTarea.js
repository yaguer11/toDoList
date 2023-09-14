const prompt = require('prompt-sync')();
const db = require('../../dbconfig');

function buscarTarea(callback) {
  console.log("Buscar una tarea:");

  const id = prompt("ID de la tarea que deseas buscar: ");

  const sql = 'SELECT * FROM tareas WHERE id = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error al buscar la tarea:', err);
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    if (results.length === 0) {
      console.log('No se encontró ninguna tarea con el ID proporcionado.');
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    const tarea = results[0];
    console.log('Tarea encontrada:');
    console.log(`ID: ${tarea.id}`);
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Creación: ${tarea.creacion}`);
    console.log(`Vencimiento: ${tarea.vencimiento}`);
    console.log(`Dificultad: ${tarea.dificultad}`);

    if (typeof callback === 'function') {
      callback();
    }
  });
}

module.exports = buscarTarea;
