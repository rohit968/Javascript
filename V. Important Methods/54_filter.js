//Filter method -> used to filter the array with the specified condition and returns a new array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter(number => number % 2 === 0) // for each number it will check the condition and if the condition is true then it will return that number in the array
console.log(even);

