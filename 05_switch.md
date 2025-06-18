# Switch en JavaScript

`switch` permite manejar múltiples condiciones de forma limpia.

```js
const color = "verde";

switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "verde":
    console.log("El color es verde");
    break;
  default:
    console.log("Color no reconocido");
}
```

---

## Expansión Teórica: ¿Qué es y cómo funciona el switch?

### ¿Qué es el switch?
El switch es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código según el valor que tome esa expresión. Es especialmente útil cuando tienes muchas condiciones que comparar con el mismo valor.

### Estructura básica
```js
switch (expresion) {
  case valor1:
    // Código si expresion === valor1
    break;
  case valor2:
    // Código si expresion === valor2
    break;
  default:
    // Código si ningún caso coincide
}
```

### ¿Cómo funciona?
- La expresión dentro de switch se evalúa una vez.
- Se compara el resultado con cada valor de los casos (`case`).
- Si hay coincidencia, se ejecuta el bloque de ese caso hasta encontrar un `break`.
- Si ningún caso coincide, se ejecuta el bloque `default` (opcional).

### Diferencias con if/else
- switch es más limpio y fácil de leer cuando tienes muchas condiciones sobre el mismo valor.
- if/else es más flexible para condiciones complejas o diferentes variables.

### Importancia de break y default
- `break` detiene la ejecución del switch. Si se omite, el código "cae" al siguiente caso (fallthrough), lo que a veces es útil pero puede causar errores si no se desea.
- `default` se ejecuta si ningún caso coincide. Es opcional, pero recomendable para manejar valores inesperados.

### Ejemplo práctico: días de la semana
```js
const dia = "martes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "martes":
  case "miércoles":
  case "jueves":
    console.log("Mitad de semana");
    break;
  case "viernes":
    console.log("¡Viernes!");
    break;
  default:
    console.log("Fin de semana o día no válido");
}
```

### Advertencias y buenas prácticas
- Si olvidas el `break`, los casos siguientes también se ejecutarán (fallthrough).
- switch compara con `===` (igualdad estricta).
- Usa switch solo cuando compares el mismo valor contra múltiples opciones.
- Usa nombres descriptivos y mantén los bloques cortos y claros.

### Resumen visual
| switch vs if/else           | switch                                 | if/else                  |
|----------------------------|-----------------------------------------|--------------------------|
| Sintaxis                   | Más limpia con muchos casos             | Mejor para condiciones complejas |
| Comparación                | Solo igualdad estricta (===)            | Puede usar cualquier operador     |
| Uso recomendado            | Múltiples valores de una misma variable | Condiciones variadas             |

Esta teoría ampliada te ayudará a entender cuándo y cómo usar switch, sus ventajas y advertencias, y a escribir código más legible en situaciones con muchas opciones posibles.