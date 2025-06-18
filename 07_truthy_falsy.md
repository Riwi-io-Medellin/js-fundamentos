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

---

## Expansión Teórica: ¿Qué significa truthy y falsy?

### ¿Qué es un contexto booleano?
Un contexto booleano es cualquier situación donde JavaScript espera un valor verdadero (`true`) o falso (`false`). Esto ocurre, por ejemplo, en condicionales (`if`, `while`, operadores lógicos, etc.).

### Todos los valores falsy en JavaScript
Solo hay 6 valores que se consideran falsy:
- `false`
- `0` y `-0`
- `""` (cadena vacía)
- `null`
- `undefined`
- `NaN` (Not a Number)

Cualquier otro valor es truthy.

### Ejemplos de valores truthy
- Cualquier número distinto de 0 (positivo o negativo): `42`, `-7`
- Cadenas no vacías: `"hola"`, `"0"`, `"false"`
- Objetos y arrays (aunque estén vacíos): `{}`, `[]`
- Funciones

### ¿Por qué es importante?
- Permite escribir condicionales más cortas y expresivas.
- Ayuda a validar datos de entrada fácilmente.
- Es fundamental para evitar errores lógicos en tu código.

### Ejemplos prácticos
```js
if ([]) {
  console.log("Un array vacío es truthy");
}

if (0) {
  console.log("Esto no se ejecuta");
} else {
  console.log("Cero es falsy");
}

let nombre = "";
if (!nombre) {
  console.log("El nombre está vacío o es falsy");
}
```

### Advertencias y buenas prácticas
- No confundas `"0"` (cadena) con `0` (número): la cadena es truthy, el número es falsy.
- Un objeto vacío `{}` o un array vacío `[]` siempre son truthy, aunque "no tengan nada".
- Usa doble negación (`!!`) para convertir cualquier valor a su equivalente booleano:

```js
console.log(!!"hola"); // true
console.log(!!0);      // false
```

Esta teoría ampliada te ayudará a comprender cómo JavaScript evalúa los valores en condicionales y a evitar errores comunes al trabajar con datos y validaciones.

