// const user1 = {
//   name: "Rohit",
//   age: 28,
//   about: function () {
//     console.log(this.name, this.age);
//   },
// };


//THere is a shorter syntax for methods in objects
const user1 = {
  name: "Rohit",
  age: 28,
  about() {
    console.log(this.name, this.age);
  },
};

user1.about()