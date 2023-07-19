let per = 80;

//Nested 

if (per > 90) {
  console.log('A');
} else if (per > 80) {
  console.log('B');
} else if (per > 70) {
  console.log('C');
} else if (per > 60) {
  console.log('D');
} else {
  console.log('fail');
}


// Using ternary operator
const result = per > 90 ? 'A' : (per > 80) ? 'B' : (per > 70) ? 'C' : (per > 60) ? 'D' : 'Fail';
console.log(result)