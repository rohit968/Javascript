const animals = ['cat', 'dog', 'lion', 'crocodile'];

const newAnimals = animals.find((animal) => {
  return animal.length === 3;
})
// Always returns the first occurence of the element matching the condition
//In this case, cat is the first element matching the condition.

console.log(newAnimals);


//Real world example

const users = [
  { userId: 1, name: "Rohit" },
  { userId: 2, name: "Aditya" },
  { userId: 3, name: "Atiksh" },
  { userId: 4, name: "Ansh" },
]

console.log(users.find(user => user.userId === 3));