//Rest parameters
//If user provides dynamic number of arguments to a fucntion we can use rest parameter for that.

//EX:

function myFunc(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
myFunc(1, 2, 3, 4, 5, 6, 7)

//In above function, there are fixed number of parameters.


function myFuncRest(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
myFuncRest(1, 2, 3, 4, 5, 6, 7)
//This function will take dynamic number of arguments so that
//a=1, b=2 and c will be equal to rest of the arguments in the array form.

