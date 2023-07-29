// new function

function createUser(name, age) {
  this.name = name;
  this.age = age;
}

const user = new createUser("rohit", 7);

//Here new keyword perform 3 functions
// 1. create empty {} and this refers to this empty object
// 2. return the empty object or this.
// 3. automatically set the __proto__ variable

//EX: 
function createUser(name, age, email, address) {
  const user = Object.create(createUser.prototype) //Now we are getting the reference of userMethods in all the users we are creatign using this function
  user.name = name;
  user.age = age;
  user.email = email;
  user.address = address;
  return user;
}

createUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old.`
}
createUser.prototype.is18 = function () {
  return this.age >= 18;
}

const user1 = createUser('Rohit', 28, 'rohit@gmail.com', 'Suri Nagar, Morar');
console.log(user1);

//Re writing the same functionality using new keyword
function CreateUser(name, age, email, address) {
  //Here we dont need that user line as here this is directlu refering to the empty object in which the properties will be set.
  this.name = name;
  this.age = age;
  this.email = email;
  this.address = address;
  //Here we dont need to return this or anything as new keyword automatically returns the this.
}
CreateUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old.`
}
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
}
const user2 = new CreateUser('Rohit', 28, 'rohit@gmail.com', 'Suri Nagar, Morar');

console.log(user2);
