// This keyword -> view 67_methods.js to understand this
//Here are use cases of this keyword

function personInfo() {
  console.log(`My name is ${this.name} and age is ${this.age}`); //Here this keyword refers to the currect object who calls the function personInfo
}

const person1 = {
  name: "Rohit",
  age: 28,
  about: personInfo
};

const person2 = {
  name: "Aditya",
  age: 25,
  about: personInfo
};

const person3 = {
  name: "Atiksh",
  age: 3,
  about: personInfo
};

person1.about(); // Now this keyword will refer to the person1 object and this.name and this.age value will be initialized at the runtime.
person2.about(); // Similar to above
person3.about(); // Similar to above


console.log(this);
//Here this keyword refers to the window object i.e a global object.
console.log(window); // It will also refer to window object.

//If we directly write function without object and then use this keyword inside that funciton.
//It will refer to the window object

function myFunc() {
  //"use Strict" // If we use this then the output will be undefined otherwise window object. We can use "use strict" at the top of the file also.
  console.log(this);
}
myFunc();