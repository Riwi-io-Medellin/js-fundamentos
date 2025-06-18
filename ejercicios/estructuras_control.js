// Ejercicios de Estructuras de Control Repetitivas

// Ejercicio 1: Imprime los números del 1 al 10 usando un for.
console.log("Números del 1 al 10 con for:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ejercicio 2: Suma los números pares del 1 al 20 usando while.
console.log("\nSuma de números pares del 1 al 20 con while:");
let numero = 1;
let sumaPares = 0;

while (numero <= 20) {
  if (numero % 2 === 0) {
    sumaPares += numero;
    console.log(`Número par: ${numero}, Suma acumulada: ${sumaPares}`);
  }
  numero++;
}

console.log(`La suma total de los números pares del 1 al 20 es: ${sumaPares}`);

// Ejercicio adicional: Tabla de multiplicar usando do...while
console.log("\nTabla de multiplicar del 5 usando do...while:");
let multiplicador = 1;

do {
  console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
  multiplicador++;
} while (multiplicador <= 10);
