//Param Destructuring

//Mostly used with Objects in Reactjs


const person = {
  name: "Rohit",
  age: 28
};

function printDetail(obj) {
  console.log(obj.name);
  console.log(obj.age);
};
printDetail(person)
//This is the normal way of accessing an object parameter.
//We can also use destructuing to get this functionality

function personDetails({ name, age }) { //This is called parameter destructuring
  console.log(name);
  console.log(age);
}
personDetails(person);