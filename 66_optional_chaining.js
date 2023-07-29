const user = {
  name: 'Rohit',
  // address: { housenumber: 123 }
};

console.log(user.name);
// console.log(user.address.housenumber);

//Now what if address in not present or commented out
//Now the 2nd console.log will result in an error. Cannot read properties of undefined

console.log(user.address) // output: undefined . As address is not present in user.

//But sometime it takes few seconds for the data to be loaded.
//So we dont want error, instead we want undefined.
//We can use (?.) so that it checks for undefined or null condition.

console.log(user?.address?.housenumber); // This is called optional chaining
//Here it first checks if uesr is present or undefined/null
//If present it will check further otherwise will return undefined
//Similarly, it will check for the presence of address and housenumber

