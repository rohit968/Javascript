// const user = {
//   name: "ROhit",
//   email: 'rohit.tiwari968@gmail.com',
//   age: 28,
//   address: 'Suri Nagar, Morar, Gwalior',
//   about() {
//     return `${this.name} is ${this.age} years old.`
//   },
//   is18() {
//     return this.age >= 18;
//   }
// }

//Now this a single user. Imagine if we want to create hundreds of users like this.
//We will use functions to create this functionality

function createUser(name, age, email, address) {
  const user = {}
  user.name = name;
  user.age = age;
  user.email = email;
  user.address = address;
  user.about = function () {
    return `${this.name} is ${this.age} years old.`
  }
  user.is18 = function () {
    return this.age >= 18;
  }
  return user;
}

const user1 = createUser('Rohit', 28, 'rohit@gmail.com', 'Sui Nagar, Morar');
console.log(user1);

//Now we have created a function to create multiple objects
//But in this way also there are something wrong that we will see in next part