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

---

## Variables y Condicionales en JavaScript

### Variables en Profundidad

- **¿Qué es una variable?**
  Una variable es un espacio en memoria donde se almacena un valor que puede cambiar durante la ejecución del programa (excepto si es `const`).

- **Tipos de variables:**
  - `var`: Antiguamente la única forma de declarar variables. Su alcance es de función (function scope) y puede causar confusión por el hoisting (las variables se "elevan" al inicio del contexto).
  - `let`: Introducida en ES6, tiene alcance de bloque (block scope), lo que la hace más segura y predecible. Es la opción recomendada para variables que pueden cambiar.
  - `const`: También de ES6, su valor no puede ser reasignado después de la declaración. Ideal para valores constantes o referencias que no deben cambiar.

- **Ejemplo de diferencias:**

```js
if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}
console.log(x); // 10 (var tiene alcance de función)
// console.log(y); // Error (let tiene alcance de bloque)
// console.log(z); // Error (const tiene alcance de bloque)
```

- **Buenas prácticas:**
  - Usa `let` para variables que cambian y `const` por defecto.
  - Evita `var` salvo para comprender código antiguo.
  - Nombra tus variables de forma descriptiva y clara.

- **Tipos de datos comunes:**
  - Números (`number`)
  - Cadenas de texto (`string`)
  - Booleanos (`boolean`)
  - Objetos (`object`)
  - Arreglos (`array`)
  - Null y undefined

### Condicionales en Profundidad

- **¿Qué es un condicional?**
  Es una estructura que permite tomar decisiones en el código, ejecutando diferentes bloques según se cumpla (o no) una condición.

- **Operadores de comparación:**
  - `==` Igualdad (compara valores, convierte tipos si es necesario)
  - `===` Igualdad estricta (compara valor y tipo, recomendado)
  - `!=` Diferente
  - `!==` Diferente estricto
  - `<`, `>`, `<=`, `>=` Comparaciones numéricas

- **Ejemplo de comparación estricta:**

```js
let numero = "18";
if (numero === 18) {
  console.log("Número es igual a 18 y es tipo número");
} else {
  console.log("No pasa la condición estricta");
}
```

- **Estructuras condicionales alternativas:**
  - `else if`: Permite evaluar múltiples condiciones.
  - `switch`: Útil para comparar una variable contra varios valores posibles.
  - Operador ternario: Sintaxis corta para condicionales simples.

```js
// else if
if (edad < 13) {
  console.log("Niño");
} else if (edad < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// switch
switch (edad) {
  case 18:
    console.log("Tienes 18 años");
    break;
  case 21:
    console.log("Tienes 21 años");
    break;
  default:
    console.log("Edad no específica");
}

// Operador ternario
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
```

- **Buenas prácticas con condicionales:**
  - Usa siempre `===` para evitar errores de tipo.
  - Mantén el código legible y evita anidar demasiados condicionales.
  - Comenta condiciones complejas para mayor claridad.

