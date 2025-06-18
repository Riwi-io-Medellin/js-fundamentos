// Ejercicios de Funciones

// Ejercicio 1: Escribe una función que reciba dos números y devuelva su suma.
function sumar(a, b) {
  return a + b;
}

console.log("Suma de 5 y 3:", sumar(5, 3));

// Versión con función flecha
const sumarFlecha = (a, b) => a + b;
console.log("Suma con función flecha de 10 y 7:", sumarFlecha(10, 7));

// Ejercicio 2: Crea una función que determine si un número es par o impar.
function esPar(numero) {
  return numero % 2 === 0;
}

const numero1 = 24;
const numero2 = 33;

console.log(`${numero1} es ${esPar(numero1) ? 'par' : 'impar'}`);
console.log(`${numero2} es ${esPar(numero2) ? 'par' : 'impar'}`);

// Ejercicio adicional: Función que calcula el área de diferentes figuras
function calcularArea(figura, ...dimensiones) {
  switch (figura.toLowerCase()) {
    case 'cuadrado':
      return dimensiones[0] * dimensiones[0];
    case 'rectangulo':
      return dimensiones[0] * dimensiones[1];
    case 'triangulo':
      return (dimensiones[0] * dimensiones[1]) / 2;
    case 'circulo':
      return Math.PI * dimensiones[0] * dimensiones[0];
    default:
      return 'Figura no reconocida';
  }
}

console.log("Área de un cuadrado de lado 5:", calcularArea('cuadrado', 5));
console.log("Área de un rectángulo de 6x4:", calcularArea('rectangulo', 6, 4));
console.log("Área de un triángulo de base 8 y altura 3:", calcularArea('triangulo', 8, 3));
console.log("Área de un círculo de radio 2:", calcularArea('circulo', 2));
