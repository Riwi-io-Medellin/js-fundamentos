# Functions in JavaScript

Functions allow you to reuse code.

```js
function greet(name) {
  return `Hello, ${name}`;
}

const message = greet("Sebastián");
console.log(message);
```

## Arrow functions:

```js
const sum = (a, b) => a + b;
console.log(sum(3, 4)); // 7
```

---

## Theoretical Expansion: What is a function and how is it used?

### What is a function?
A function is a reusable block of code designed to perform a specific task. It can receive parameters (inputs) and return a value (output).

### Parts of a function
- **Name:** How you identify the function.
- **Parameters:** Values the function receives to work with.
- **Body:** The block of code that performs the task.
- **Return value:** The result the function delivers (optional).

```js
function add(a, b) { // name: add, parameters: a, b
  return a + b;      // body and return value
}
```

### Function declaration vs expression
- **Declaration:**
```js
function greet() {
  console.log("Hello!");
}
greet(); // Can be called before or after declaration
```
- **Expression:**
```js
const farewell = function() {
  console.log("Goodbye!");
};
farewell(); // Can only be called after declaration
```

### Parameters and arguments
- **Parameters** are variables defined in the function.
- **Arguments** are the actual values you pass when calling the function.

```js
function multiply(x, y) { // x and y are parameters
  return x * y;
}
multiply(2, 3); // 2 and 3 are arguments
```

### Return value (`return`)
- If you use `return`, the function returns that value and ends its execution.
- If you don't use `return`, the function returns `undefined` by default.

```js
function square(n) {
  return n * n;
}
console.log(square(5)); // 25
```

### Arrow functions
- Shorter syntax introduced in ES6.
- Ideal for short functions and simple expressions.

```js
const greet = name => `Hello, ${name}`;
console.log(greet("Ana"));
```

### Best practices
- Use descriptive names for functions.
- Each function should do one thing (single responsibility principle).
- If a function is very long, split it into smaller functions.
- Comment on complex functions for clarity.

### Practical example
```js
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

This expanded theory will help you understand what functions are, how to declare them, how to use them, and why they are a fundamental tool in any programming language.
