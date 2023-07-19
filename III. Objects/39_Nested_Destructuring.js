
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

const [user1, user2, user3] = users; // We will use array symbol as we are destructuring array
console.log(user1);
console.log(user2);
console.log(user3);

//If we want individual properties
const [{ name }, , { userId }] = users //As we wanted the name from 1st user and userId from 3rd user this is how we can do that.
console.log(name, userId);


const [{ name: user1name }, , { userId: user3gender }] = users
console.log(user1name, user3gender);