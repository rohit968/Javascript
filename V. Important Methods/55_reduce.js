//Reduce method ->  

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 100); // This 100 value is the default value for the accumulator
//By default, the accumulator gets the 1st value of the array i.e 1. But sometime if we want to add some initial value to accumulator like 100 in above case, we can do that
console.log(result);


//accumulator , currentValue,  return
//  1              2             3
//  3              3             6
//  6              4             10
//  10             5             15
//  15             6             21
//  21             7             28
//  28             8             36

//Real world Example

const userCart = [
  { productId: 1, name: 'Laptop', price: 22000 },
  { productId: 2, name: 'TV', price: 32000 },
  { productId: 3, name: 'Mobile', price: 12000 },
]

const totalCartAmount = userCart.reduce((totalPrice, currentProductPrice) => {
  return totalPrice + currentProductPrice.price
}, 0)//Initial totalPrice value will be 0

console.log(totalCartAmount);