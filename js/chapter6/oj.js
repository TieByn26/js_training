//
function createPerson(name) {
    let _name = name;
    return {
      getName() {
        return _name;
      },
      setName(newName) {
        _name = newName;
      }
    };
  }
//
let person = {
    greet() {
      console.log("Hello!");
    }
  };
//
let animal = {
    speak() {
      console.log("Animal speaks");
    }
  };
  let dog = Object.create(animal);
  dog.speak(); // "Animal speaks"
//
class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  }
//
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    get area() {
      return this.width * this.height;
    }
    set area(value) {
      this.width = Math.sqrt(value);
      this.height = Math.sqrt(value);
    }
  }
//
class MathHelper {
    static square(x) {
      return x * x;
    }
  }
//
class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  class Dog extends Animal {
    speak() {
      console.log("Dog barks");
    }
  }
//
let d = new Dog();
console.log(d instanceof Dog); // true
console.log(d instanceof Animal); // true
//
let sym = Symbol("description");
let obj = {
  [sym]: "value"
};
//
let iterable = {
    [Symbol.iterator]() {
      let step = 0;
      return {
        next() {
          step++;
          if (step <= 5) {
            return { value: step, done: false };
          }
          return { done: true };
        }
      };
    }
  };
  