const person = { // also known as Object Literal
  name: "Rohit", // name(key) : "Rohit" (value)
  age: 28,
  hobbies: ['guitar', 'music', 'games'] // Can also store arrays inside a object
};

//To iterate over objects as they do not have indexes, we can use 2 methods
// 1. for in loop
// 2. Object.keys


// 1. for in loop
for (let key in person) { // In key we will get all the keys
  //console.log(person[key]); //This will provide with the values of the corresponding key.
  //We will not use dot notation here
  console.log(`${key} : ${person[key]}`);
}


// 2. Object.keys

console.log(Object.keys(person)) // Object.keys will give all the keys that are present in the object person
console.log(Object.values(person)); // Object.values will give all the values that are present in the object person

console.log(`${Object.keys(person)} : ${Object.values(person)}`);

for (let key of Object.keys(person)) {
  console.log(person[key]);
}