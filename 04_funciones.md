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

---

## Expansión Teórica: ¿Qué es una función y cómo se usa?

### ¿Qué es una función?
Una función es un bloque de código que realiza una tarea específica y puede ser reutilizado en diferentes partes del programa. Piensa en una función como una "máquina" que recibe instrucciones (parámetros), hace algo con ellas y, si quieres, te da un resultado (valor de retorno).

**Analogía:**
Imagina una licuadora: le pones frutas (parámetros), la enciendes (ejecutas la función) y obtienes un jugo (valor de retorno).

### Partes de una función
- **Nombre:** Cómo identificas la función.
- **Parámetros:** Valores que recibe la función para trabajar.
- **Cuerpo:** El bloque de código que realiza la tarea.
- **Valor de retorno:** El resultado que la función entrega (opcional).

```js
function sumar(a, b) { // nombre: sumar, parámetros: a, b
  return a + b;        // cuerpo y valor de retorno
}
```

### Declaración vs Expresión de función
- **Declaración:**
```js
function saludar() {
  console.log("Hola!");
}
saludar(); // Se puede llamar antes o después de declararla
```
- **Expresión:**
```js
const despedir = function() {
  console.log("Adiós!");
};
despedir(); // Solo se puede llamar después de declararla
```

### Parámetros y argumentos
- **Parámetros** son variables que se definen en la función.
- **Argumentos** son los valores reales que pasas al llamar la función.

```js
function multiplicar(x, y) { // x y y son parámetros
  return x * y;
}
multiplicar(2, 3); // 2 y 3 son argumentos
```

### Valor de retorno (`return`)
- Si usas `return`, la función devuelve ese valor y termina su ejecución.
- Si no usas `return`, la función devuelve `undefined` por defecto.

```js
function cuadrado(n) {
  return n * n;
}
console.log(cuadrado(5)); // 25
```

### Funciones flecha (arrow functions)
- Sintaxis más corta introducida en ES6.
- No tienen su propio `this` (útil en programación avanzada).
- Ideales para funciones cortas y expresiones simples.

```js
const saludar = nombre => `Hola, ${nombre}`;
console.log(saludar("Ana"));
```

### Buenas prácticas
- Usa nombres descriptivos para las funciones.
- Cada función debe hacer una sola cosa (principio de responsabilidad única).
- Si una función es muy larga, divídela en funciones más pequeñas.
- Comenta funciones complejas para mayor claridad.

### Ejemplo práctico
```js
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esPar(4)); // true
console.log(esPar(7)); // false
```

Esta teoría ampliada te ayudará a entender qué son las funciones, cómo se declaran, cómo se usan y por qué son una herramienta fundamental en cualquier lenguaje de programación.

