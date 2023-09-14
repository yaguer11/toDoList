const connection = require('./dbconfig'); // Importa la conexión a la base de datos

// Cerrar la conexión a la base de datos cuando sea necesario
function cerrarConexion() {
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión a la base de datos:', err);
      throw err;
    }
    console.log('Conexión a la base de datos cerrada');
  });
}

module.exports = cerrarConexion; // Exporta la función para su uso en otros archivos
