const operaciones = require('./operaciones');

// Obtiene los argumentos de la línea de comandos
const [, , accion, ...params] = process.argv;

// Ejecuta la acción correspondiente
if (accion === 'registrar') {
  const [nombre, edad, tipo, color, enfermedad] = params;
  const nuevaCita = { nombre, edad, tipo, color, enfermedad };
  operaciones.registrarCita(nuevaCita);
} else if (accion === 'leer') {
  operaciones.leerCitas().forEach(cita => console.log(cita));
} else {
  console.log('Acción no válida. Las acciones válidas son "registrar" y "leer".');
}