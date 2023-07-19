const person = { // also known as Object Literal
  name: "Rohit", // name(key) : "Rohit" (value)
  age: 28,
  hobbies: ['guitar', 'music', 'games'] // Can also store arrays inside a object
};

//Spread operator is used to make a clone og object. Both the objects will refer to different addresses in heap memory.
//Changes in one object will not make changes in other.

const newPerson = { ...person, tel: 1234567890 }
console.log(newPerson);


const newObj = { ..."abc" }; // Here index will acts as keys and alphabet as values
console.log(newObj);


const newObj1 = { ...['item1', 'item2'] }; // Here index will acts as keys and alphabet as values
console.log(newObj1);
