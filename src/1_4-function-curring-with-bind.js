// Function Curring is a technique for transformation of the function of multiple arguments into several functions of a single argument in sequence
// We take a function with many arguments and then curry it with one paramete per function

function multiple(x, y) {
  console.log(x * y);
}

let multipleByTwo = multiple.bind(this, 2);
multipleByTwo(5);

let multipleByThree = multiple.bind(this, 3);
multipleByThree(5);
