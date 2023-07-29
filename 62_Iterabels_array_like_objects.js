//Iterables -> on which we can use for of loop
//like string, arrays are iterables

const firstName = "Rohit"
for (let char of firstName) {
  console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for (let item of items) {
  console.log(item);
}

//Objects are not iterable

//array like objects -> who have length property and can be accessed with indexes
//like:- string

const lastName = 'Tiwari'
console.log(lastName.length);
console.log(lastName[2]);