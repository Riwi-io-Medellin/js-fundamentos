// Functions Exercises

// Exercise 1: Write a function that receives two numbers and returns their sum.
function add(a, b) {
  return a + b;
}

console.log("Sum of 5 and 3:", add(5, 3));

// Arrow function version
const addArrow = (a, b) => a + b;
console.log("Sum with arrow function of 10 and 7:", addArrow(10, 7));

// Exercise 2: Create a function that determines if a number is even or odd.
function isEven(number) {
  return number % 2 === 0;
}

const number1 = 24;
const number2 = 33;

console.log(`${number1} is ${isEven(number1) ? 'even' : 'odd'}`);
console.log(`${number2} is ${isEven(number2) ? 'even' : 'odd'}`);

// Additional exercise: Function that calculates the area of different shapes
function calculateArea(shape, ...dimensions) {
  switch (shape.toLowerCase()) {
    case 'square':
      return dimensions[0] * dimensions[0];
    case 'rectangle':
      return dimensions[0] * dimensions[1];
    case 'triangle':
      return (dimensions[0] * dimensions[1]) / 2;
    case 'circle':
      return Math.PI * dimensions[0] * dimensions[0];
    default:
      return 'Shape not recognized';
  }
}

console.log("Area of a square with side 5:", calculateArea('square', 5));
console.log("Area of a rectangle 6x4:", calculateArea('rectangle', 6, 4));
console.log("Area of a triangle with base 8 and height 3:", calculateArea('triangle', 8, 3));
console.log("Area of a circle with radius 2:", calculateArea('circle', 2));
