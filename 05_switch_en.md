# Switch in JavaScript

`switch` allows you to handle multiple conditions in a clean way.

```js
const color = "green";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "green":
    console.log("The color is green");
    break;
  default:
    console.log("Unrecognized color");
}
```

---

## Theoretical Expansion: What is switch and how does it work?

### What is switch?
A control structure that allows you to execute different blocks of code depending on the value of a single variable or expression.

```js
switch (expression) {
  case value1:
    // Code if expression === value1
    break;
  case value2:
    // Code if expression === value2
    break;
  default:
    // Code if no case matches
}
```

### How does it work?
- The expression inside switch is evaluated once.
- The result is compared with each case value.
- If there is a match, the block for that case is executed until a `break` is found.
- If no case matches, the `default` block is executed (optional).

### Differences with if/else
- switch is cleaner and easier to read when you have many conditions on the same value.
- if/else is more flexible for complex conditions or different variables.

### Importance of break and default
- `break` stops the execution of the switch. If omitted, the code "falls through" to the next case, which can be useful but may cause errors if not intended.
- `default` runs if no case matches. It's optional but recommended to handle unexpected values.

### Practical example: days of the week
```js
const day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Friday!");
    break;
  default:
    console.log("Weekend or unrecognized day");
}
```

- Use switch only when comparing the same value against multiple options.
- Use descriptive names and keep blocks short and clear.

### Visual summary
| switch vs if/else           | switch                                 | if/else                  |
|----------------------------|-----------------------------------------|--------------------------|
| Syntax                     | Cleaner with many cases                 | Better for complex conditions |
| Comparison                 | Only strict equality (===)              | Can use any operator     |
| Recommended use            | Multiple values of the same variable    | Varied conditions        |

This expanded theory will help you understand when and how to use switch, its advantages and warnings, and to write more readable code in situations with many possible options.
