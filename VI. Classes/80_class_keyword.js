class CreateUser {
  constructor(name, email, age, address) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;
    //No need to use return as it autmatically returns the object
  }

  about() {
    return `${this.name} is ${this.age} years old.`
  }

  is18() {
    return this.age >= 18
  }

  sing() {
    return 'la la la la'
  }
}

//WE need to call the class with new keyword

const user = new CreateUser("Rohit", 'rohit@gmail.com', 28, "Suri Nagar")
console.log(user);


//Extends keyword
//extends helps to create new objects using inheritance
class Rohit extends CreateUser {
  constructor(name, age, speed) {
    super(name, age);
    //super means he parent class i.e. user class
    //This line means that we want to use name and age of the parent class.
    this.speed = speed
  }
}

const r1 = new Rohit("Tiwari", 23, 'tiwari@gmail.com');
console.log(r1);
const r2 = new Rohit("Tiwari", 23, 'tiwari@gmail.com', 95);
console.log(r2);