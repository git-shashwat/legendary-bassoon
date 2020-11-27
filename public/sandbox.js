"use strict";
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add")
        return numOne + numTwo;
    else
        return numOne - numTwo;
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old.");
};
var result = calc(24, 45, "add");
console.log(result);
greet("Ram", "Hey");
logDetails({ name: "Sita", age: 45 });
