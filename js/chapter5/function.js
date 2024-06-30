//Abstraction
function repeat(action, times) {
    for (let i = 0; i < times; i++) {
      action(i);
    }
  }
  repeat(console.log, 3); // Logs 0, 1, 2
//Higher-Order Functions
function greaterThan(n) {
    return function(m) {
      return m > n;
    };
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11)); // true
//Function Creation
function createMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  let double = createMultiplier(2);
  console.log(double(5)); // 10  
//Function Transformation
function negate(func) {
    return function(...args) {
      return !func(...args);
    };
  }
  let isNotNaN = negate(isNaN);
  console.log(isNotNaN(42)); // true
//Array Methods
  
