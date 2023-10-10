console.log("I'm ready!");

// Itereation 1: Names
let driversName = "Michael";
console.log(`The driver's name is ${driversName}`);

let navigatorsName = "Paul";
console.log(`The navigator's name is ${navigatorsName}`);

// // Iteration 2: Conditionals
if (driversName.length > navigatorsName) {
  console.log("The driver has the longest name, it has XX characters");
} else if (driversName < navigatorsName) {
  console.log(
    "It seems that the navigator has the longest name, it has XX characters"
  );
} else {
  console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
// 3.1  Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

driversName = "John";

for (let i = 0; i < driversName.length; i++) {
  console.log(`${driversName[i].toUpperCase().slice}`);
}

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let firstName = "John";

for (let i = firstName.length - 1; i >= 0; i--) {
  console.log(firstName);
}

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

driversName = "Sean";
navigatorsName = "Susan";

if (driversName < navigatorsName) {
  console.log("The driver's name goes first.");
} else if (driversName > navigatorsName) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
