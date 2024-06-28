//Function Keyword
function greet(name) {
    return `Hello, ${name}!`;
  }
//Arrow Function Syntax
const add = (a, b) => a + b;
//Local Bindings
function example() {
    let localVar = "I'm local";
  }
  console.log(localVar); // Error: localVar is not defined
//return value
function multiply(a, b) {
    return a * b;
  }
function greet(name, greeting) {
  return `${greeting}, ${name}`;
}
greet("Alice"); // "undefined, Alice"
//Closure
function outer() {
    let outerVar = "I'm outer";
    return function inner() {
      console.log(outerVar);
    };
  }
  const innerFunc = outer();
  innerFunc(); // "I'm outer"
//Recursion
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  