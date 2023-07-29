// const userMethods = {
//   about: function () {
//     return `${this.name} is ${this.age} years old.`
//   },
//   is18: function () {
//     return this.age >= 18;
//   }
// };

// function createUser(name, age, email, address) {
//   const user = {}
//   user.name = name;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.about = userMethods.about;
//   user.is18 = userMethods.is18;
//   return user;
// }

// const user1 = createUser('Rohit', 28, 'rohit@gmail.com', 'Sui Nagar, Morar');
// console.log(user1);

//Now this code is working fine, but there is a small problem
//If we want to add hundreds of methods afterwards, we need to add them in both userMethods and createUser()
//Let's see how to solve this

//Object.create -> THis is another way to create an object

const obj1 = {
  key1: 'value1',
  key2: 'value2'
};

const obj2 = {
  key3: 'value3'
}

console.log(obj2.key1); //This will give undefined as there is no key1 in obj2.
//But I want that if I run this statement, javascript should go to obj1 for key1 if not present in obj2
//i.e.  reference to obj1
// This can be done

const obj3 = Object.create(obj1); //THis will store the key-value pairs og obj1 in the __porto__ of obj3;
//If an element not found in obj3, javascript will search for that in its __porto__ i.e. obj1
obj3.key3 = 'value3';
console.log(obj3); // If we check in console __porto__ or [[prototype]] will be written. Both are same thing.


//Now for the above problem

const userMethods = {
  about: function () {
    return `${this.name} is ${this.age} years old.`
  },
  is18: function () {
    return this.age >= 18;
  }
};

function createUser(name, age, email, address) {
  const user = Object.create(userMethods) //Now we are getting the reference of userMethods in all the users we are creatign using this function
  user.name = name;
  user.age = age;
  user.email = email;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser('Rohit', 28, 'rohit@gmail.com', 'Sui Nagar, Morar');
console.log(user1); //It will display the methods also. as the methods are stored in every user created's __proto__. you can check in console also.
console.log(user1.about());
//Javascript will first check in the object for this function and after that it will check in __proto__ if not found in object.

//Now if we add multiple methods, they will be present in the userMethods.
