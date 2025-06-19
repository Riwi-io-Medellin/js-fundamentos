# Data Structures in JavaScript

## Arrays

```js
let fruits = ["apple", "banana", "pear"];
console.log(fruits[0]); // apple
```

## Objects

```js
let person = {
  name: "Ana",
  age: 30
};
console.log(person.name); // Ana
```

---

## Theoretical Expansion: Data Structures for Beginners

### What is a data structure?
A data structure is a way of organizing and storing information in memory to use it efficiently. In JavaScript, the most common are arrays and objects.

### Arrays
An array is an ordered list of values. Each value is called an element and has a numeric position (index).

```js
let numbers = [10, 20, 30];
console.log(numbers[2]); // 30
```

**Basic array methods:**
- `.push(element)`: Adds an element to the end.
- `.pop()`: Removes the last element.
- `.length`: Returns the number of elements.
- `.forEach()`: Allows you to iterate over all elements.

**Example:**
```js
let colors = ["red", "blue"];
colors.push("green"); // ["red", "blue", "green"]
colors.pop(); // ["red", "blue"]
console.log(colors.length); // 2
colors.forEach(function(color) {
  console.log(color);
});
```

### Objects
- An object is a collection of related data, represented as key:value pairs.
- Used to describe more complex entities, like a person, a book, a car, etc.

**Example:**
```js
let book = {
  title: "One Hundred Years of Solitude",
  author: "Gabriel García Márquez",
  year: 1967
};
console.log(book.title); // "One Hundred Years of Solitude"
```

**Accessing and modifying properties:**
```js
book.year = 1970; // Change the year
book.genre = "Magic realism"; // Add new property
```

**Methods in objects:**
Objects can have internal functions called methods.
```js
let person = {
  name: "Ana",
  greet: function() {
    return "Hello, I am " + this.name;
  }
};
console.log(person.greet()); // "Hello, I am Ana"
```

### Arrays vs Objects
| Feature           | Arrays                       | Objects                        |
|-------------------|------------------------------|--------------------------------|
| Order             | Yes, by numeric indices      | No, by keys (names)            |
| Main use          | Lists of similar data        | Related and varied data        |
| Access            | By position (array[0])       | By key (object.key)            |

### Best practices and warnings
- Use arrays for ordered lists and objects for entities with properties.
- Do not mix data types in the same array unless necessary.
- Arrays can contain objects, and objects can have arrays as properties.
- Access object properties with `.` or `[]` (useful if the key is dynamic).

**Combined example:**
```js
let students = [
  { name: "Ana", age: 20 },
  { name: "Luis", age: 22 }
];
console.log(students[1].name); // "Luis"
```

This expanded theory will help you understand how and when to use arrays and objects in JavaScript, making it easier to organize and manage data in your programs.
