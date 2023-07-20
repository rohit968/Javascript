const numbers = [3, 5, 8, 9];
//check if some numbers are even

const result = numbers.some(number => number % 2 === 0)
console.log(result); // Returns true if any one element fulfills the condition

//Real world example
const userCart = [
  { productId: 1, name: 'Laptop', price: 22000 },
  { productId: 2, name: 'TV', price: 32000 },
  { productId: 3, name: 'Mobile', price: 12000 },
]

//check if any one element price is greater than 30000

const price = userCart.some(item => item.price > 30000)
console.log(price); //output: true. As the price of TV is greater than 30000