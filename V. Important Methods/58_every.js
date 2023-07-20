const numbers = [2, 4, 6, 8, 10];
//Want to check if every element is even

const result = numbers.every((number) => {
  return number % 2 === 0
})
//every method returns a boolean
//It will return true is the condition is true for every element in the array
//If one element returns false, then every method will return false.


console.log(result);

//Real world example
const userCart = [
  { productId: 1, name: 'Laptop', price: 22000 },
  { productId: 2, name: 'TV', price: 32000 },
  { productId: 3, name: 'Mobile', price: 12000 },
]

//check every price is less than 30000
const price = userCart.every((item) => item.price < 30000)
console.log(price); //output: false. As the price of TV is greater than 30000