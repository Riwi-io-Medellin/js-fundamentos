// Truthy and Falsy Values Exercises

// Exercise 1: Test different values in an if condition and observe what runs.
console.log("Evaluation of values in if conditions:");

// Falsy values
console.log("\nFalsy values (evaluate as false):");

if (false) {
  console.log("false is truthy");
} else {
  console.log("false is falsy");
}

if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

if ("") {
  console.log("Empty string is truthy");
} else {
  console.log("Empty string is falsy");
}

if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}

if (undefined) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsy");
}

if (NaN) {
  console.log("NaN is truthy");
} else {
  console.log("NaN is falsy");
}

// Truthy values
console.log("\nTruthy values (evaluate as true):");

if (true) {
  console.log("true is truthy");
} else {
  console.log("true is falsy");
}

if (1) {
  console.log("1 is truthy");
} else {
  console.log("1 is falsy");
}

if ("hello") {
  console.log("'hello' is truthy");
} else {
  console.log("'hello' is falsy");
}

if ([]) {
  console.log("Empty array is truthy");
} else {
  console.log("Empty array is falsy");
}

if ({}) {
  console.log("Empty object is truthy");
} else {
  console.log("Empty object is falsy");
}

// Exercise 2: Write a function that receives a value and returns if it is truthy or falsy.
function isTruthy(value) {
  if (value) {
    return `${value} is truthy`;
  } else {
    return `${value} is falsy`;
  }
}

console.log("\nTests with the isTruthy function:");
console.log(isTruthy(100));
console.log(isTruthy(0));
console.log(isTruthy("JavaScript"));
console.log(isTruthy(""));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy([]));
console.log(isTruthy({}));

// Additional exercise: Practical use of truthy/falsy in real code
console.log("\nPractical usage examples:");

// Check if a user has provided a name
function greet(name) {
  // If name is falsy (empty, null, undefined), use a default value
  const realName = name || "Guest";
  return `Hello, ${realName}!`;
}

console.log(greet("Maria"));  // With provided name
console.log(greet(""));       // With empty string
console.log(greet());         // Without providing a name

// Execute a function only if it exists
const config = {
  debug: true,
  logError: function(message) {
    console.log(`ERROR: ${message}`);
  }
};

function registerError(message) {
  // Only call logError if it exists (is truthy)
  config.logError && config.logError(message);
}

registerError("Something went wrong");
