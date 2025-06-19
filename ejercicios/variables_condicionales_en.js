// Variables and Conditionals Exercises

// Exercise 1: Declare a variable for your name and another for your age.
// Print a personalized message using a conditional.
let name = "Your name"; // Change this to your name
let age = 25; // Change this to your age

if (age >= 18) {
  console.log(`Hello ${name}, you are of legal age.`);
} else {
  console.log(`Hello ${name}, you are underage.`);
}

// Exercise 2: Write a condition that prints "Access allowed"
// only if age is greater than or equal to 18.
if (age >= 18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

// Additional exercise: Check if a person can vote
// (must be over 18 years old and have identification)
let hasIdentification = true; // Change to false to test different results

if (age >= 18 && hasIdentification) {
  console.log("Can vote");
} else if (age >= 18 && !hasIdentification) {
  console.log("Is of legal age but has no identification, cannot vote");
} else {
  console.log("Cannot vote because underage");
}
