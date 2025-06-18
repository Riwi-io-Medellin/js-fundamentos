// Ejercicios de Valores Truthy y Falsy

// Ejercicio 1: Prueba distintos valores en una condición if y observa qué se ejecuta.
console.log("Evaluación de valores en condiciones if:");

// Valores falsy
console.log("\nValores falsy (se evalúan como false):");

if (false) {
  console.log("false es truthy");
} else {
  console.log("false es falsy");
}

if (0) {
  console.log("0 es truthy");
} else {
  console.log("0 es falsy");
}

if ("") {
  console.log("String vacío es truthy");
} else {
  console.log("String vacío es falsy");
}

if (null) {
  console.log("null es truthy");
} else {
  console.log("null es falsy");
}

if (undefined) {
  console.log("undefined es truthy");
} else {
  console.log("undefined es falsy");
}

if (NaN) {
  console.log("NaN es truthy");
} else {
  console.log("NaN es falsy");
}

// Valores truthy
console.log("\nValores truthy (se evalúan como true):");

if (true) {
  console.log("true es truthy");
} else {
  console.log("true es falsy");
}

if (1) {
  console.log("1 es truthy");
} else {
  console.log("1 es falsy");
}

if ("hola") {
  console.log("'hola' es truthy");
} else {
  console.log("'hola' es falsy");
}

if ([]) {
  console.log("Array vacío es truthy");
} else {
  console.log("Array vacío es falsy");
}

if ({}) {
  console.log("Objeto vacío es truthy");
} else {
  console.log("Objeto vacío es falsy");
}

// Ejercicio 2: Escribe una función que reciba un valor y retorne si es truthy o falsy.
function esTruthy(valor) {
  if (valor) {
    return `${valor} es truthy`;
  } else {
    return `${valor} es falsy`;
  }
}

console.log("\nPruebas con la función esTruthy:");
console.log(esTruthy(100));
console.log(esTruthy(0));
console.log(esTruthy("JavaScript"));
console.log(esTruthy(""));
console.log(esTruthy(null));
console.log(esTruthy(undefined));
console.log(esTruthy([]));
console.log(esTruthy({}));

// Ejercicio adicional: Uso práctico de truthy/falsy en código real
console.log("\nEjemplos de uso práctico:");

// Verificar si un usuario ha proporcionado un nombre
function saludar(nombre) {
  // Si nombre es falsy (vacío, null, undefined), usa un valor predeterminado
  const nombreReal = nombre || "Invitado";
  return `¡Hola, ${nombreReal}!`;
}

console.log(saludar("María"));  // Con nombre proporcionado
console.log(saludar(""));       // Con string vacío
console.log(saludar());         // Sin proporcionar nombre

// Ejecutar una función solo si existe
const config = {
  debug: true,
  logError: function(mensaje) {
    console.log(`ERROR: ${mensaje}`);
  }
};

// Verificar si la función existe antes de llamarla
function registrarError(mensaje) {
  // Solo llama a logError si existe (es truthy)
  config.logError && config.logError(mensaje);
}

registrarError("Algo salió mal");
