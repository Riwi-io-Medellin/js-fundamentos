// Repetitive Control Structures Exercises

// Exercise 1: Print numbers from 1 to 10 using a for loop.
console.log("Numbers from 1 to 10 with for:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 2: Sum even numbers from 1 to 20 using while.
console.log("\nSum of even numbers from 1 to 20 with while:");
let number = 1;
let evenSum = 0;

while (number <= 20) {
  if (number % 2 === 0) {
    evenSum += number;
    console.log(`Even number: ${number}, Accumulated sum: ${evenSum}`);
  }
  number++;
}

console.log(`The total sum of even numbers from 1 to 20 is: ${evenSum}`);

// Additional exercise: Multiplication table using do...while
console.log("\nMultiplication table of 5 using do...while:");
let multiplier = 1;

do {
  console.log(`5 x ${multiplier} = ${5 * multiplier}`);
  multiplier++;
} while (multiplier <= 10);
