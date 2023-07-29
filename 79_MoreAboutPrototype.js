let numbers = [1, 2, 3]
//Now the funstions we get in an array comes from its prototype.
//But be studied that prototype is only for object. But array are no objects.
//This is bcecause javascript creates the array as 
let arr = new Array(1, 2, 3)
//In this we get all the methods in prototype.
console.log(arr)

console.log(Object.getPrototypeOf(numbers)); //THis will show the prototype of numbers

console.log(Array.prototype); //prototype of array is array

//But by default prototype is object, but we can change the prototype
function hello() {
  console.log("Hello function");
}
console.log(hello.prototype);

//We can change the prototype
hello.prototype = [];
console.log(hello.prototype);

//We can store some data in these prototype
hello.prototype.push('Rohit');
console.log(hello.prototype);