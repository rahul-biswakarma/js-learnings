// Closures is process by with a function preserves its parents parameters or can access its parent function parameters

function multiple(x) {
  return function (y) {
    console.log(x * y);
  };
}

let multipleByTwo = multiple(2);
multipleByTwo(6);
