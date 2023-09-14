const prompt = require('prompt-sync')();
const db = require('../../dbconfig');

function editarTarea(callback) {
  // Solicitar al usuario que ingrese el ID de la tarea a editar
  const tareaId = prompt('Ingrese el ID de la tarea que desea editar: ');

  // Realizar una consulta SQL para obtener la tarea con el ID proporcionado
  const selectSql = 'SELECT * FROM tareas WHERE id = ?';
  db.query(selectSql, [tareaId], (err, results) => {
    if (err) {
      console.error('Error al consultar la tarea:', err);
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    if (results.length === 0) {
      console.log('No se encontró ninguna tarea con ese ID.');
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    const tarea = results[0];

    // Mostrar la información de la tarea actual
    console.log('Información de la tarea:');
    console.log(`ID: ${tarea.id}`);
    console.log(`Título: ${tarea.titulo}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Creación: ${tarea.creacion}`);
    console.log(`Vencimiento: ${tarea.vencimiento}`);
    console.log(`Dificultad: ${tarea.dificultad}`);

    // Solicitar al usuario que ingrese los nuevos valores de la tarea
    console.log('\nIngrese los nuevos valores para la tarea (deje vacío para mantener el valor actual):');
    const nuevoTitulo = prompt(`Nuevo Título (${tarea.titulo}): `) || tarea.titulo;
    const nuevaDescripcion = prompt(`Nueva Descripción (${tarea.descripcion}): `) || tarea.descripcion;
    const nuevoEstado = prompt(`Nuevo Estado (${tarea.estado}): `) || tarea.estado;
    const nuevoCreacion = prompt(`Nueva Creación (${tarea.creacion}): `) || tarea.creacion;
    const nuevoVencimiento = prompt(`Nuevo Vencimiento (${tarea.vencimiento}): `) || tarea.vencimiento;
    const nuevaDificultad = prompt(`Nueva Dificultad (${tarea.dificultad}): `) || tarea.dificultad;

    // Realizar una consulta SQL para actualizar la tarea con los nuevos valores
    const updateSql = `
      UPDATE tareas
      SET titulo = ?, descripcion = ?, estado = ?, creacion = ?, vencimiento = ?, dificultad = ?
      WHERE id = ?
    `;

    db.query(
      updateSql,
      [nuevoTitulo, nuevaDescripcion, nuevoEstado, nuevoCreacion, nuevoVencimiento, nuevaDificultad, tareaId],
      (updateErr, updateResults) => {
        if (updateErr) {
          console.error('Error al editar la tarea:', updateErr);
          if (typeof callback === 'function') {
            callback();
          }
          return;
        }

        console.log('Tarea editada con éxito.');

        if (typeof callback === 'function') {
          callback();
        }
      }
    );
  });
}

module.exports = editarTarea;
