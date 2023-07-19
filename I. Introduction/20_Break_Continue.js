// printing 0 to 9


//break
for (let i = 0; i <= 9; i++) { // Will run until the condition is true
  if (i === 4) {
    break; // Break keyword stops the execution of the for loop and directly sends un outside the loop
  }
  console.log(i);
}
console.log('After for loop');

//continue
for (let i = 0; i <= 9; i++) { // Will run until the condition is true
  if (i === 4) {
    continue; // Continue keywod will skip the execution of this particular cycle of loop i.e. when i = 4 
  }
  console.log(i);
}
console.log("After continue loop");