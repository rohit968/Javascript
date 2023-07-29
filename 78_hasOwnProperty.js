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

//lets print all the keys of user2

for (let key in user2) {
  console.log(key);
  //Here as you can see in output, it is showing all the keys even the keys of the prototype methods is18 and about.
}

//But I dont want the keys of the prototypes to be shown. Only the keys of the object i.e. name, age, address, email.
//This can be done as 

console.log('Only object keys without prototype keys');
for (let key in user2) {
  if (user2.hasOwnProperty(key)) {
    console.log(key);
  }
}