let x = 2;
let y = 8;
const a = function(b) {
    debugger
  return function(c) {
      debugger
    return x + y + Math.abs(b) + c;
  }; 
};

// Statement will go here
y = 4

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));
console.log(fn(0 * 10));
console.log(fn(0.99999999 * 10));
debugger
console.log('hey')