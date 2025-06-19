# Truthy and Falsy Values in JavaScript

- **Falsy**: values that evaluate to `false` in a boolean context.
  - E.g.: `false`, `0`, `""`, `null`, `undefined`, `NaN`

- **Truthy**: any value that is not falsy.

```js
if ("") {
  console.log("This does not run");
}

if ("hello") {
  console.log("This does run");
}
```

---

## Theoretical Expansion: What does truthy and falsy mean?

### What is a boolean context?
A situation where JavaScript expects a value to be true or false, such as in conditionals (`if`, `while`, etc.).

### Examples of falsy values
- `false`
- `0`, `-0`, `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Examples of truthy values
- Any number other than 0 (positive or negative): `42`, `-7`
- Non-empty strings: `"hello"`, `"0"`, `"false"`
- Objects and arrays (even if empty): `{}`, `[]`
- Functions

### Why is it important?
- Allows you to write shorter and more expressive conditionals.
- Helps easily validate input data.
- It's fundamental to avoid logical errors in your code.

### Practical examples
```js
if ([]) {
  console.log("An empty array is truthy");
}

if (0) {
  console.log("This does not run");
} else {
  console.log("Zero is falsy");
}

let name = "";
if (!name) {
  console.log("The name is empty or falsy");
}
```

### Warnings and best practices
- Do not confuse `"0"` (string) with `0` (number): the string is truthy, the number is falsy.
- An empty object `{}` or array `[]` is always truthy, even if it "has nothing".
- Use double negation (`!!`) to convert any value to its boolean equivalent:

```js
console.log(!!"hello"); // true
console.log(!!0);      // false
```

This expanded theory will help you understand how JavaScript evaluates values in conditionals and avoid common mistakes when working with data and validations.
