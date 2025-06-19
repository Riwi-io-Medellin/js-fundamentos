// Data Structures Exercises

// Exercise 1: Declare an array with 5 programming languages.
const languages = ["JavaScript", "Python", "Java", "C++", "PHP"];

console.log("List of programming languages:");
languages.forEach((language, index) => {
  console.log(`${index + 1}. ${language}`);
});

// Array operations
console.log("\nArray operations:");
console.log("First language:", languages[0]);
console.log("Last language:", languages[languages.length - 1]);

// Add a new language
languages.push("Ruby");
console.log("After adding Ruby:", languages);

// Remove the last language
const removed = languages.pop();
console.log(`Removed: ${removed}`);
console.log("Current array:", languages);

// Exercise 2: Create an object representing a book (title, author, year).
const book = {
  title: "Don Quixote de la Mancha",
  author: "Miguel de Cervantes",
  year: 1605,
  genre: "Novel",
  pages: 863
};

console.log("\nBook information:");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year of publication: ${book.year}`);
console.log(`Genre: ${book.genre}`);
console.log(`Number of pages: ${book.pages}`);

// Additional exercise: Array of objects
const library = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  }
];

console.log("\nBooks in the library:");
library.forEach((book, index) => {
  console.log(`Book ${index + 1}: "${book.title}" by ${book.author} (${book.year})`);
});

// Filter books published before 1950
const oldBooks = library.filter(book => book.year < 1950);
console.log("\nBooks published before 1950:");
oldBooks.forEach(book => {
  console.log(`"${book.title}" (${book.year})`);
});
