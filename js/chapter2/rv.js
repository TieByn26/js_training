// Example of using keywords in JavaScript

// These keywords cannot be used as variable, function, or class names:
// const if = 5;      // SyntaxError
// let while = 10;    // SyntaxError
// function for() {}  // SyntaxError
// class class {}     // SyntaxError

// However, they can be used as object property names:
const obj = {
    if: 5,
    while: 10,
    for: "loop",
    class: "test"
};

console.log(obj.if);     // 5
console.log(obj.while);  // 10
console.log(obj.for);    // loop
console.log(obj.class);  // test

// Some keywords can be used in special contexts:
const from = "source";
const set = "value";
const target = "goal";

console.log(from);   // source
console.log(set);    // value
console.log(target); // goal

// Example of using the keyword 'let' and 'var':
var letOutsideClass = "outside class";  // Allowed when declared outside class
console.log(letOutsideClass);           // outside class

// 'let' cannot be used inside a class:
class MyClass {
    constructor() {
        // let letInsideClass = "inside class"; // SyntaxError
        this.property = "inside class";  // Corrected version
    }
}

// Avoid using 'arguments' and 'eval' as variable names:
// const arguments = "args"; // SyntaxError
// const eval = "evaluate";  // SyntaxError

// Use different names instead:
const args = "args";
const evaluate = "evaluate";

console.log(args);     // args
console.log(evaluate); // evaluate
