const numbers = [5, 9, 1200, 400, 3000];
console.log(numbers.sort()); //This is not normal output as javascript sorts the number array by taking them as string and not number.
//It will convert these number in the ASCII code and checks the value of each number and then sort.

//This will be useful in some cases.
//Let's say we want to sort an array with usernames.
//It will sort the array according to the dictionary.

const names = ["rohit", "aditya", "atiksh", "ansh", "ADITYA", "XYZ"]
console.log(names.sort());
//It will first sort the elements with capital letters than small letters


//To sort the numbers
const asc = numbers.sort((a, b) => a - b); //Sorting in ascending order
const des = numbers.sort((a, b) => b - a); //Sorting in descending order

console.log("Ascending");
console.log(asc);


console.log("Descending");
console.log(des);

//how it works
//1200 400
// a - b -> 790
// a - b -> positive (greater than 0) ----> keep first b then a -> 400 1200

// 4  9
// a - b -> -4
// a - b -> negative ----> keep a first then b -> 4,9


//Real world useCase

const userCart = [
  { productId: 1, name: 'Laptop', price: 22000 },
  { productId: 2, name: 'TV', price: 32000 },
  { productId: 3, name: 'Mobile', price: 12000 },
]

//We will be sorting the products according to their price
//lowToHigh

const lowToHigh = userCart.slice(0).sort((a, b) => {
  return a.price - b.price;
})
//We are using slice to clone the array first as sort will mutate the original array and we dont want that

console.log(lowToHigh);