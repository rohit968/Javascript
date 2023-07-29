const user1 = {
  name: "Rohit",
  age: 28,
  about: function () {
    console.log(this.name, this.age);
  },
};

const myFunc = user1.about;
console.log(myFunc); //Gets reference of user1.about in myFunc
myFunc(); //output: undefined . As if we run myFunc, then this keyword will refer to window object as this keyword is bind on the scope in runtime.

//To rectify this we can use bind method
const myFunc1 = user1.about.bind(user1);
myFunc1();
