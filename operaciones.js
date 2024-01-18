const fs = require('fs');
const ruta_citas = './citas.json';

function registrarCita(cita) {
  // Lee las citas existentes
  const citas = leerCitas();

  // Agrega la nueva cita
  citas.push(cita);

  // Guarda las citas actualizadas en el archivo json
  fs.writeFileSync(ruta_citas, JSON.stringify(citas, null, 2));

  console.log('Cita registrada correctamente.');
}

function leerCitas() {
  try {
    // Intenta leer el archivo json de citas
    const citasData = fs.readFileSync(ruta_citas, 'utf-8');
    return JSON.parse(citasData);
  } catch (error) {
    // Si hay un error al leer el archivo o el archivo no existe, devuelve un arreglo vacío
    return [];
  }
}

module.exports = {
  registrarCita,
  leerCitas,
};