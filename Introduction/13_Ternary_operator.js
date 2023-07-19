let age = 8;

//I need to store "Milk" to food variable if age > 8 otherwise "Coffee"
//We can do this with if-else statement

if (age === 8) {
  console.log("Milk")
} else {
  console.log("Coffee")
}

//But we can simplify this condition with ternary operator
// It returns a value

let food = age !== 8 ? "Milk" : "Coffee"
console.log(food);

//Syntax
//(condition) ? "If condition true" : "If condition false"