const user1 = {
  name: "Rohit",
  age: 28,
  about: function () {
    console.log(this.name, this.age);
  },
};

user1.about(); // this works fine


const user2 = {
  name: "Atiksh",
  age: 28,
  about: () => {
    console.log(this.name, this.age);
  },
};

user2.about(); // output: undefined. As arrow function do not have its own this. It takes this from one block above. i.e. window object


//Important: 
//we cannot change the reference of this keyword in arrow function.
//If we do
user2.about.call(user2);
//then also it will be undefined.
