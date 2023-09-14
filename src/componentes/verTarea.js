const Table = require('cli-table');
const db = require('../../dbconfig');

function verTareas(callback) {
  const sql = 'SELECT id, titulo, descripcion, estado, creacion, vencimiento, dificultad FROM tareas';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al consultar tareas:', err);
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    if (results.length === 0) {
      console.log('No hay tareas disponibles.');
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    // Configurar la tabla ASCII
    const table = new Table({
      head: ['ID', 'Título', 'Descripción', 'Estado', 'Creación', 'Vencimiento', 'Dificultad'],
      colWidths: [5, 20, 40, 10, 15, 15, 15]
    });

    results.forEach((row) => {
      // Agregar cada fila a la tabla
      table.push([row.id, row.titulo, row.descripcion, row.estado, row.creacion, row.vencimiento, row.dificultad]);
    });

    console.log('Tareas:');
    console.log(table.toString());

    if (typeof callback === 'function') {
      callback();
    }
  });
}

module.exports = verTareas;
