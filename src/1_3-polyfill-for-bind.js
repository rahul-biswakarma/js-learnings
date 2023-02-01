// Day 1
// 1. Polyfilling is a process of create fallbacks for any particular technique which not supported by browser
// 2. Polyfill for bind: means creating custom bind function.

// Challenges for creating custom bind function
// 1. bind() can be access from any function or method. We can solve this using Function.prototype
// 2. It returns a function
// 3. It takes arguments from both bind() and new function which it returned. We can solve this using spread operator, array and apply().

let person1 = {
  firstName: "Rahul",
  lastName: "Biswakarm",
};

function printDetails(state, country) {
  console.log(
    `${this.firstName} ${this.lastName}, likes in ${state}, ${country}`
  );
}

Function.prototype.myBind = function (...args1) {
  let parentFunction = this; // this point to the method that called myBind()
  return function (...args2) {
    parentFunction.apply(args1[0], [...args1.slice(1), ...args2]);
  };
};

let printDetailsPerson1 = printDetails.myBind(person1, "Odisha");
printDetailsPerson1("India");
