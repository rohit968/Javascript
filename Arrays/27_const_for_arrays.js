const fruits = ['apple', 'mango', 'grapes', 'banana'];

fruits.push('Onion'); //This works as we are not changing the address on which the arrray is there.
console.log(fruits);

fruits = ['grapes'] // THis will not work as this is changing the address on which array is stored.

//Most of the developers use const for the reference type variables.