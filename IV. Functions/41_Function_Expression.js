// Function Expression

function namedisplay(name) {
  console.log(name);
}
//This is called function declaration

//We can convert function declaration into function expression. As the function is stored in a vaiable
const displayname = function (name) { //These are also called function expression as the function is not having any name.
  console.log(name);
}
//This is called function declaration

displayname('Rohit Tiwari')