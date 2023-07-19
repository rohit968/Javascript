const person = { // also known as Object Literal
  name: "Rohit", // name(key) : "Rohit" (value)
  age: 28,
  hobbies: ['guitar', 'music', 'games'], // Can also store arrays inside a object
  tel: 1234567890
};


const { name, age, hobbies } = person; //This is called Object Destructuring
console.log(name, age, hobbies);

const { name: name1 } = person // Here the value of name is referenced by name1
console.log(name1);


const { name: name2, age: age1, ...restObj } = person //Same as array
console.log(name2, age1, restObj);