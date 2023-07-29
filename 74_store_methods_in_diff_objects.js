// function createUser(name, age, email, address) {
//   const user = {}
//   user.name = name;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.about = function () {
//     return `${this.name} is ${this.age} years old.`
//   }
//   user.is18 = function () {
//     return this.age >= 18;
//   }
//   return user;
// }

// const user1 = createUser('Rohit', 28, 'rohit@gmail.com', 'Sui Nagar, Morar');
// console.log(user1);

//The above function is working fine. but there is a small problem.
//When we created user1, methods get allocation in the memorys somewhere.
// so, whenever we create a user, these methods will get created and will be given memory.
//As the methods are common for all, we can define them seperately and pass the reference of methods to the object.
//THis way they will not get created everytime we create a user and will also save us memory.

//We can do this by
const userMethods = {
  about: function () {
    return `${this.name} is ${this.age} years old.`
  },
  is18: function () {
    return this.age >= 18;
  }
};

function createUser(name, age, email, address) {
  const user = {}
  user.name = name;
  user.age = age;
  user.email = email;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser('Rohit', 28, 'rohit@gmail.com', 'Sui Nagar, Morar');
console.log(user1);

//This way if we create multiple users, the methods will be created only once and its reference will be passed everytime.
