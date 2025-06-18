# Estructuras de Datos en JavaScript

## Arrays

```js
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[0]); // manzana
```

## Objetos

```js
let persona = {
  nombre: "Ana",
  edad: 30
};
console.log(persona.nombre); // Ana
```

---

## Expansión Teórica: Estructuras de Datos para Principiantes

### ¿Qué es una estructura de datos?
Una estructura de datos es una forma de organizar y almacenar información en la memoria para poder utilizarla de manera eficiente. En JavaScript, las más comunes son los arrays y los objetos.

### Arrays
- Un array es una lista ordenada de elementos. Cada elemento tiene una posición (índice) que empieza en 0.
- Sirven para almacenar colecciones de datos, como listas de nombres, números, etc.

**Ejemplo:**
```js
let numeros = [10, 20, 30, 40];
console.log(numeros[2]); // 30
```

**Métodos básicos de arrays:**
- `.push(elemento)`: Agrega un elemento al final.
- `.pop()`: Elimina el último elemento.
- `.length`: Devuelve la cantidad de elementos.
- `.forEach()`: Permite recorrer todos los elementos.

**Ejemplo:**
```js
let colores = ["rojo", "azul"];
colores.push("verde"); // ["rojo", "azul", "verde"]
colores.pop(); // ["rojo", "azul"]
console.log(colores.length); // 2
colores.forEach(function(color) {
  console.log(color);
});
```

### Objetos
- Un objeto es una colección de datos relacionados, representados como pares clave:valor.
- Sirven para describir entidades más complejas, como una persona, un libro, un auto, etc.

**Ejemplo:**
```js
let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anio: 1967
};
console.log(libro.titulo); // "Cien años de soledad"
```

**Acceso y modificación de propiedades:**
```js
libro.anio = 1970; // Cambia el año
libro.genero = "Realismo mágico"; // Agrega nueva propiedad
```

**Métodos en objetos:**
Los objetos pueden tener funciones internas llamadas métodos.
```js
let persona = {
  nombre: "Ana",
  saludar: function() {
    return "Hola, soy " + this.nombre;
  }
};
console.log(persona.saludar());
```

### Diferencias entre arrays y objetos
| Característica   | Array                        | Objeto                         |
|------------------|------------------------------|--------------------------------|
| Orden            | Sí, por índices numéricos    | No, por claves (nombres)       |
| Uso principal    | Listas de datos similares    | Datos relacionados y variados  |
| Acceso           | Por posición (array[0])      | Por clave (objeto.clave)       |

### Buenas prácticas y advertencias
- Usa arrays para listas ordenadas y objetos para entidades con propiedades.
- No mezcles tipos de datos en un mismo array salvo que sea necesario.
- Los arrays pueden contener objetos, y los objetos pueden tener arrays como propiedades.
- Accede a las propiedades de los objetos con `.` o `[]` (útil si la clave es dinámica).

**Ejemplo combinado:**
```js
let estudiantes = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 22 }
];
console.log(estudiantes[1].nombre); // "Luis"
```

Esta teoría ampliada te ayudará a comprender cómo y cuándo usar arrays y objetos en JavaScript, facilitando la organización y manejo de datos en tus programas.
