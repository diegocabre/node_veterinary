const operaciones = require('./operaciones');

// Obtiene los argumentos de la línea de comandos
const [, , accion, ...params] = process.argv;

// Validar si la acción es válida
if (accion !== 'registrar' && accion !== 'leer') {
  console.log('Acción no válida. Las acciones válidas son "registrar" y "leer".');
  process.exit(1);
}

// Ejecuta la acción correspondiente
if (accion === 'registrar') {
  // Validar que se proporcionen los argumentos necesarios
  if (params.length !== 5) {
    console.log('Error: Faltan argumentos. Debes proporcionar nombre, edad, tipo, color y enfermedad.');
    process.exit(1);
  }

  const [nombre, edad, tipo, color, enfermedad] = params;
  const nuevaCita = { nombre, edad, tipo, color, enfermedad };
  operaciones.registrarCita(nuevaCita);
} else if (accion === 'leer') {
  const citas = operaciones.leerCitas();
  
  // Validar si no hay citas
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(cita => {
      console.log('--- Cita ---');
      console.log(`Nombre del animal: ${cita.nombre}`);
      console.log(`Edad: ${cita.edad}`);
      console.log(`Tipo de animal: ${cita.tipo}`);
      console.log(`Color del animal: ${cita.color}`);
      console.log(`Enfermedad: ${cita.enfermedad}`);
      console.log('--------------');
    });
  }
}