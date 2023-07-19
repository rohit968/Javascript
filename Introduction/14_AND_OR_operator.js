let first_name = "Rohit"
let age = 28

let result = (first_name[0] === 'H' && age >= 18) ? "Adult" : "Teen"
// && operator -> Both the given conditions should be true in order for the complete condition to be true
console.log(result)


result = (first_name[0] === 'H' || age >= 18) ? "Adult" : "Teen"
// || operator -> Any of the given conditions should be true in order for the complete condition to be true
console.log(result)