// Function Binding - Day 1
// 1. we use bind() to bind a function with a method, which returns a new modified function
// 2. Unlike call() and apply(), bind() returns a new instance of a funcion, so we need to call the new function in order to run it.
// 3. bind takes parameters as series of arguments, where first argument is always the reference of an object.

let person1 = {
  firstName: "Rahul",
  lastName: "Biswakarma",
};

function printDetails(state, country) {
  console.log(
    `${this.firstName} ${this.lastName}, live in ${state}, ${country}.`
  );
}

let printDetailsPerson1 = printDetails.bind(person1, "Odisha");
printDetailsPerson1("India");

function printDetails(state) {
  console.log(`${this.firstName} ${this.lastName}, likes in ${state}`);
}

printDetails.call(person1, "Odisha");
printDetails.apply(person2, ["Odisha"]);
