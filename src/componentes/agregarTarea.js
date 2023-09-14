const prompt = require('prompt-sync')();
const db = require('../../dbconfig');

function agregarTarea(callback) {
  console.log("Agregando una nueva tarea:");

  const titulo = prompt("Título: ");
  const descripcion = prompt("Descripción: ");
  const estado = prompt("Estado: ");
  const creacion = new Date().toISOString().slice(0, 19).replace('T', ' '); // Fecha y hora actual en formato YYYY-MM-DD HH:MM:SS
  const vencimiento = prompt("Fecha de vencimiento (YYYY-MM-DD): ");
  const dificultad = prompt("Dificultad: ");

  const sql = 'INSERT INTO tareas (titulo, descripcion, estado, creacion, vencimiento, dificultad) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(sql, [titulo, descripcion, estado, creacion, vencimiento, dificultad], (err, result) => {
    if (err) {
      console.error('Error al agregar la tarea:', err);
      if (typeof callback === 'function') {
        callback();
      }
      return;
    }

    console.log('Tarea agregada con éxito.');

    if (typeof callback === 'function') {
      callback();
    }
  });
}

module.exports = agregarTarea;
