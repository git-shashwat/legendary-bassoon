// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") return numOne + numTwo;
  else return numOne - numTwo;
};

// example 3
type person = { name: string; age: number };
let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
};

let result = calc(24, 45, "add");

console.log(result);
greet("Ram", "Hey");
logDetails({ name: "Sita", age: 45 });
