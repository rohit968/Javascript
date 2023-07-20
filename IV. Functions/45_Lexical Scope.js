//Lexical scope is the scope or block where a function used is defined.
//EX: below for myFunc(), the lexical scope is of app().
//Javascript will first check for the value in its called function. If not found, it will check for value in its lexical scope.


const name = "Rohit Tiwari" //Will be called if name variable not found inside the app()
const app = () => {
  const name = "Rohit"; //If not found, it will check for name value in app()

  function myFunc() {
    const name = "Tiwari" //If I comment this out then the value of name below will be "Rohit"
    console.log("inside myFunc", name); //Javascript will check for value inside myFunc().
    const myFunc3 = () => {
      const name = "RT" //1st will be checked, then its lexical scope myFunc(), then its lexical scope app(), then its lexial scope i.e. globally
      console.log(name);
    }
    myFunc3();
  }

  console.log(name);
  myFunc();
}

app();

//If the variable name is not found inside the app() also, then javascript will check for the name variable in global scope.