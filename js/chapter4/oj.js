let person = {
    name: "Alice",
    age: 30
  };
  console.log(person.name); // "Alice"
  console.log(person["age"]); // 30
  person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  person.greet(); // "Hello, my name is Alice"
  person.age = 31; // Changing the age property
  let numbers = [1, 2, 3, 4];
  numbers.push(5); // Adds 5 to the end of the array
  console.log(numbers); // [1, 2, 3, 4, 5]
        