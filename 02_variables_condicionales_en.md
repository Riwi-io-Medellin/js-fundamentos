# Variables and Conditionals in JavaScript

## Variables

Variables store data. In JS there are three main ways to declare them:

- **var** (no longer recommended)
- **let** (preferred for variables that change)
- **const** (for constant values)

```js
let age = 25;
const name = "Sebastián";
```

## Conditionals

They allow code to be executed based on a condition.

```js
if (age >= 18) {
  console.log("You are of legal age");
} else {
  console.log("You are underage");
}
```

## Proposed Exercises

1. Declare a variable for your name and another for your age. Print a personalized message using a conditional.

2. Write a condition that prints "Access allowed" only if the age is greater than or equal to 18.

Solve the exercises in `/ejercicios/variables_condicionales.js`

---

## Variables and Conditionals in JavaScript

### Variables in Depth

- **What is a variable?**
  A variable is a memory space where a value is stored that can change during program execution (except if it is `const`).

- **Types of variables:**
  - `var`: Formerly the only way to declare variables. Its scope is function scope and can cause confusion due to hoisting (variables are "lifted" to the beginning of the context).
  - `let`: Introduced in ES6, has block scope, making it safer and more predictable. It is the recommended option for variables that may change.
  - `const`: Also from ES6, its value cannot be reassigned after declaration. Ideal for constant values or references that should not change.

- **Example of differences:**

```js
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10
console.log(y); // ReferenceError
```

- **Best practices:**
  - Use `let` for variables that change and `const` by default.
  - Avoid `var` except to understand old code.
  - Name your variables descriptively and clearly.

- **Common data types:**
  - Numbers (`number`)
  - Strings (`string`)
  - Booleans (`boolean`)
  - Objects (`object`)
  - Arrays (`array`)
  - Null and undefined

### Conditionals in Depth

- **What is a conditional?**
  It is a structure that allows you to make decisions in code, executing different blocks depending on whether a condition is met (or not).

- **Comparison operators:**
  - `==` Equality (compares values, converts types if necessary)
  - `===` Strict equality (compares value and type, recommended)
  - `!=` Not equal
  - `!==` Strict not equal
  - `<`, `>`, `<=`, `>=` Numeric comparisons

- **Example of strict comparison:**

```js
let number = "18";
if (number === 18) {
  console.log("Number is equal to 18 and is of type number");
} else {
  console.log("Does not pass the strict condition");
}
```

- **Alternative conditional structures:**
  - `else if`: Allows evaluating multiple conditions.

```js
if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// switch
switch (age) {
  case 18:
    console.log("You are 18 years old");
    break;
  case 21:
    console.log("You are 21 years old");
    break;
  default:
    console.log("Non-specific age");
}

// Ternary operator
const message = age >= 18 ? "Of legal age" : "Underage";
console.log(message);
```

- **Best practices with conditionals:**
  - Always use `===` to avoid type errors.
  - Keep code readable and avoid nesting too many conditionals.
  - Comment on complex conditions for clarity.
