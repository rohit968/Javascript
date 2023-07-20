//We can return anything from inside a function be it number, string, object, array or another fucnction

function func1() {
  function hello() {
    console.log("Inside hello");
  }
  return hello; //hello() is being returned.
}

const result = func1(); //in return the complete hello funciton is there
console.log(result);
result();


//important: Higher Order Functions -> If we take a function as input for a function or return a function, these are called Higher Order Functions.
//EX: Callback functions and function_returning_functions are Higher Order Functions
