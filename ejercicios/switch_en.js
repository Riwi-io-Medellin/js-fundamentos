// Switch Exercises

// Exercise 1: Create a switch that prints a message according to the day of the week.
const weekDay = 3; // 1: Monday, 2: Tuesday, ..., 7: Sunday

switch (weekDay) {
  case 1:
    console.log("Today is Monday. Start of the week!");
    break;
  case 2:
    console.log("Today is Tuesday. Keep going!");
    break;
  case 3:
    console.log("Today is Wednesday. Midweek!");
    break;
  case 4:
    console.log("Today is Thursday. Almost Friday!");
    break;
  case 5:
    console.log("Today is Friday. The weekend is here!");
    break;
  case 6:
    console.log("Today is Saturday. Enjoy your weekend!");
    break;
  case 7:
    console.log("Today is Sunday. Rest day!");
    break;
  default:
    console.log("Invalid day");
}

// Additional exercise: Letter grade
const grade = 85; // Change this value to test different results
let letter;

switch (true) {
  case grade >= 90:
    letter = 'A';
    break;
  case grade >= 80:
    letter = 'B';
    break;
  case grade >= 70:
    letter = 'C';
    break;
  case grade >= 60:
    letter = 'D';
    break;
  default:
    letter = 'F';
}

console.log(`Your grade is ${grade}, equivalent to a ${letter}`);

// Additional exercise: Options menu
const option = 2; // Change this value to test different options
console.log("OPTIONS MENU:");
console.log("1. View profile");
console.log("2. Edit settings");
console.log("3. Log out");
console.log("4. Help");

switch (option) {
  case 1:
    console.log("You selected: View profile");
    break;
  case 2:
    console.log("You selected: Edit settings");
    break;
  case 3:
    console.log("You selected: Log out");
    break;
  case 4:
    console.log("You selected: Help");
    break;
  default:
    console.log("Invalid option. Select an option from 1 to 4.");
}
