# Variables y Condicionales en JavaScript

## Variables

Las variables almacenan datos. En JS hay tres formas principales de declararlas:

- **var** (ya no recomendado)
- **let** (preferida para variables que cambian)
- **const** (para valores constantes)

```js
let edad = 25;
const nombre = "Sebastián";
```

## Condicionales

Permiten ejecutar código según una condición.

```js
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

## Ejercicios Propuestos

1. Declara una variable para tu nombre y otra para tu edad. Imprime un mensaje personalizado usando un condicional.

2. Escribe una condición que imprima "Acceso permitido" solo si la edad es mayor o igual a 18.

Resuelve los ejercicios en `/ejercicios/variables_condicionales.js`
