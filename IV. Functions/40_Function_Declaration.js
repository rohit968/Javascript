//Fucntions are used to do a certain amount of work multiple times

function twoPlusFour() {
  console.log(2 + 4);
}
twoPlusFour();


function twoPlusFive() {
  return 2 + 5; //We can return a value also
}
let result = twoPlusFive();
console.log(result);



function namedisplay(name) { //These are called parameters
  return name;
}
const name = namedisplay("Rohit") //These are called arguments
const n = namedisplay(); //output: undefind as there is no argument given
console.log(name);

//Important: undefined + undefined = NaN
//Important: 2 + 3 + undefined = NaN

//This way of writing functions are called function declaration.