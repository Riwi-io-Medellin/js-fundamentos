// Ejercicios de Switch

// Ejercicio 1: Crea un switch que imprima un mensaje según el día de la semana.
const diaSemana = 3; // 1: Lunes, 2: Martes, ..., 7: Domingo

switch (diaSemana) {
  case 1:
    console.log("Hoy es Lunes. ¡Inicio de semana!");
    break;
  case 2:
    console.log("Hoy es Martes. ¡Sigue adelante!");
    break;
  case 3:
    console.log("Hoy es Miércoles. ¡Mitad de semana!");
    break;
  case 4:
    console.log("Hoy es Jueves. ¡Ya casi es viernes!");
    break;
  case 5:
    console.log("Hoy es Viernes. ¡Por fin llegó el fin de semana!");
    break;
  case 6:
    console.log("Hoy es Sábado. ¡Disfruta tu descanso!");
    break;
  case 7:
    console.log("Hoy es Domingo. ¡Último día de descanso!");
    break;
  default:
    console.log("Día no válido. Ingresa un número del 1 al 7.");
}

// Ejercicio adicional: Calificación con letras
const calificacion = 85; // Cambia este valor para probar diferentes resultados
let letra;

switch (true) {
  case calificacion >= 90:
    letra = 'A';
    break;
  case calificacion >= 80:
    letra = 'B';
    break;
  case calificacion >= 70:
    letra = 'C';
    break;
  case calificacion >= 60:
    letra = 'D';
    break;
  default:
    letra = 'F';
}

console.log(`Tu calificación es ${calificacion}, equivalente a una ${letra}`);

// Ejercicio adicional: Menú de opciones
const opcion = 2; // Cambia este valor para probar diferentes opciones

console.log("MENÚ DE OPCIONES:");
console.log("1. Ver perfil");
console.log("2. Editar configuración");
console.log("3. Cerrar sesión");
console.log("4. Ayuda");

switch (opcion) {
  case 1:
    console.log("Has seleccionado: Ver perfil");
    break;
  case 2:
    console.log("Has seleccionado: Editar configuración");
    break;
  case 3:
    console.log("Has seleccionado: Cerrar sesión");
    break;
  case 4:
    console.log("Has seleccionado: Ayuda");
    break;
  default:
    console.log("Opción no válida. Selecciona una opción del 1 al 4.");
}
