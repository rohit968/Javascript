class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() { // this is a getter method
    //By using get, now we can use name() as a property
    console.log(`${this.name} is the user`);
  }

  setName(name, age) {
    console.log(`${this.name} is the user`);
  }
}

const c1 = new Person("Rohit", 28)
c1.name
