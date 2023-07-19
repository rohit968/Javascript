const person = { // also known as Object Literal
  name: "Rohit", // name(key) : "Rohit" (value)
  age: 28,
  hobbies: ['guitar', 'music', 'games'] // Can also store arrays inside a object
};

//using square brackets
console.log(person['name']); //For key we have to add string.


//adding key value pair using bracket notation
person['gender'] = 'male'
console.log(person);


//Diff b/w dot notation and bracket notation

// 1. If we want to add the key that has space then we have to use bracket notation
// EX: 
person['person address'] = "India" // As we have space in key, we cannot use dot notaion as it will create error
console.log(person);

// 2. If we want to add a key value pair that are stored in other variable
let key = 'email'
person[key] = 'rohit@gmail.com'
console.log(person);

