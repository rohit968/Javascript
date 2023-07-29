//Previously we saw that we can clone values of one object into another object using spread operator.
//EX: 
const obj1 = {
  id: 1,
  name: "Rohit"
};

const obj2 = { ...obj1 };
obj1.age = 28

console.log(obj1);
console.log(obj2);
// As you can see both the objects are pointing to different address in the heap memory
// As obj1 is cloned in obj2

// There is another way of cloning.

const obj3 = Object.assign({}, obj1);
console.log(obj3); //obj1 is cloned in obj3