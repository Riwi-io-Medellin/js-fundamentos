// Ejercicios de Variables y Condicionales

// Ejercicio 1: Declara una variable para tu nombre y otra para tu edad.
// Imprime un mensaje personalizado usando un condicional.
let nombre = "Tu nombre"; // Cambia esto por tu nombre
let edad = 25; // Cambia esto por tu edad

if (edad >= 18) {
  console.log(`Hola ${nombre}, eres mayor de edad.`);
} else {
  console.log(`Hola ${nombre}, eres menor de edad.`);
}

// Ejercicio 2: Escribe una condición que imprima "Acceso permitido" 
// solo si la edad es mayor o igual a 18.
if (edad >= 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

// Ejercicio adicional: Verificar si una persona puede votar
// (debe ser mayor de 18 años y tener identificación)
let tieneIdentificacion = true; // Cambia a false para probar diferentes resultados

if (edad >= 18 && tieneIdentificacion) {
  console.log("Puede votar");
} else if (edad >= 18 && !tieneIdentificacion) {
  console.log("Es mayor de edad pero no tiene identificación, no puede votar");
} else {
  console.log("No puede votar por ser menor de edad");
}
