# Funciones en JavaScript

Las funciones permiten reutilizar código.

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

const mensaje = saludar("Sebastián");
console.log(mensaje);
```

## Funciones flecha:

```js
const suma = (a, b) => a + b;
console.log(suma(3, 4)); // 7
```

## Ejercicios Propuestos

1. Escribe una función que reciba dos números y devuelva su suma.

2. Crea una función que determine si un número es par o impar.

Resuelve en `/ejercicios/funciones.js`
