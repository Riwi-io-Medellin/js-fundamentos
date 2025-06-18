# Estructuras de Control Repetitivas

Las estructuras repetitivas permiten ejecutar un bloque de código múltiples veces.

## for

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## while

```js
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}
```

## do...while

```js
let numero = 0;
do {
  console.log(numero);
  numero++;
} while (numero < 5);
```

---

## Expansión Teórica: Bucles o Estructuras Repetitivas en JavaScript

Las estructuras repetitivas, también conocidas como bucles, permiten ejecutar un bloque de código varias veces de manera automática. Son esenciales para automatizar tareas y procesar datos de manera eficiente.

### ¿Por qué usar bucles?
- Para evitar repetir código manualmente.
- Para recorrer listas, arreglos o realizar cálculos repetitivos.
- Para procesar datos hasta cumplir una condición.

### Tipos principales de bucles en JavaScript

#### 1. Bucle `for`
- Es el más usado cuando sabes cuántas veces necesitas repetir una acción.
- Tiene tres partes: inicialización, condición y actualización.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i); // Imprime del 1 al 10
}
```
- Puedes usarlo para recorrer arreglos:
```js
const frutas = ["manzana", "pera", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

#### 2. Bucle `while`
- Se usa cuando no sabes exactamente cuántas veces se repetirá la acción, pero depende de una condición.
- La condición se evalúa antes de cada iteración.

```js
let saldo = 100;
while (saldo > 0) {
  console.log("Tienes $" + saldo);
  saldo -= 20;
}
```

#### 3. Bucle `do...while`
- Similar a `while`, pero la condición se evalúa después de ejecutar el bloque, así que el código se ejecuta al menos una vez.

```js
let intentos = 0;
do {
  console.log("Intento número: " + intentos);
  intentos++;
} while (intentos < 3);
```

### Diferencias clave entre los bucles
- `for`: Ideal cuando conoces el número de repeticiones.
- `while`: Útil cuando la cantidad de repeticiones depende de una condición externa.
- `do...while`: Útil cuando necesitas que el código se ejecute al menos una vez, sin importar la condición.

### Buenas prácticas y advertencias
- Evita bucles infinitos: Asegúrate de que la condición de salida se cumpla eventualmente.
- Usa nombres de variables descriptivos para mayor claridad.
- Si recorres arreglos, utiliza la propiedad `.length` para evitar errores.
- Puedes usar `break` para salir anticipadamente de un bucle, y `continue` para saltar a la siguiente iteración.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // El bucle se detiene cuando i es 5
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Salta el 3
  console.log(i);
}
```

### Resumen visual
| Bucle        | ¿Cuándo usarlo?                        | ¿Evalúa condición antes? | ¿Siempre ejecuta al menos una vez? |
|--------------|----------------------------------------|-------------------------|-------------------------------------|
| for          | Número conocido de repeticiones        | Sí                      | No                                  |
| while        | Número desconocido, depende de condición| Sí                      | No                                  |
| do...while   | Ejecutar al menos una vez              | No (después)            | Sí                                  |

Esta teoría ampliada te ayudará a comprender cuándo y cómo usar cada tipo de bucle en JavaScript, facilitando la automatización de tareas y el procesamiento eficiente de datos.