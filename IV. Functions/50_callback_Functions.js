//Callback Functions -> We can pass a function as an argument to another function.

function test1(param) { //In param, entire test2 function will be there
  console.log('Inside test1');
  console.log(param);
  param(); //We can call test2() from inside the test1()
}

function test2() {
  console.log('Inside test2');
}

test1(test2) //Function test2 is passed as an argument to test1()



//So there is a convention, then whenever we pass a function to another funciton as agument, we keep the parameter name as "callback" and calls the callback.

function test3(callback) { //In param, entire test2 function will be there
  console.log('Inside test3');
  callback('Rohit'); //We can call test4() from inside the test3() // This is similar to test4("Rohit")
}

function test4(name) {
  console.log('inside test4');
  console.log(`Your name is ${name}`);
}

test3(test4)