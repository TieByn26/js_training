// Examples of valid identifiers in JavaScript

// Constants
const PI = 3.14;
const _secret = "hidden";
const $price = 100;

// Variables
let i = 0;
let my_variable_name = "identifier example";
let v13 = 42;
let _dummy = "dummy";
let $str = "string";

// Functions
function calculateArea(radius) {
    return PI * radius * radius;
}

function _privateFunction() {
    return _secret;
}

function $dollarFunction(value) {
    return value * $price;
}

// Classes
class MyClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

class _HiddenClass {
    constructor(code) {
        this.code = code;
    }

    reveal() {
        return `Code is ${this.code}`;
    }
}

class $DollarClass {
    constructor(amount) {
        this.amount = amount;
    }

    getTotal() {
        return this.amount * $price;
    }
}

// Using the defined identifiers
console.log(calculateArea(5));         // 78.5
console.log(_privateFunction());       // hidden
console.log($dollarFunction(2));       // 200

const obj1 = new MyClass("Alice");
console.log(obj1.greet());             // Hello, Alice!

const obj2 = new _HiddenClass("xyz");
console.log(obj2.reveal());            // Code is xyz

const obj3 = new $DollarClass(3);
console.log(obj3.getTotal());          // 300
