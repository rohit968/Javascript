//Primitive
//Stored in memory stacks

let num1 = 6;
let num2 = num1;
console.log('Num1', num1);
console.log('Num2', num2);
num1 = 8;
console.log('Num1', num1);
console.log('Num2', num2);
//Both the variables will show different values as they are stored in different memory stacks

//Reference 
//Stored in the memory heap instead of stacks

let array1 = ['item1', 'item2'];
let array2 = array1; // This will make array2 to reference array1 i.e. Both the arrays will be pointing to the same memory heap.
console.log("ARRAY1", array1);
console.log("ARRAY1", array1);
array1.push('item3'); //Adding new element in array1
console.log("After pushing element");
console.log("ARRAY1", array1);
console.log("ARRAY2", array2);
//Both the array values will change as changes in one array automatically reflect in the other array