//Prototype and __proto__ is defferent.
//__proto__ was creating a reference but Prototype is an empty object that only functions provide.

function hello() {
  console.log("Hello");
}

// In javascript => functions = functions + object
//Jo function hain, woh function bhi hai sath mein object bhi hain
//EX: 

console.log(hello.name); // THis gives the name of the function

//function provides more useful properties like - call, bind and apply

//We can create our own property also
hello.myOwnProperty = "my own property" //This creates a new property in function
console.log(hello.myOwnProperty);

//Now functions also provide us with a free space which is an empty object{} and is called prototype.
//This prototype contains a constructor which points to the fucntion itself.
//And only functions provide prototype property

console.log(hello.prototype);

//We can add any property to prototype.
hello.prototype.abc = 'abc';
hello.prototype.sing = function () {
  console.log("Sing");
}

console.log(hello.prototype);


//USE CASE OF PROTOTYPE
//In previous code we will use prototype


// const userMethods = {
//   about: function () {
//     return `${this.name} is ${this.age} years old.`
//   },
//   is18: function () {
//     return this.age >= 18;
//   }
// };

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
//Now instead of defining another object for different methods we will assign the methods to the prototype of createUser function
//As we just now saw that function gives us extra space i.e. prototype.



