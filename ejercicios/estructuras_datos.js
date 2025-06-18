// Ejercicios de Estructuras de Datos

// Ejercicio 1: Declara un array con 5 lenguajes de programación.
const lenguajes = ["JavaScript", "Python", "Java", "C++", "PHP"];

console.log("Lista de lenguajes de programación:");
lenguajes.forEach((lenguaje, indice) => {
  console.log(`${indice + 1}. ${lenguaje}`);
});

// Operaciones con arrays
console.log("\nOperaciones con arrays:");
console.log("Primer lenguaje:", lenguajes[0]);
console.log("Último lenguaje:", lenguajes[lenguajes.length - 1]);

// Añadir un nuevo lenguaje
lenguajes.push("Ruby");
console.log("Después de añadir Ruby:", lenguajes);

// Eliminar el último lenguaje
const eliminado = lenguajes.pop();
console.log(`Se eliminó: ${eliminado}`);
console.log("Array actual:", lenguajes);

// Ejercicio 2: Crea un objeto que represente un libro (título, autor, año).
const libro = {
  titulo: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  año: 1605,
  genero: "Novela",
  paginas: 863
};

console.log("\nInformación del libro:");
console.log(`Título: ${libro.titulo}`);
console.log(`Autor: ${libro.autor}`);
console.log(`Año de publicación: ${libro.año}`);
console.log(`Género: ${libro.genero}`);
console.log(`Número de páginas: ${libro.paginas}`);

// Ejercicio adicional: Array de objetos
const biblioteca = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967
  },
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949
  }
];

console.log("\nLibros en la biblioteca:");
biblioteca.forEach((libro, indice) => {
  console.log(`Libro ${indice + 1}: "${libro.titulo}" de ${libro.autor} (${libro.año})`);
});

// Filtrar libros anteriores a 1950
const librosAntiguos = biblioteca.filter(libro => libro.año < 1950);
console.log("\nLibros publicados antes de 1950:");
librosAntiguos.forEach(libro => {
  console.log(`"${libro.titulo}" (${libro.año})`);
});
