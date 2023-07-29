//Methods -> functions inside objects

const person = {
  name: "rohit",
  age: 28,
  about: function () { //This is called a method
    console.log('Name is Rohit and age is 28');
    //console.log(`Name is ${name} and age is ${age}`); //This will give error
  }
};


person.about() //how we can access a method
//Problem with this is the name and age are hard coded inside the function.

//Now for doing things dynamically we have to use this keyword

const user = {
  name: "rohit",
  age: 28,
  about: function () { //This is called a method
    console.log(`Name is ${this.name} and age is ${this.age}`); //This will give error
    console.log(this); //Refers to the current object
  }
};

user.about(); //it gives the correct output

//We will get to know the value of this keyword in runtime not when we are writing the code
//Here this keyword refers to the object person.
