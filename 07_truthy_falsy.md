# Valores Truthy y Falsy en JavaScript

- **Falsy**: valores que se evalúan como `false` en un contexto booleano.
  - Ej: `false`, `0`, `""`, `null`, `undefined`, `NaN`

- **Truthy**: cualquier valor que no sea falsy.

```js
if ("") {
  console.log("Esto no se ejecuta");
}

if ("hola") {
  console.log("Esto sí se ejecuta");
}
```

## Ejercicios Propuestos

1. Prueba distintos valores en una condición if y observa qué se ejecuta.

2. Escribe una función que reciba un valor y retorne si es truthy o falsy.

Resuelve en `/ejercicios/truthy_falsy.js`
