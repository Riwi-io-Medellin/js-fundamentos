# Repetitive Control Structures

Repetitive structures allow you to execute a block of code multiple times.

## for

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## while

```js
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}
```

## do...while

```js
let number = 0;
do {
  console.log(number);
  number++;
} while (number < 5);
```

---

## Theoretical Expansion: Loops or Repetitive Structures in JavaScript

- To iterate over lists, arrays, or perform repetitive calculations.
- To process data until a condition is met.

### Main types of loops in JavaScript

#### 1. for loop
- Most used when you know how many times you need to repeat an action.
- Has three parts: initialization, condition, and update.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i); // Prints from 1 to 10
}
```
- You can use it to iterate over arrays:
```js
const fruits = ["apple", "pear", "grape"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### 2. while loop
- Used when you don't know exactly how many times the action will be repeated, but it depends on a condition.
- The condition is evaluated before each iteration.

```js
let balance = 100;
while (balance > 0) {
  console.log("You have $" + balance);
  balance -= 20;
}
```

#### 3. do...while loop
- Similar to `while`, but the condition is evaluated after executing the block, so the code runs at least once.

```js
let attempts = 0;
do {
  console.log("Attempt number: " + attempts);
  attempts++;
} while (attempts < 3);
```

### Key differences between loops

| Loop        | When to use it?                      | Evaluates condition first? | Always executes at least once? |
|-------------|--------------------------------------|---------------------------|-------------------------------|
| for         | Known number of repetitions          | Yes                       | No                            |
| while       | Unknown number, depends on condition | Yes                       | No                            |
| do...while  | Execute at least once                | No (afterwards)           | Yes                           |

### Best practices and warnings
- Avoid infinite loops: Make sure the exit condition is eventually met.
- Use descriptive variable names for clarity.
- If iterating over arrays, use the `.length` property to avoid errors.
- You can use `break` to exit a loop early, and `continue` to skip to the next iteration.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // The loop stops when i is 5
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skips 3
  console.log(i);
}
```

This expanded theory will help you understand when and how to use each type of loop in JavaScript, making it easier to automate tasks and efficiently process data.
