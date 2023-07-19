const fruits = ['apple', 'mango', 'grapes', 'banana'];

let fruit1 = fruits[0]
let fruit2 = fruits[1]
let fruit3 = fruits[2]
let fruit4 = fruits[3]

console.log(fruit1, fruit2, fruit3, fruit4)

//But this can become tedious when there are multiple elements in an array.
//This can be done by array destructuring

let [myFruit1, myFruit2, myFruit3, myFruit4, myFruit5] = fruits
console.log(myFruit1, myFruit2, myFruit3, myFruit4, myFruit5) // As myFruit5 points to the undefined element. The value will be undefined.

let [Fruit1, ...restFruits] = fruits // First element will go to Fruit1 and the rest of the array will go to the restFruits
console.log(Fruit1, restFruits);

let [fruit_1, , fruit_3,] = fruits // Here the empty space between commas repesents that the index of that posiiton will be skipped.
console.log(fruit_1, fruit_3); // As fruit1 is having element "Apple", then for 2nd one it is skipped, then 3rd is stored as "Grapes" and then the 4th is skipped
