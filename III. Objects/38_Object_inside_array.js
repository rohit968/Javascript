//Very useful in real world applications

const users = [
  {
    userId: 1,
    name: "Rohit"
  },
  {
    userId: 2,
    name: "Aditya"
  },
  {
    userId: 3,
    name: "Rohith"
  }
]

//Accessing the values of the array

//As we already discussed that mostly we use for-of loop in case of arrays.

for (let user of users) {
  console.log(user.name);
}