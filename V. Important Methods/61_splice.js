// splice method -> If you want to delete or insert in middle of the array
// start, delete, insert

const arr = ['item1', 'item2', 'item3']
console.log(arr);

//delete -> item2
const deletedItem = arr.splice(1, 1,); //It starts from index 1, deletes 1 element and inset none.
//returns the array delete item
console.log(arr);
console.log(deletedItem); // This is an array 


//insert -> item4
arr.splice(1, 0, 'item4'); //insert at index 1, delete count, what to insert
console.log(arr);

//insert and delete

const result = arr.splice(1, 2, 'item5, item6'); //returns an array of deleted array
console.log(arr);
console.log(result);

