let fruits = ['apple', 'mango', 'grapes', 'banana'];

for (let fruit in fruits) { // This will give the index and not the value of fruits
  console.log(fruits[fruit]);
}

//usually the array name will be in plural and variable in for-of loop will be its singular form.
