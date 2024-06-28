let jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"Alice","age":31}'
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // {name: "Alice", age: 31}
