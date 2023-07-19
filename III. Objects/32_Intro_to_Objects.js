// Objects -> reference types -> stored in heap memory in a similar way as arrays

//arrays are good but not sufficient for real world data.
//objects store key value pair
// objects don't have indexes


//how to create objects

const person = { // also known as Object Literal
  name: "Rohit", // name(key) : "Rohit" (value)
  age: 28,
  hobbies: ['guitar', 'music', 'games'] // Can also store arrays inside a object
};
//keys in the object are unique
//In case of duplication, always the latest key will be considered.


console.log(person);

//how to access data from objects

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

//If we want to access individual hobbies, then we can write like this
console.log(person.hobbies[1]); // output: music



//Adding a key value pair to objects
person.gender = "male" // this will add gender(key ) and male (value) to the object person
console.log(person);