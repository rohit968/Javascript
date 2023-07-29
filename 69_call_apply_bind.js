//CALL

const user1 = {
  name: "Rohit",
  age: 28,
  about: function () {
    console.log(this.name, this.age);
  }
}
user1.about()
//Here, this will refer to the object that is calling the about function.

const user2 = {
  name: 'Atiksh',
  age: 3
}
//Now we want to have about() in user2.

user1.about.call(user2); //Here we are telling that now this keyword wil refer to user2 as user1's about is calling user2.
//output: Atiksh 3

user1.about.call() //Output: undefined
user1.about.call(user1) //If we are using call, then we have to specify or user1 also




//WITH PARAMETERS
const person1 = {
  name: "Rohit",
  age: 28,
  about: function (hobby, musician) {
    console.log(this.name, this.age, hobby, musician);
  }
}
user1.about()
//Here, this will refer to the object that is calling the about function.

const person2 = {
  name: 'Atiksh',
  age: 3
}
//Now we want to have about() in user2.

person1.about.call(person2, 'Games', 'Arijit Singh'); //Here we are telling that now this keyword wil refer to user2 as user1's about is calling user2.
//output: Atiksh 3

person1.about.call(person1, "Football", 'Shaan') //If we are using call, then we have to specify or user1 also


//APPLY
//Not much diff b/w call and apply, just the different ways o passing the parameters
person1.about.call(person2, ["Football", 'Shaan']) //If we are using call, then we have to specify or user1 also
//We pass the arguments in form of array


//BIND
//bind returns a function and we can call that function in future anytime.
const func = person1.about.bind(person2, 'Guitar', 'Shaan')
func();