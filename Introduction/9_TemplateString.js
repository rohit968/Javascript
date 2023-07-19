let fname = "Rohit"
let lname = "Tiwari"
let age = 28;

//My name is Rohit Tiwari and my age is 28
let aboutMe = "My name is " + fname + " " + lname + " and my age is " + age;
console.log(aboutMe);

//This does the work but writing this aboutMe for each and every variable is tedious.
//Template String

aboutMe = `Myself ${fname} ${lname} and my age is ${age}`
console.log(aboutMe)