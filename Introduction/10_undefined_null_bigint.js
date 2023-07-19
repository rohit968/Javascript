//undefined

let age; //If varaible is declared and not initialized then the output will be undefined
console.log(age) //output: undefined

var a; // output: undefined
// const b; // This will give an error as "Missing initializer in const declaration"
//Need to initialize the variable at the time of definition with const.


// null

let b = null;
console.log(b, typeof b); //output: null, object. THis is a bug/error in javascript and is not rectiffied because the millions of code is already been written using this typeof null bug.
b = "Rohit";
console.log(b, typeof b);


//BigInt
let num1 = 123; // this is a number type
let num2 = BigInt(456); // output: 456n . this is bigint type
let num3 = 123n; // output: 123n . this is bigint type

console.log(num2);
console.log(num3);

console.log(num2 + num3) // output: 579n. 
console.log(num1 + num2 + num3) // This produces error as Bigint can't be used with any other datatype.
                                // Error: Cannot mix BigInt and other typres, use explicit conversions.
